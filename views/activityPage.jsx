var React = require("react")
var DefaultLayout = require("./layouts/defaultlayout");
var NavBar_Container = require('./components/navbar_container')
var NavBar_Options = require('./components/navbar_options')

import { FaMapMarkerAlt } from "react-icons/fa"
import { FaLink } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import { MdTimelapse } from "react-icons/md";


class AddressDropdown extends React.Component {
    render() {
        return (
            <div class="dropdown">
              <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Playnation | Tampines Outlet
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
            )
    }
}



class ActivityPage extends React.Component {
    render() {
        return (
            <DefaultLayout loggedIn={this.props.loggedin} user={this.props.user}>
                <NavBar_Container>
                    <NavBar_Options />
                </NavBar_Container>

                <div id="magicCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg" className="carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg" className="carouselImage" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img src="https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg" className="carouselImage" alt="..." />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#magicCarousel" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#magicCarousel" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

                <div id="details">
                    <h6 className="card-text">{this.props.activities[0].category}</h6>
                    <h3>Boardgames @ <AddressDropdown className="AddressDropdown" /></h3>
                    <p><FaMapMarkerAlt className="react-icons"/>6 Raffles Boulevard #03-208, Singapore 039594 </p>
                    <a href=""><FaLink className="react-icons"/>playnation.com.sg</a>
                    <p><IoIosPricetags className="react-icons"/>${this.props.activities[0].price}</p>
                    <p><MdTimelapse className="react-icons" />Opening hours</p>
                </div>

            </DefaultLayout>

            )
    }
}

module.exports = ActivityPage

            // <div className="card m-3 p-0" id="activitiesCard">
            //     <img className="card-img-top" src={this.props.activities.imageurl} alt="Card image cap" />
            //     <div className="card-body">
            //       <h6 className="card-text">{this.props.activities.category}</h6>
            //       <h5 className="card-title">{this.props.activities.title}</h5>
            //       <p className="card-text">${this.props.activities.price} per person</p>
            //     </div>
            // </div>