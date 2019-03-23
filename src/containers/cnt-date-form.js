import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateDate, updateMonth, updateData, updateDisplayingFact } from '../actions/actions';


class DateForm extends Component {
    constructor(props) {
        super(props);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleInputChange(event) {
        const type = event.target? event.target.name : null;
        const input = event.target? event.target.value : null;
        
        if (input && type === 'day') {
            if (input !== this.props.day) {
                this.props.updateDate(input);
            }
        } 

        if (input && type === 'month') {
            if (input !== this.props.month ) {
                this.props.updateMonth(input);
            }
        }
    }

    handleSubmit(event) {
        event.preventDefault();
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

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                day: <input type="number" name="day" onChange={this.handleInputChange} />
                </label>
                <label>
                month: <input type="number" name="month" onChange={this.handleInputChange} />
                </label>
                <input type="submit" className="btn" value="Find Event"/>
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