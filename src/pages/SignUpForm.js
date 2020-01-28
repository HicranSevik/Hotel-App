import React, { Component } from 'react'
import { Link } from 'react-router-dom';


//Components
import Sign from '../components/Sign';
const axios = require('axios');
class SignUpForm extends Component {

    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
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
        const res_data = {
            "name": this.state.name,
            "email": this.state.email,
            "password": this.state.password
        }
        console.log(res_data);
        axios.post('http://localhost:3000/signup', res_data)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {
        return (
            <div style={{ backgroundColor: "#2E4158", height: " 722px" }}>
                <Sign />

                <div className="FormCenter" >
                    <form className="FormFields" onSubmit={this.handleSubmit}>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="name">Full Name</label>
                            <input type="text" id="name" className="FormField__Input" placeholder="Enter your full name" name="name"
                                value={this.state.name} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="password">Password</label>
                            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password"
                                value={this.state.password} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="email">Email Address</label>
                            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email"
                                value={this.state.email} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__CheckboxLabel">
                                <input className="FormField__Checkbox" type="checkbox" name="hasAgreed"
                                    value={this.state.hasAgreed} onChange={this.handleChange} required /> I agree all statements in
                                <Link to="" className="FormField__TermsLink">terms of service</Link>
                            </label>
                        </div>

                        <div className="FormField">
                            <button className="FormField__Button mr-20">Sign Up</button>
                            <Link to="/sign-in" className="FormField__Link">I am already member</Link>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpForm;