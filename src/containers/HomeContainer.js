import { connect } from 'react-redux';
import { addHello, removeHello } from '../actions/hello';
import Home from '../components/pages/Home';

const mapStateToProps = ({ hello }) => ({
  greetings: hello.greetings,
});

const mapDispatchToProps = dispatch => ({
  greet: text => dispatch(addHello(text)),
  bye: index => dispatch(removeHello(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
