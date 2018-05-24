import React from 'react';
import NavigationBar from 'src/components/molecules/NavigationBar';
import Main from 'src/components/organisms/TopPage/Main';

function TopPage() {
  return (
    <React.Fragment>
      <NavigationBar title="アプリメニュー" />
      <Main />
    </React.Fragment>
  );
}

export default TopPage;
