import React from 'react';
import NavigationBar from 'src/components/molecules/NavigationBar';
import Main from 'src/components/organisms/TopPage/Main';
import Loading from 'src/components/atoms/loading/Loading';

class TopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }

  componentDidMount() {
    // Loading test
    setInterval(() => this.setState({ loading: !this.state.loading }), 3000);
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar title="アプリメニュー" />
        <Main onClickStartReissue={() => console.log('click')} />
        <Loading show={this.state.loading} />
      </React.Fragment>
    );
  }
}

export default TopPage;
