import React, { Component } from "react";
import { List, ListItem } from "../layouts/List";
import PastClientsAPI from "../../utils/PastClientsAPI";

export class BirthdaysAnniversaries extends Component {

    state = {
        pastClients: [],
        todaysBirthdats: [],
        todaysAnniversaries: []
    };

    componentDidMount() {
        this.loadPastClients();
    };
    
    loadPastClients = () => {
        PastClientsAPI.getPastClients()
        .then(res =>{
        this.setState({ pastClients: res.data });
        console.log(this.state.pastClients);
        })
        .catch(err => console.log(err.response));
    };

    comparedBirthdates = (pastClient) => {
        var birthday = new Date(pastClient.birthday);
        birthday = birthday.getMonth() + "-" + birthday.getDate();
        console.log(birthday);
        var today = new Date();
        today = today.getMonth() + "-" + today.getDate();
        console.log(today);
        return birthday === today;
    };

    comparedCloseDates = (pastClient) => {
        var closeDate = new Date(pastClient.closingDate);
        closeDate = closeDate.getMonth() + "-" + closeDate.getDate();
        console.log(closeDate);
        var today = new Date();
        today = today.getMonth() + "-" + today.getDate();
        console.log(today);
        return closeDate === today;
    };

    render() {

        return (
            <div>
                <List>
                    <strong>Upcoming Past Client Birthdays</strong>
                    {this.state.pastClients.filter(this.comparedBirthdates).map(pastClient => (
                        <ListItem key={pastClient._id}>
                            <a href={"mailto:"+pastClient.emailAddress+"?subject=Happy Birthday!&body=Hey "+pastClient.firstName+", just wanted to wish you a Happy Birthday. I hope you got to spend it with loved ones. If you need anything, feel free to reach out."}><i className="material-icons">mail</i></a>
                            <a href={"/pastClients/" + pastClient._id}>
                                <strong>
                                    {pastClient.firstName} {pastClient.lastName} 
                                </strong>
                            </a>
                        </ListItem>
                    ))}
                </List>
                <List>
                    <strong>Upcoming Past Client Loan Anniversaries</strong>
                    {this.state.pastClients.filter(this.comparedCloseDates).map(pastClient => (
                        <ListItem key={pastClient._id}>
                            <a href={"mailto:"+pastClient.emailAddress+"?subject=It's your loan anniversary!&body=Hey "+pastClient.firstName+", just wanted to reach out and let you know that today is the anniversary of our closing on your home loan. With interest rates getting lower, it might be a good time to look at a refinance. Or maybe you're interested in purchasing a new home or rental property. Whatever you may need, I'd love the chance to work with you again. Feel free to reach out if you need anything."}><i className="material-icons">mail</i></a>
                            <a href={"/pastClients/" + pastClient._id}>
                                <strong>
                                    {pastClient.firstName} {pastClient.lastName}
                                </strong>
                            </a>
                        </ListItem>
                    ))}
                </List>
            </div>
        )
    }
}

export default BirthdaysAnniversaries;