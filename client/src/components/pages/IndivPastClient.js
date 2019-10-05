import React, { Component } from "react";
import PastClientsAPI from "../../utils/PastClientsAPI";
import Container from "../layouts/Container";
import { IndivContact, IndivContactItem } from "../layouts/IndivContact";
import {Redirect} from "react-router-dom";

class IndivPastClient extends Component {
  state = {
    pastClient: {},
    redirect: false
  };

  componentDidMount() {
    this.loadPastClient();
  }

  loadPastClient = () => {
    PastClientsAPI.getPastClient(this.props.match.params.id)
      .then(res =>{
        this.setState({ pastClient: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  };

  handleDelete = e => {
    e.preventDefault();
    PastClientsAPI.deletePastClient(this.props.match.params.id)
    .then(() => { 
      this.setState({redirect: true})
      console.log("deleted")
    })
    .catch((err)=>console.log(err));
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/PastClients" />
    }
    return (
      <Container>
        <IndivContact>
          <h5>{this.state.pastClient.firstName} {this.state.pastClient.lastName}</h5>
          <IndivContactItem>
            <h6>{this.state.pastClient.phoneNumber}</h6>
            <a href={"mailto:"+this.state.pastClient.emailAddress+"?subject=Happy Birthday!&body=Hey "+this.state.pastClient.firstName+", just wanted to wish you a Happy Birthday. I hope you got to spend it with loved ones. If you need anything, feel free to reach out."}><h6>{this.state.pastClient.emailAddress}</h6></a>
            <h6>{this.state.pastClient.streetAddress}</h6>
            <h6>{this.state.pastClient.city}, {this.state.pastClient.state} {this.state.pastClient.zipCode}</h6>
            <h6>DOB: {this.state.pastClient.birthday}</h6>
            <h6>Closing Date: {this.state.pastClient.closingDate}</h6>
            <h6>Loan Type: {this.state.pastClient.loanType}</h6>
            <h6>Loan Amount: {this.state.pastClient.loanAmount}</h6>
            <h6>Interest Rate: {this.state.pastClient.interestRate}</h6>
            <h6>Notes: {this.state.pastClient.notes}</h6>
            <br></br>
            <button className="btn waves-effect waves-light" type="submit" name="action" onClick={this.handleDelete}>Delete Contact
              <i className="material-icons right">delete</i>
            </button>
          </IndivContactItem>
        </IndivContact>
      </Container>
    );
  }
}

export default IndivPastClient;
