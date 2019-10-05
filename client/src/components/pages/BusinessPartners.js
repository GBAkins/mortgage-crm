import React, { Component } from "react";
import BusinessPartnersAPI from "../../utils/BusinessPartnersAPI";
import Container from "../layouts/Container";
import { List, ListItem } from "../layouts/List";
import {Redirect} from "react-router-dom";

class BusinessPartners extends Component {
  state = {
    businessPartners: [],
    redirect: false
  };

  componentDidMount() {
    this.loadBusinessPartners();
  }

  loadBusinessPartners = () => {
    BusinessPartnersAPI.getBusinessPartners()
      .then(res => {
          this.setState({ businessPartners: res.data });
          console.log(this.state.businessPartners)
      })
      .catch(err => console.log(err));
  };

  handleOnClick() {
    this.setState({redirect: true});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/NewBusinessPartner" />
    }
    return (
      <Container>
        <h5>Business Partners</h5>
        {this.state.businessPartners.length ? (
          <List>
              {this.state.businessPartners.map(businessPartner => (
                  <ListItem key={businessPartner._id}>
                      <a href={"/businessPartners/" + businessPartner._id}>
                          <strong>
                              {businessPartner.firstName} {businessPartner.lastName}
                          </strong>
                      </a>
                  </ListItem>
              ))}
          </List>
        ) : (
            <h3>No Business Partners to Display</h3>
        )}
        <a className="waves-effect waves-light btn" href="/NewBusinessPartner" onClick={this.handleOnClick} >Add New Business Partner</a>
      </Container>
    );
  }
}

export default BusinessPartners;
