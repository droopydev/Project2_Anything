var React = require("react");
var DefaultLayout = require("./layouts/defaultlayout");
var NavBar_Container = require('./components/navbar_container')
var NavBar_Options = require('./components/navbar_options')


class ActivityCard extends React.Component {
    render() {
        return (
            <div className="card m-3 p-0" id="activitiesCard">
                <img className="card-img-top" src={this.props.activities.imageurl} alt="Card image cap" />
                <div className="card-body">
                  <h6 className="card-text">{this.props.activities.category}</h6>
                  <h5 className="card-title">{this.props.activities.title}</h5>
                  <p className="card-text">${this.props.activities.price} per person</p>
                </div>
            </div>
            )
    }
}

class ActivitiesPage extends React.Component {
    render() {
        const allActivity = this.props.activities.map( activity => {
            return <ActivityCard activities={activity}></ActivityCard>;
        });
        return (
            <DefaultLayout loggedIn={this.props.loggedin} user={this.props.user}>
                <NavBar_Container>
                    <NavBar_Options />
                </NavBar_Container>
                <h3> Activities </h3>
                    <div className="content-wrapper">
                        {allActivity}
                    </div>
            </DefaultLayout>

            )
    }
};

module.exports = ActivitiesPage;