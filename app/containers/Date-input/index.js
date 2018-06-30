import React, { Component } from 'react';
import WidgetCalendar from '../Calandar';

const dateRegExp = /\d{1,2}\.\d{1,2}\.\d{4}\s\d{1,2}\.\d{1,2}\.\d{4}/;

class DateInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: ''
        }
    }

    foo(e) {
        e.preventDefault(); console.log('s'); this.props.changeDate(this.state.date)
    }

    render() {
        // console.log(dateRegExp.test(this.state.date))
        // console.log(new Date(this.props.from).getDate(), new Date(this.props.from).getMonth(), new Date(this.props.from).getFullYear());
        const dateStringFrom = new Date(this.props.from).getDate() + '.' + (new Date(this.props.from).getMonth() + 1) + '.' + new Date(this.props.from).getFullYear();
        const dateStringTo = new Date(this.props.to).getDate() + '.' + (new Date(this.props.to).getMonth() + 1) + '.' + new Date(this.props.to).getFullYear();
        return (
            <div className='Date-input' 
            onClick={() => this.props.changeCalendarToFalse()}
            >
                {
                    this.props.isCalendarActive ?
                        <input onChange={(e) => { this.setState({ date: e.target.value }); this.props.changeDate(e.target.value) }} 
                        value={dateStringFrom + ' ' + dateStringTo} 
                        style={{ textAlign: 'left' }}
                        // disabled
                        /> :
                        <input onChange={(e) => { this.setState({ date: e.target.value }); 
                            console.log(e.target.value.indexOf('..'))
                            if(e.target.value.indexOf('..')===-1) {
                                this.props.changeDate(e.target.value)                                
                            }
                        }} 
                        placeholder={dateStringFrom + ' ' + dateStringTo} 
                        // value={dateStringFrom + ' ' + dateStringTo} 
                        style={{ textAlign: 'left' }}
                        />
                }
            </div>
        );
    }
}

export default DateInput;