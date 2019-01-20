var React = require("react");

class PopUp_LogIn extends React.Component {
    render() {
        return (
            <div className="modal fade" id="modalLoginForm" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header text-center">
                    <h4 className="modal-title w-100 font-weight-bold">Login</h4>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <form method="POST" action="/users/login">
                      <div className="modal-body mx-3">

                            <div className="md-form mb-5">
                              <i className="fas fa-envelope prefix grey-text"></i>
                              <input type="name" name="name" id="defaultForm-email" className="form-control validate" />
                              <label data-error="wrong" data-success="right" thisisfor="defaultForm-email">Your name</label>
                            </div>

                            <div className="md-form mb-4">
                              <i className="fas fa-lock prefix grey-text"></i>
                              <input type="password" name="password" id="defaultForm-pass" className="form-control validate" />
                              <label data-error="wrong" data-success="right" thisisfor="defaultForm-pass">Your password</label>
                            </div>

                      </div>
                      <div className="modal-footer d-flex justify-content-center">
                        <button type="submit" className="btn btn-default">Sign In</button>
                      </div>
                  </form>
                </div>
              </div>
            </div>

            )
    }
}

module.exports = PopUp_LogIn