import React, {Component} from "react"
// import 'bootstrap/dist/css/bootstrap.min.css'
// import axios from 'axios'


class ContactForm extends Component{
    constructor(props){
        super(props)

    }

    handleSubmit = (e) => {
        e.preventDefault()
        const name = document.getElementById('name').value
        const email = document.getElementById('email').value
        const message = document.getElementById('message').value

        
        // const data = new FormData(e.target);

        // fetch('/api/form-submit-url', {
        //     method: 'POST',
        //     body: data,
        //     });


    }

    resetForm() {
        document.getElementById('contact-form').reset()
    }

    render(){
        return (
            <form id="contact-form" onSubmit={this.handleSubmit} method="POST">
                <p>Want to reach out? I'm currently open to new opportunities! Feel free to send a message and I'll
                get back to you as soon as possible! </p>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" id="name" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea className="form-control" rows="5" id="message"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" style={{float: "right"}}>Submit</button>
            </form>
        );
    }
}

export default ContactForm;



