import React, { Component } from "react";
import BusinessPartnersAPI from '../../utils/BusinessPartnersAPI';
import M from 'materialize-css';
import {Redirect} from "react-router-dom";

export class NewBusinessPartner extends Component {
  state={
    bpFirstName: "",
    bpLastName: "",
    bpPhoneNumber: "",
    bpEmailAddress: "",
    bpStreetAddress: "",
    bpCity: "",
    bpState: "",
    bpZipCode: "",
    bpRelationshipType: "",
    bpNotes: "",
    businessPartners: [],
    redirect: false
  };

  componentDidMount(){
    M.AutoInit();
  };

  handleChange = e =>{
    console.log(e.target.value);
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  handleSubmit = e =>{
    e.preventDefault();
    console.log(this.state.bpFirstName);
    console.log(this.state.bpLastName);
    console.log(this.state.bpPhoneNumber);
    console.log(this.state.bpEmailAddress);
    console.log(this.state.bpStreetAddress);
    console.log(this.state.bpCity);
    console.log(this.state.bpState);
    console.log(this.state.bpZipCode);
    console.log(this.state.bpRelationshipType);
    console.log(this.state.bpNotes);

    const newBusinessPartner = {
      firstName: this.state.bpFirstName,
      lastName: this.state.bpLastName,
      phoneNumber: this.state.bpPhoneNumber,
      emailAddress: this.state.bpEmailAddress,
      streetAddress: this.state.bpStreetAddress,
      city: this.state.bpCity,
      state: this.state.bpState,
      zipCode: this.state.bpZipCode,
      relationshipType: this.state.bpRelationshipType,
      notes: this.state.bpNotes
    };

    BusinessPartnersAPI.saveBusinessPartner(newBusinessPartner)
    .then(() => {
      this.setState({redirect: true})
      console.log("saved BP")
    })
    .catch((err)=>console.log(err));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to="/businessPartners" />
    }
    return (
      
      <div className="row">
        <h4>Add a New Business Partner Contact</h4>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="John" id="first_name" type="text" className="validate" name="bpFirstName" onChange={this.handleChange} />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Doe" id="last_name" type="text" className="validate" name="bpLastName" onChange={this.handleChange} />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="(123)456-7890" id="phone_number" type="tel" className="validate" name="bpPhoneNumber" onChange={this.handleChange} />
              <label htmlFor="phone_number">Telephone</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="jdoe@gmail.com" id="email_address" type="email" className="validate" name="bpEmailAddress" onChange={this.handleChange}/>
              <label htmlFor="email_address">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="123 Industry Blvd, Suite 300" id="street_address" type="text" className="validate" name="bpStreetAddress" onChange={this.handleChange}/>
              <label htmlFor="street_address">Street Address</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <input placeholder="Chicago" id="city" type="text" className="validate" name="bpCity" onChange={this.handleChange}/>
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s3">
              <select placeholder="Illinois" id="state" className="validate" name="bpState" onChange={this.handleChange}>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DC">District of Columbia</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Indiana</option>
                <option value="IL">Illinois</option>
                <option value="IN">Iowa</option>
                <option value="IA">Kansas</option>
                <option value="KS">Kentucky</option>
                <option value="KY">Louisiana</option>
                <option value="LA">Maine</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michican</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montano</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nebraska</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>                
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <label>Select State</label>
            </div>
            <div className="input-field col s3">
              <input placeholder="60007" id="zip" type="text" className="validate" name="bpZipCode" onChange={this.handleChange}/>
              <label htmlFor="zip">ZIP</label>
            </div>
            <div className="input-field col s3">
              <select id="relationshipType" className="validate" name="bpRelationshipType" onChange={this.handleChange}>
                <option value="Realtor">Realtor</option>
                <option value="InsuranceAgent">Insurance Agent</option>
                <option value="Accountant">Accountant</option>
                <option value="Business Manager">Business Manager</option>
                <option value="Closing Attorney">Closing Attorney</option>
                <option value="Home Inspector">Home Inspector</option>
                <option value="Banker">Banker</option>
              </select>
              <label>Relationship</label>
            </div>
            <div className="input-field col s12">
              <input placeholder="(Optional)" id="notes" type="text" className="validate" name="bpNotes" onChange={this.handleChange} />
              <label htmlFor="notes">Notes</label>
            </div>
          </div>
          <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
            </button>
        </form>
      </div>

    );
  }
}

export default NewBusinessPartner;