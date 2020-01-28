import React, { Component } from 'react'

//Components 
import Hoteldetail from '../components/hotelDetail';

const axios = require('axios');

class FindHotel extends Component {

    constructor(props) {
        super();
        this.state = {
            hotel_city: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSubmitForSearching = this.handleSubmitForSearching.bind(this);
    }
    hotels = [];

    handleSubmit(e) {
        e.preventDefault();
        window.location.href = "/add-hotel";
    }
    handleChange(e) {
        e.preventDefault();
        let target = e.target;
        let value = target.value;
        console.log(value);

        this.setState({
            hotel_city: value,
            data: null
        });
    }

    handleSubmitForSearching(e) {
        e.preventDefault();

        const res_data = {
            "hotel_city": this.state.hotel_city
        }
        console.log("STATE SoN HALİ " + this.state.hotel_city);
        console.log("Hello");
        axios.post('http://localhost:3000/hotel/list', res_data)
            .then(res => {
                console.log(res);
                console.log(res.data);
                if (res.data) {
                    console.log("Veri başarılı");
                    this.setState({
                        data: res.data.data
                    })
                    console.log(" DATA STATE i");
                    console.log(this.state.data);
                }
                else {
                    console.log("Başarısız");
                }
            })
        console.log("Hey naber");
        //console.log(this.state.data[0]);
    }


    render() {
        const { hotels } = this.props;
        const { data } = this.state;
        console.log("Buraya Bak");
        if (data) {
            console.log(data[0]);
        }


        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Booking</a>
                    <form className="form-inline" onSubmit={this.handleSubmit}>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Add Hotel</button>
                    </form>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">

                    </div>
                    <form className="form-inline" onSubmit={this.handleSubmitForSearching}>
                        <input className="form-control mr-sm-2" type="text" placeholder="Search City" name="hotel_city" value={this.state.hotel_city} aria-label="Search" onChange={this.handleChange} />
                        <button className="btn btn-outline-success my-2 my-sm-0">Search</button>
                    </form>
                </nav>
                <br />
                <div className="hotel_area" style={{ margin: "50px" }}>
                    {data ?
                        data.map(hotel => {
                            return (
                                <Hoteldetail
                                    key={hotel._id}
                                    hotel_name={hotel.hotel_name}
                                    hotel_vote={hotel.hotel_vote}
                                />
                            )
                        })

                        : null

                    }



                </div>
            </div >

        )

    }
}

export default FindHotel;
