import React from 'react';
import PropTypes from 'prop-types';
import NavigationBar from 'src/components/molecules/NavigationBar';
import Main from 'src/components/organisms/TopPage/Main';
import Loading from 'src/components/atoms/loading/Loading';

class TopPage extends React.Component {
  componentDidMount() {
    this.props.createUserId();
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar title="アプリメニュー" />
        <Main onClickStartReissue={() => console.log('click')} />
        <Loading show={this.props.loading} />
        <p>{this.props.userId}</p>
      </React.Fragment>
    );
  }
}

TopPage.propTypes = {
  loading: PropTypes.bool.isRequired,
  userId: PropTypes.string.isRequired,
  createUserId: PropTypes.func.isRequired,
};

export default TopPage;
