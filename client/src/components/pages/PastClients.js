import React, { Component } from "react";
import PastClientsAPI from "../../utils/PastClientsAPI";
import Container from "../layouts/Container";
import { List, ListItem } from "../layouts/List";
import {Redirect} from "react-router-dom";

class PastClients extends Component {
  state = {
    pastClients: [],
    redirect: false
  };

  componentDidMount() {
    this.loadPastClients();
  }

  loadPastClients = () => {
    PastClientsAPI.getPastClients()
      .then(res =>{
        this.setState({ pastClients: res.data });
        console.log(this.state.pastClients);
      })
      .catch(err => console.log(err));
  };

  handleOnClick() {
    this.setState({redirect: true});
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/NewPastClient" />
    }
    return (
      <Container>
        <h5>Past Clients</h5>
        {this.state.pastClients.length ? (
          <List>
              {this.state.pastClients.map(pastClient => (
                  <ListItem key={pastClient._id}>
                      <a href={"/pastClients/" + pastClient._id}>
                          <strong>
                              {pastClient.firstName} {pastClient.lastName}
                          </strong>
                      </a>
                  </ListItem>
              ))}
          </List>
        ) : (
            <h3>No Past Clients to Display</h3>
        )}
        <a className="waves-effect waves-light btn" href="/NewPastClient" onClick={this.handleOnClick} >Add New Past Client</a>
      </Container>
    );
  }
}

export default PastClients;
