import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDate, updateMonth, updateData, updateDisplayingFact } from '../actions/actions';


class DateForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.checkError = this.checkError.bind(this);

    }

    handleInputChange(event) {
        const type = event.target? event.target.name : null;
        const input = event.target? event.target.value : null;
        
        if (input && type === 'day') {
            this.checkError(input);
           this.props.updateDate(input);
        } 

        if (input && type === 'month') {
            this.checkError(this.state.day,input);
            this.props.updateMonth(input);
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        // if there is error in user input don't fetch data
        if (this.state.error) {
            return;
        }

        const url = `https://numbersapi.p.rapidapi.com/${this.props.day}/${this.props.month}/date?fragment=true&json=true`
        const dataPromise = fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                "X-RapidAPI-Key": "xXQpmMjqpImshQiKJt0QH9F8GT4Ip1k9csDjsnJoEjI0CnEFdE"
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
        .then(response => response.json())
        .then(data => {
            this.props.updateData(data)
            this.props.updateDisplayingFact(this.props.displayingFact);
        });

    }

    // inform user that the input is invalid
    checkError(day = this.props.day, month = this.props.month ) {
        const month31days = [1,3,5,7,8,10,12];
        //const month30days = [4,6,9,11];
        let error = {
            isError: false,
            errorText: ''
        }
        // check day input: 1) if this month is Feb => check Feb input 2) else check regular day input range [1-31]
        if (month !== '') {
            if (parseInt(month) === 2) {
                if (parseInt(day) > 29 || parseInt(day) < 1) {
                    error.isError = true;
                    error.errorText += ' Input day is out of range.';
                }
            } else {
                if (month31days.find(mon => mon === parseInt(month))) {
                    if (parseInt(day) > 31 || parseInt(day) < 1) {
                        error.isError = true;
                        error.errorText += ' Input day is out of range.';
                    }
                } else {
                    if (parseInt(day) > 30 || parseInt(day) < 1) {
                        error.isError = true;
                        error.errorText += ' Input days is out of range.';
                    }
                }
                
            }
        }
        
        // check month input range [1-12]
        if (parseInt(month) > 12 || parseInt(month) < 1) {
            error.isError = true;
            error.errorText += 'Input month is out of range';
        }

        this.setState({
            error: error.errorText
        });

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                <b>Day:</b> <input type="number" name="day" onChange={this.handleInputChange} />
                </label>
                <label>
                <b>Month:</b> <input type="number" name="month" onChange={this.handleInputChange} />
                </label>
                <input type="submit" className="btn" value="Find Event"/>
                <div class="error-warning">
                    <p>{this.state.error}</p>
                </div>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        day: state.day,
        month: state.month,
        displayingFact: state.displayingFact
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateDate: bindActionCreators(updateDate, dispatch),
        updateMonth: bindActionCreators(updateMonth, dispatch),
        updateData: bindActionCreators(updateData, dispatch),
        updateDisplayingFact: bindActionCreators(updateDisplayingFact, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DateForm) ;