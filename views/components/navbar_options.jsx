var React = require("react");

class NavBar_Options extends React.Component {
    render() {
        return (
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Date</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Price</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Time of Day</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Categories</a>
                    </li>
                </ul>
            </div>
            )
    }
}

module.exports = NavBar_Options