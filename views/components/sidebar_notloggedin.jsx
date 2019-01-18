var React = require("react");

class SideBar_NotLoggedIn extends React.Component {
    render() {
        return (
                <div className="wrapper">
                    <nav id="sidebar">
                        <a href="/">
                        <div className="sidebar-header">
                            <h3>Anything!</h3>
                        </div>
                        </a>

                        <ul className="list-unstyled components">
                            <p>Hello There!</p>
                            <li>
                                <a href="/activities/">Activities</a>
                            </li>
                            <li>
                                <a href="#">Plan For Me</a>
                            </li>
                        </ul>

                        <ul className="list-unstyled CTAs">
                            <li>
                                <a href="" className="download" data-toggle="modal" data-target="#modalLoginForm">Log In</a>
                            </li>
                            <li>
                                <a href="/users/register" className="article">Sign Up</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                )
    }
};

module.exports = SideBar_NotLoggedIn