import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import NewBusinessPartner from './components/layouts/NewBusinessPartner';
import NewPastClient from './components/layouts/NewPastClient';
import Container from './components/layouts/Container';
import PastClients from './utils/PastClients';
import BusinessPartners from './utils/BusinessPartners';
import 'materialize-css/dist/css/materialize.min.css';


export class App extends Component {

  state = {
    pastClients: [],
    businessPartners: []
  }

  componentDidMount() {
    PastClients.getPastClients()
    .then(res => this.setState({ pastClients: res.data, loading: false }))
    .catch(err => console.log(err.data));
    BusinessPartners.getBusinessPartners()
    .then(res => this.setState({ businessPartners: res.data, loading: false }))
    .catch(err => console.log(err.data));
  }

  render() {
    
    return (
      <div>
          <Navbar />
          <Container>
            <NewBusinessPartner />
            <NewPastClient />
          </Container>
      </div>
    )
  }
}

export default App