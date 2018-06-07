import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from 'src/components/molecules/NavigationBar';
import Main from 'src/components/organisms/TopPage/Main';
import Loading from 'src/components/atoms/loading/Loading';

class TopPage extends React.Component {
  componentDidMount() {
    this.props.postUser();
  }

  render() {
    const {
      loading, body, status, exception,
    } = this.props.user;
    return (
      <React.Fragment>
        <NavigationBar title="アプリメニュー" />
        <Main onClickStartReissue={() => console.log('click')} />
        <Loading show={loading} />
        <p>{status >= 200 && status < 300 ? body.id : body.error}</p>
        <p>{exception.message}</p>
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
};

export default TopPage;
