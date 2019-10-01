import React, { Component } from "react";
import PastClientsAPI from '../../utils/PastClientsAPI';
import M from 'materialize-css';

export class NewPastClient extends Component {
  state={
    pcFirstName: "",
    pcLastName: "",
    pcPhoneNumber: "",
    pcEmailAddress: "",
    pcStreetAddress: "",
    pcCity: "",
    pcState: "",
    pcZipCode: "",
    pcClosingDate: "",
    pcLoanType: "",
    pcLoanAmount: "",
    pcInterestRate: "",
    pcNotes: "",
    pastClients: []
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
    console.log(this.state.pcFirstName);
    console.log(this.state.pcLastName);
    console.log(this.state.pcPhoneNumber);
    console.log(this.state.pcEmailAddress);
    console.log(this.state.pcStreetAddress);
    console.log(this.state.pcCity);
    console.log(this.state.pcState);
    console.log(this.state.pcZipCode);
    console.log(this.state.pcClosingDate);
    console.log(this.state.pcLoanType);
    console.log(this.state.pcLoanAmount);
    console.log(this.state.pcInterestRate);
    console.log(this.state.pcNotes);

    const newPastClient = {
      firstName: this.state.pcFirstName,
      lastName: this.state.pcLastName,
      phoneNumber: this.state.pcPhoneNumber,
      emailAddress: this.state.pcEmailAddress,
      streetAddress: this.state.pcStreetAddress,
      city: this.state.pcCity,
      state: this.state.pcState,
      zipCode: this.state.pcZipCode,
      closingDate: this.state.pcClosingDate,
      loanType: this.state.pcLoanType,
      loanAmount: this.state.pcLoanAmount,
      interestRate: this.state.pcInterestRate,
      notes: this.state.pcNotes
    };

    PastClientsAPI.savePastClient(newPastClient)
    .then(console.log("worked"))
    .catch((err)=>console.log(err));
  }

  render() {
    return (
      
      <div className="row">
        <h4>Add a New Past Client Contact</h4>
        <form className="col s12" onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="input-field col s6">
              <input placeholder="John" id="first_name" type="text" className="validate" name="pcFirstName" onChange={this.handleChange} />
              <label htmlFor="first_name">First Name</label>
            </div>
            <div className="input-field col s6">
              <input placeholder="Doe" id="last_name" type="text" className="validate" name="pcLastName" onChange={this.handleChange} />
              <label htmlFor="last_name">Last Name</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="(123)456-7890" id="phone_number" type="tel" className="validate" name="pcPhoneNumber" onChange={this.handleChange} />
              <label htmlFor="phone_number">Telephone</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="jdoe@gmail.com" id="email_address" type="email" className="validate" name="pcEmailAddress" onChange={this.handleChange}/>
              <label htmlFor="email_address">Email</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s12">
              <input placeholder="123 Industry Blvd, Suite 300" id="street_address" type="text" className="validate" name="pcStreetAddress" onChange={this.handleChange}/>
              <label htmlFor="street_address">Street Address</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4">
              <input placeholder="Chicago" id="city" type="text" className="validate" name="pcCity" onChange={this.handleChange}/>
              <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s4">
              <select placeholder="Illinois" id="state" className="validate" name="pcState" onChange={this.handleChange}>
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
            <div className="input-field col s4">
              <input placeholder="60007" id="zip" type="text" className="validate" name="pcZipCode" onChange={this.handleChange}/>
              <label htmlFor="zip">ZIP</label>
            </div>
          </div>
          <div className="row">
            <div className="input-field col s3">
              <input type="text" className="datepicker" id="closingDate" name="pcClosingDate" onChange={this.handleChange} />
              <label htmlFor="closingDate">Closing Date</label>
            </div>
            <div className="input-field col s3">
              <select placeholder="..." id="loanType" className="validate" name="pcLoanType" onChange={this.handleChange}>
                <option value="...">...</option>
                <option value="Purchase">Purchase</option>
                <option value="Refinance">Refinance</option>
              </select>
              <label>Loan Type</label>
            </div>
            <div className="input-field col s3">
              <input placeholder="100,000" id="loanAmount" type="text" className="validate" name="pcLoanAmount" onChange={this.handleChange} />
              <label htmlFor="loanAmount">Loan Amount</label>
            </div>
            <div className="input-field col s3">
              <input placeholder="4.500%" id="interestRate" type="text" className="validate" name="pcInterestRate" onChange={this.handleChange} />
              <label htmlFor="interestRate">Interest Rate</label>
            </div>
            <div className="input-field col s12">
              <input placeholder="(Optional)" id="notes" type="text" className="validate" name="pcNotes" onChange={this.handleChange} />
              <label htmlFor="notes">Notes</label>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit" name="action">
            Submit
          </button>
        </form>
      </div>

    );
  }
}

export default NewPastClient;