import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import Loading from 'src/components/atoms/loading/Loading';
import NavigationBar from 'src/components/molecules/NavigationBar';
import Modal from 'src/components/molecules/Modal';
import Main from 'src/components/organisms/TopPage/Main';

// こいつの行き場はどこか。というかresponse.ok()そのまま使いたい。
const isSuccess = status => status && (status >= 200 || status < 300);

class TopPage extends React.Component {
  componentDidMount() {
    this.props.postUser();
  }

  navigateHome = () => this.props.history.push('home');

  render() {
    const {
      user: {
        loading, body, status, exception,
      },
      postUser,
    } = this.props;
    console.log(`userID: ${body.id}`);
    return (
      <React.Fragment>
        <NavigationBar title="アプリメニュー" />
        <Main onClickStartReissue={this.navigateHome} />
        <Loading show={loading} />
        {isSuccess(status) ? null : (
          <Modal title="通信エラー" onClick={postUser} buttonLabel="OK">
            通信に失敗しました。リトライします。
          </Modal>
        )}
        {exception ? (
          <Modal title="通信エラー" onClick={postUser} buttonLabel="OK">
            通信エラーが発生しました\n電波の良いところで再実行して下さい。
          </Modal>
        ) : null}
      </React.Fragment>
    );
  }
}

TopPage.propTypes = {
  user: PropTypes.shape({
    loading: PropTypes.bool.isRequired,
    body: PropTypes.shape({
      id: PropTypes.string,
      error: PropTypes.string,
    }),
    status: PropTypes.number,
    exception: PropTypes.object,
  }).isRequired,
  postUser: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

export default TopPage;
