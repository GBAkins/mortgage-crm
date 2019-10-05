import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/layouts/Navbar';
import Dashboard from "./components/pages/Dashboard";
import BusinessPartners from "./components/pages/BusinessPartners";
import PastClients from "./components/pages/PastClients";
import NewBusinessPartner from "./components/pages/NewBusinessPartner";
import NewPastClient from "./components/pages/NewPastClient";
import IndivPastClient from "./components/pages/IndivPastClient";
import IndivBusPartner from "./components/pages/IndivBusPartner";
import Container from './components/layouts/Container';
import PastClientsAPI from './utils/PastClientsAPI';
import BusinessPartnersAPI from './utils/BusinessPartnersAPI';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css';


export class App extends Component {

  state = {
    pastClients: [],
    businessPartners: []
  }

  componentDidMount() {
    M.AutoInit();
    PastClientsAPI.getPastClients()
    .then(res => this.setState({ pastClients: res.data, loading: false }))
    .catch(err => console.log(err.data));
    BusinessPartnersAPI.getBusinessPartners()
    .then(res => this.setState({ businessPartners: res.data, loading: false }))
    .catch(err => console.log(err.data));
  }

  render() {
    
    return (
      <Router>
        <div>
          <Navbar />
          <Container>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pastClients" component={PastClients} />
            <Route exact path="/pastClients/:id" component={IndivPastClient} />
            <Route exact path="/businessPartners" component={BusinessPartners} />
            <Route exact path="/businessPartners/:id" component={IndivBusPartner} />
            <Route exact path="/NewBusinessPartner" component={NewBusinessPartner} />
            <Route exact path="/NewPastClient" component={NewPastClient} />
          </Container>
        </div>
      </Router>
    )
  }
}

export default App