import React from 'react';

export default class TodayDate extends React.Component {
    constructor() {
        super();

        var today = new Date(),
            date = (today.getMonth() + 1) + '-' + today.getDate() + '-' + today.getFullYear();

        this.state = {
            date: date
        };
    }

    render() {
        return (
            <div className='date'>
                {this.state.date}
            </div>
        );
    }
}