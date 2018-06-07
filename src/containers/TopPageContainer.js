import { connect } from 'react-redux';
import { postUser } from 'src/modules/user';
import TopPage from 'src/components/pages/TopPage';

const mapStateToProps = ({ user }) => ({
  user,
});

const mapDispatchToProps = dispatch => ({
  postUser: () => dispatch(postUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TopPage);
