import React, {Component} from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'


class ContactForm extends Component{
    constructor(props){
        super(props)

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value

        axios({
            method: "POST",
            url: "http://localhost:3002/send",
            data: {
                name: name,
                email: email,
                message: message
            }
        }).then((response) => {
            if (response.data.msg === 'success'){
                alert("Message Sent Successfully!")
                this.resetForm()
            }else if (response.data.msg === 'fail'){
                alert("Message Failed to Send.")
            }
        })

    }

    resetForm() {
        document.getElementById('contact-form').reset()
    }

    render(){
        return (
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label for="message">Message</label>
                    <textarea className="form-control" rows="5" id="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        );
    }
  
}

export default ContactForm;


