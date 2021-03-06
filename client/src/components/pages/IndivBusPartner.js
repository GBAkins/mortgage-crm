import React, { Component } from "react";
import BusinessPartnersAPI from "../../utils/BusinessPartnersAPI";
import Container from "../layouts/Container";
import { IndivContact, IndivContactItem } from "../layouts/IndivContact";
import {Redirect} from "react-router-dom";

class IndivBusPartner extends Component {
  state = {
    businessPartner: {},
    redirect: false
  };

  componentDidMount() {
    this.loadBusinessPartner();
  }

  loadBusinessPartner = () => {
    BusinessPartnersAPI.getBusinessPartner(this.props.match.params.id)
      .then(res =>{
        this.setState({ businessPartner: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err.response));
  };

  handleDelete = e => {
    e.preventDefault();
    BusinessPartnersAPI.deleteBusinessPartner(this.props.match.params.id)
    .then(() => { 
      this.setState({redirect: true});
      console.log("deleted");
    })
    .catch((err)=>console.log(err));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/BusinessPartners" />
    }
    return (
      <Container>
          <IndivContact>
            <h5>{this.state.businessPartner.firstName} {this.state.businessPartner.lastName}</h5>
            <IndivContactItem>
              <h6>{this.state.businessPartner.relationshipType}</h6>
              <h6>{this.state.businessPartner.phoneNumber}</h6>
              <h6><a href={"mailto:"+this.state.businessPartner.emailAddress}>{this.state.businessPartner.emailAddress}</a></h6>
              <h6>{this.state.businessPartner.streetAddress}</h6>
              <h6>{this.state.businessPartner.city}, {this.state.businessPartner.state} {this.state.businessPartner.zipCode}</h6>
              <h6>{this.state.businessPartner.notes}</h6>
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

export default IndivBusPartner;
