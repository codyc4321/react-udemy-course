import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';


class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '753653361931-23egjuarvjbsg7pb6hin1nglvetph8g8.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'streaming'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        // this.setState({isSignedIn: this.auth.isSignedIn.get()});
        this.onAuthChange(this.auth.isSignedIn.get())
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    // this.setState({isSignedIn: this.auth.isSignedIn.get()});
    if (isSignedIn) {
      this.props.signIn();
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return (null)
    } else if (this.state.isSignedIn) {
        return (
          <button onClick={this.onSignOutClick} className="ui red google button">
            <i className="google icon" />
            Sign out
          </button>
        )
      } else {
        return (
          <button onClick={this.onSignInClick} className="ui red google button">
            <i className="google icon" />
            Sign in with Google
          </button>
        )
      }
  }

  render() {
    return (
      <div>{this.renderAuthButton()}</div>
    )
  }
}


const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
}


export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);
