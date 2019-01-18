var React = require("react")
var DefaultLayout = require("./layouts/defaultlayout");
var NavBar_Container = require('./components/navbar_container')


class ActivityPage extends React.Component {
    render() {
        return (
            <DefaultLayout loggedIn={this.props.loggedin} user={this.props.user}>
                <NavBar_Container />
                    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img src="https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                          <img src="https://playnation.com.sg/wp-content/uploads/2017/12/Level-1-Board-Game-Area-2-Prinsep-e1500968783162.jpg" className="d-block w-100" alt="..." />
                        </div>
                      </div>
                      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                      </a>
                      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                      </a>
                    </div>
                <h6 className="card-text">{this.props.activities[0].category}</h6>
                <h3>{this.props.activities[0].title}</h3>
            </DefaultLayout>

            )
    }
}

module.exports = ActivityPage

                    // <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    //   <div className="carousel-inner">
                    //     <div className="carousel-item active">
                    //       <img src="..." className="d-block w-100" alt="..." />
                    //     </div>
                    //     <div className="carousel-item">
                    //       <img src="..." className="d-block w-100" alt="..." />
                    //     </div>
                    //     <div className="carousel-item">
                    //       <img src="..." className="d-block w-100" alt="..." />
                    //     </div>
                    //   </div>
                    //   <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    //     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    //     <span className="sr-only">Previous</span>
                    //   </a>
                    //   <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    //     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    //     <span className="sr-only">Next</span>
                    //   </a>
                    // </div>