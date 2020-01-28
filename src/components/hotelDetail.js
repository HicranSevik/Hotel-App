import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import '../styles/hoteldetail.css';


class hotelDetail extends Component {

    static defaultProps = {
        hotel_name: "Bilgi girilmedi ",
        hotel_vote: "Bilgi girilmedi ",
    }
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };
    }
    getStars = (val) => {
        let stars = [];
        for (var i = 0; i < val; i++) {
            console.log("star num : " + val);
            console.log("İ: " + i);
            stars.push(<img src="https://img.icons8.com/emoji/48/000000/star-emoji.png"></img>);
        }
        return stars;
    }


    render() {
        const { hotel_name, hotel_vote } = this.props;
        const { isVisible } = this.state;
        return (
            <Route>
                <div>
                    <div className="card">
                        <img className="card-img-top" src={"https://q-cf.bstatic.com/images/hotel/max1024x768/797/79726354.jpg"} alt="deneme" />
                        <div className="card-body">
                            <h5 className="card-title">{hotel_name}</h5>
                            {
                                //<p className="card-text">{hotel_vote}</p>
                            }
                            <div className="card-text">{this.getStars(hotel_vote)}</div>
                            <br />
                            <Link to="Book" className="btn btn-primary">Rezervasyon Yap</Link>
                        </div>
                    </div>
                </div>
            </Route>
        )
    }
}


export default hotelDetail;
