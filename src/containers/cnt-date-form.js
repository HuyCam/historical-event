import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDate, updateMonth } from '../actions/actions';

class DateForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.inputDate = React.createRef();
        this.inputMonth = React.createRef();
    }

    handleInputChange() {
        if (this.inputDate.current) {
            if (this.inputDate.current.value !== this.props.date) {
                console.log('only update Date');
                this.props.updateDate(this.inputDate.current.value);
            }
        } 

        if (this.inputMonth.current) {
            if (this.inputMonth.current.value !== this.props.month ) {
                console.log('only update Month');
                this.props.updateMonth(this.inputMonth.current.value);
            }
        }
        
    }

    render() {
        console.log(this.props);
        
        return (
            <form>
                <label>
                date: <input type="number" name="date" onChange={this.handleInputChange} ref={this.inputDate}/>
                </label>
                <label>
                month: <input type="number" name="month" onChange={this.handleInputChange} ref={this.inputMonth}/>
                </label>
                <input type="submit" />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        date: state.date,
        month: state.month
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDate: bindActionCreators(updateDate, dispatch),
        updateMonth: bindActionCreators(updateMonth, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateForm) ;