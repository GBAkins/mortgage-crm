import React, { Component } from "react";
import API from '../../utils/PastClients';

export class NewPastClient extends Component {
    state={
        pcFirstName: "",
        pcLastName: "",
        pcPhoneNumber: "",
        pcEmailAddress: "",
        pcHomeAddress: "",
        pcClosingDate: "",
        pcLoanType: "",
        pcLoanAmount: "",
        pcInterestRate: "",
        pcNotes: "",
        pastClients: []
      }
    
      handleChange = e =>{
          console.log(e.target.value)
          const name = e.target.name
          this.setState({
            [name]: e.target.value
          })
      }


      
      handleSubmit = e =>{
        e.preventDefault()
        console.log(this.state.noteTitle)
        console.log(this.state.noteContent)

    
        const newNote = {
            title: this.state.noteTitle,
            content: this.state.noteContent
          };
      
        //   API.saveNote(newNote).then(() =>
        //     API.getNote().then(res =>
        //       this.setState({
        //         notes: res.data
        //       })
        //     )
        //   );

        API.saveNote(newNote)
        .then(console.log("worked"))
        .catch((err)=>console.log(err))
        
      }
    
  render() {
    return (
      <div className="container">
        <div className="row">
          <form className="col s12" onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="input-field col s12">
                <input id="icon_prefix" type="text" className="validate" onChange={this.handleChange} name="noteTitle" />
                <label htmlFor="icon_prefix">Title</label>
              </div>
            </div>
              <div className="row">
                <div className="input-field col s12">
                  <textarea
                    onChange={this.handleChange} 
                    name="noteContent"
                    id="textarea1"
                    className="materialize-textarea"
                  ></textarea>
                  <label htmlFor="textarea1">Textarea</label>
                </div>
              </div>
            <button
              className="btn waves-effect waves-light"
              type="submit"
              name="action"
            >
              Submit
              <i className="material-icons right">send</i>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewPastClient;