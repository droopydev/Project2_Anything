var React = require("react");
var DefaultLayout = require('./layouts/defaultlayout');
var NavBar_Container = require('./components/navbar_container')
var Sidebar_LoggedIn = require('./components/sidebar_loggedin')
var Sidebar_NotLoggedIn = require('./components/sidebar_notloggedin')
var PopUp_LogIn = require("./components/popup_login")


class HomePage extends React.Component {
    render() {
        let isLoggedin = this.props.loggedin
        let sideBarState;
        if (isLoggedin) {
            sideBarState = <Sidebar_LoggedIn username={this.props.user.name} />
        } else {
            sideBarState =  <Sidebar_NotLoggedIn />
        }
      return (
        <html>
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

                <title>Collapsible sidebar using Bootstrap 4</title>

                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" crossOrigin="anonymous" />
                <link rel="stylesheet" href="/style.css" />
                <link rel="stylesheet" href="/animation.css" />
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.min.css" />

                <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/solid.js" integrity="sha384-tzzSw1/Vo+0N5UhStP3bvwWPq+uvzCMfrN1fEFe+xBmv1C/AtVX5K0uZtmcHitFZ" crossOrigin="anonymous"></script>
                <script defer src="https://use.fontawesome.com/releases/v5.0.13/js/fontawesome.js" integrity="sha384-6OIrr52G08NpOFSZdxxz1xdNSndlD4vdcf/q2myIUVO0VsqaGHJsB0RaBE01VTOY" crossOrigin="anonymous"></script>
            </head>

            <body>
                {sideBarState}
                    <div id="content" className="homePage-color active">
                        <PopUp_LogIn />

                        <div className="homePage-slider">
                            <button type="button" id="sidebarCollapse" className="btn btn-info">
                                <i className="fas fa-align-left"></i>
                            </button>
                        </div>

                        <div class="wrapper">
                          <h1><a href="/activities/">Anything...</a></h1>
                          <div class="homeDescrip">
                                <p>"So where should we go?"</p>
                          </div>
                        </div>
                    </div>

                <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js" integrity="sha384-cs/chFZiN24E4KMATLdqdvsezGxaGsi4hLGOzlXwp5UZB1LY//20VyM2taTB4QvJ" crossOrigin="anonymous"></script>
                <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/js/bootstrap.min.js" integrity="sha384-uefMccjFJAIv6A+rW+L4AHf99KvxDjWSu1z9VI8SKNVmz4sk7buKt/6v9KI65qnm" crossOrigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/malihu-custom-scrollbar-plugin/3.1.5/jquery.mCustomScrollbar.concat.min.js"></script>

                <script src="/script.js"></script>
            </body>

            </html>
        )
    }
}
module.exports = HomePage