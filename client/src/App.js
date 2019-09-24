import React, { Component } from 'react';
import Navbar from './components/layouts/Navbar';
import PastClients from './utils/PastClients';
import BusinessPartners from './utils/BusinessPartners';


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
      </div>
    )
  }
}

export default App