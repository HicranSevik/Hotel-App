import React, { Component } from 'react';

const axios = require('axios');
class AddHotel extends Component {

    constructor(props) {
        super();
        this.state = {
            hotel_name: '',
            hotel_capacity: 0,
            hotel_phone: '',
            hotel_vote: 0,
            hotel_city: '',
            hotel_image: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();

        const res_data = {
            "hotel_name": this.state.hotel_name,
            "hotel_capacity": this.state.hotel_capacity,
            "hotel_phone": this.state.hotel_phone,
            "hotel_vote": this.state.hotel_vote,
            "hotel_city": this.state.hotel_city,
            "hotel_image": this.state.hotel_image
        }
        console.log(res_data);
        axios.post('http://localhost:3000/hotel', res_data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.data) {
                    alert("Ekleme işlemi başarılı");
                    console.log('eklendi');
                    window.location.href = "/find-hotel";
                }
                else {
                    alert("Tekrar Deneyin...");
                }
            })
    }


    render() {
        return (
            <div>
                <div>
                    <br /><br />
                    <form className="FormFields" onSubmit={this.handleSubmit}>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="hotel_name">Hotel Name</label>
                            <input type="text" id="hotel_name" className="FormField__Input" placeholder="Enter Hotel Name" name="hotel_name"
                                value={this.state.hotel_name} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="hotel_capacity">Capacity</label>
                            <input type="text" id="hotel_capacity" className="FormField__Input" placeholder="Enter hotel capacity" name="hotel_capacity"
                                value={this.state.hotel_capacity} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="city">Enter City</label>
                            <input type="text" id="hotel_city" className="FormField__Input" placeholder="Enter city" name="hotel_city"
                                value={this.state.hotel_city} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="hotel_phone">Enter number</label>
                            <input type="text" id="hotel_phone" className="FormField__Input" placeholder="Enter phone number" name="hotel_phone"
                                value={this.state.hotel_phone} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="hotel_vote">Vote</label>
                            <input type="text" id="hotel_vote" className="FormField__Input" placeholder="vote please" name="hotel_vote"
                                value={this.state.hotel_vote} onChange={this.handleChange} required />
                        </div>

                        <div className="FormField">
                            <label className="FormField__Label" htmlFor="vote">Add Image</label>
                            <input type="file" id="hotel_image" className="FormField__Input" name="hotel_image"
                                value={this.state.hotel_image} onChange={this.handleChange} required />
                        </div>


                        <div className="FormField">
                            <button className="FormField__Button mr-20" onClick={this.handleSubmit}>Kaydet</button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
export default AddHotel;
