import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import styled from 'styled-components';

import SideNavBar from "./components/sidenavbar";

import Discover from "./pages/discover";

import './css/app.css'; 

export default class App extends React.Component {
  render () {
    return (
      <Router>
        <PageContainer>
          {/* <SideNavBar {...this.props} /> */}
          <ContentWrapper>
            <Routes>
              <Route path="/discover" element={<Discover/>} {...this.props}/>
              </Routes>
          </ContentWrapper>
        </PageContainer>
      </Router>
    );
  }
}


const ContentWrapper = styled.main`
  padding-left: 280px;
`

const PageContainer = styled.main`
  overflow-x: hidden;
`
