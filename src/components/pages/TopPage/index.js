import React from 'react';
import NavigationBar from '../../molecules/NavigationBar';
import Main from '../../organisms/TopPage/Main';

function TopPage() {
  return (
    <React.Fragment>
      <NavigationBar title="アプリメニュー" />
      <Main />
    </React.Fragment>
  );
}

export default TopPage;
