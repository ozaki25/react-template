import { connect } from 'react-redux';
import { addHello, removeHello } from 'src/modules/hello';
import { fetchApi } from 'src/modules/weather/';
import Home from 'src/components/pages/Home';

const mapStateToProps = ({ hello, weather }) => ({
  greetings: hello.greetings,
  weather,
});

const mapDispatchToProps = dispatch => ({
  greet: text => dispatch(addHello(text)),
  bye: index => dispatch(removeHello(index)),
  getWeather: () => dispatch(fetchApi()).then(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
