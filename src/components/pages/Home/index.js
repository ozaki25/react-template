import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './index.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  sayHello = () => {
    const input = this.input.current.value;
    this.input.current.value = '';
    this.props.greet(input);
  };

  removeHello = (e) => {
    this.props.bye(Number(e.target.dataset.index));
  };

  render() {
    const { greetings, getWeather, weather } = this.props;
    const { loading, body, error } = weather;
    const { description } = body;
    return (
      <div className="Home">
        <header className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h1 className="Home-title">Welcome to React</h1>
        </header>
        <p className="Home-intro">
          To get started, edit <code>src/Home.js</code> and save to reload.
        </p>
        <Link to="/hello">Hello!</Link>
        {/* redux検証用 */}
        <div>
          <input ref={this.input} />
          <button type="button" onClick={this.sayHello}>
            Hello
          </button>
          {greetings.map((greet, i) => (
            // eslint-disable-next-line  react/no-array-index-key
            <p key={i}>
              Hello {greet}
              <a href="#" data-index={i} onClick={this.removeHello}>
                &times;
              </a>
            </p>
          ))}
        </div>
        <div>
          <button type="button" onClick={getWeather}>
            天気
          </button>
          <h1>{loading ? 'Loading...' : ''}</h1>
          <h2>{body.title}</h2>
          <pre>{description ? description.text : ''}</pre>
          <p>{error ? error.message : ''}</p>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  greetings: PropTypes.arrayOf(PropTypes.string).isRequired,
  greet: PropTypes.func.isRequired,
  bye: PropTypes.func.isRequired,
  weather: PropTypes.shape({
    loading: PropTypes.bool,
    body: PropTypes.object,
    error: PropTypes.object,
  }).isRequired,
  getWeather: PropTypes.func.isRequired,
};

export default Home;
