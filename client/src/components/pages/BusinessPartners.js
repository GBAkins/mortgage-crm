import React, { Component } from "react";
import BusinessPartnersAPI from "../../utils/BusinessPartnersAPI";
import Container from "../layouts/Container";
import { List, ListItem } from "../layouts/List";

class BusinessPartners extends Component {
  state = {
    businessPartners: []
  };

  componentDidMount() {
    this.loadBusinessPartners();
  }

  loadBusinessPartners = () => {
      console.log("made it");
    BusinessPartnersAPI.getBusinessPartners()
      .then(res => {
          this.setState({ businessPartners: res.data });
          console.log(this.state.businessPartners)
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <h5>Business Partners</h5>
        {this.state.businessPartners.length ? (
          <List>
              {this.state.businessPartners.map(businessPartner => (
                  <ListItem key={businessPartner._id}>
                      <a href={"/businessPartners/" + businessPartner._id}>
                          <strong>
                              {businessPartner.firstName}{businessPartner.lastName}
                          </strong>
                      </a>
                  </ListItem>
              ))}
          </List>
        ) : (
            <h3>No Business Partners to Display</h3>
        )}
      </Container>
    );
  }
}

export default BusinessPartners;
