var React = require("react");

class NavBar_Container extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="topnavbar">
                <div className="container-fluid">

                    <button type="button" id="sidebarCollapse" className="btn btn-info">
                        <i className="fas fa-align-left"></i>
                        <span></span>
                    </button>
                    <button className="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-align-justify"></i>
                    </button>
                    {this.props.children}
                </div>
            </nav>

            )
    }
}

module.exports = NavBar_Container;