var React = require("react");

class SideBar_LoggedIn extends React.Component {
    render() {
        return (
                <div className="wrapper">
                    <nav id="sidebar">
                        <a href="/">
                        <div className="sidebar-header" id="header">
                            <h3>Anything!</h3>
                        </div>
                        </a>

                        <ul className="list-unstyled components">
                            <p>Hello {this.props.username}!</p>
                            <li>
                                <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">Profile</a>
                                <ul className="collapse list-unstyled" id="homeSubmenu">
                                    <li>
                                        <a href="#">Profile Page</a>
                                    </li>
                                    <li>
                                        <a href="#">Favourites</a>
                                    </li>
                                    <li>
                                        <a href="#">Create an Activity</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="/activities/">Activities</a>
                            </li>
                            <li>
                                <a href="#">Plan For Me</a>
                            </li>

                        </ul>

                        <ul className="list-unstyled CTAs">
                            <li>
                                <a href="/users/logout" className="download">Log Out</a>
                            </li>
                            <li>
                                <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Edit Account</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                )
    }
};

module.exports = SideBar_LoggedIn