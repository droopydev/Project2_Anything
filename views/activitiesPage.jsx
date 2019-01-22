var React = require("react");
var DefaultLayout = require("./layouts/defaultlayout");
var NavBar_Container = require('./components/navbar_container')
var NavBar_Options = require('./components/navbar_options')


class ActivityCard extends React.Component {
    render() {
        let link = '/activities/'+this.props.activity.id
        return (
            <a href={link}>
            <div className="card m-3 p-0 activitiesCard">
                <img className="card-img-top" src={this.props.activity.activitypicture1} alt="Card image cap" />
                <div className="card-body">
                  <h6 className="card-text">{this.props.activity.category}</h6>
                  <h5 className="card-title">{this.props.activity.title} @ {this.props.activity.franchaise}</h5>
                  <p className="card-text">${this.props.activity.price} per person</p>
                </div>
            </div>
            </a>
        )
    }
}

class ActivitiesPage extends React.Component {
    render() {
        const allActivity = this.props.activity.map( activity => {
            return <ActivityCard activity={activity}></ActivityCard>;
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