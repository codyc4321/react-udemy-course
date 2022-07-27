import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';


// Functional style:

// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     (position) => console.log(position),
//     (err) => console.log(err)
//   )
//
//   return <div>hi</div>;
// };


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   // THIS IS THE ONLY TIME we do direct assignment to this.state (in the constructor)
  //   this.state = {lat: null, long: null, errorMessage: ''};
  // }
  state = {lat: null, errorMessage: ''}

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {this.setState({lat: position.coords.latitude})},
      (err) => {this.setState({errorMessage: err.message})}
    )
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message="Please accept location request"/>;
  }

  render() {
      return (
        <div className="fakename">
          {this.renderContent()}
        </div>
      )
  }
}


ReactDOM.render(<App/>, document.querySelector('#root'));
