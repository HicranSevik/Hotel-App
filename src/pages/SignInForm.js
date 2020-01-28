import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Components
import Sign from '../components/Sign';

const axios = require('axios');
class SignInForm extends Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        console.log('Form submit edildi  Data : ');
        console.log(this.state);

        //window.location.href = "/find-hotel";

        const res_data = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password
        }
        console.log(res_data);
        axios.post('http://localhost:3000/signin', this.state)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.data) {
                    window.location.href = "/find-hotel";
                }
                else {
                    alert("Tekrar Deneyin...");
                }
            })
    }

    render() {
        return (
            <div style={{ backgroundColor: "#2E4158", height: " 722px" }}>
                <Sign />
                <div className="FormCenter ">

                    <form className="FormFields" onSubmit={this.handleSubmit}>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"
                                value={this.state.email} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password"
                                name="password" value={this.state.password} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20" onClick="handleSubmit">Sign In</button>
                            <Link to="/" className="FormField__Link">Create An Account</Link>
                        </div>

                    </form>
                </div>
            </div >
        )
    }
}

export default SignInForm;