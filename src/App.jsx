import React from 'react';
import MainContainer from './containers/MainContainer';
import NoticeContainer from './containers/NoticeContainer';
import NavBarContainer from './containers/NavBarContainer';

export default function App() {
  return (
    <>
      <NavBarContainer />
      <MainContainer />
      <NoticeContainer />
    </>
  );
}
