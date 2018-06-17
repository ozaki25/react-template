import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Loading from 'src/components/atoms/loading/Loading';
import NavigationBar from 'src/components/molecules/NavigationBar';
import Dialog from 'src/components/molecules/SmalllDialog';
import Main from 'src/components/organisms/TopPage/Main';

class TopPage extends React.Component {
  componentDidMount() {
    this.props.postUser();
  }

  navigateHome = () => this.props.history.push('home');

  render() {
    const {
      user: {
        loading, body, success, exception,
      },
      postUser,
    } = this.props;
    console.log(`userID: ${body.id}`);
    return (
      <React.Fragment>
        <NavigationBar title="アプリメニュー" />
        <Main onClickStartReissue={this.navigateHome} />
        <Loading show={loading} />
        <Dialog title="通信エラー" onClick={postUser} buttonLabel="OK" show={!loading && !success}>
          通信に失敗しました。リトライします。
        </Dialog>
        <Dialog title="通信エラー" onClick={postUser} buttonLabel="OK" show={exception}>
          通信エラーが発生しました。電波の良いところで再実行して下さい。
        </Dialog>
      </React.Fragment>
    );
  }
}

TopPage.propTypes = {
  user: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    body: PropTypes.shape({
      id: PropTypes.string,
    }),
    success: PropTypes.bool,
    exception: PropTypes.object,
  }).isRequired,
  postUser: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default TopPage;
