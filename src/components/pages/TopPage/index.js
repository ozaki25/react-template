import React from 'react';
import NavigationBar from 'src/components/molecules/NavigationBar';
import Main from 'src/components/organisms/TopPage/Main';

const TopPage = () => (
  <React.Fragment>
    <NavigationBar title="アプリメニュー" />
    <Main onClickStartReissue={() => console.log('click')} />
  </React.Fragment>
);

export default TopPage;
