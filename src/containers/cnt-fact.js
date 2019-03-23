import React, { Component } from 'react';
import { connect } from 'react-redux';

class Fact extends Component {
    render() {
        String.prototype.replaceAt=function(index, replacement) {
            return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
        }

        const text = this.props.data.text;
        if (this.props.data && this.props.displayingFact === this.props.id) {
            return <div className="fact">
            <p className="fact-text">{text.replaceAt(0, text.charAt(0).toUpperCase())} in  {this.props.data.year}</p>
            </div>
        } else {
            return <div></div>
        } 
    }
}

const mapStateToProps = state => {
    return {
        data: state.data,
        displayingFact: state.displayingFact
    }
}

export default connect(mapStateToProps)(Fact);