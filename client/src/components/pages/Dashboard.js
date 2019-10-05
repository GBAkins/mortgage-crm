import React from 'react';
import TodayDate from "../layouts/TodayDate";
import BirthdaysAnniversaries from '../layouts/BirthdaysAnniversaries';

export default function Dashboard() {
    return (
        <div>
            <h5>Today's Date: <TodayDate /></h5>
            <BirthdaysAnniversaries />
        </div>
    )
}
