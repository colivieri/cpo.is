import { injectGlobal } from 'styled-components';
import Footer from './Footer';
import Header from './Header';

import styled from 'styled-components';
import media from '../components/media';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Assistant:100,400,700|Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro');

  html {
    -webkit-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
  }
  
  body {
    font-family: 'Assistant', serif;
    font-size: 16px;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Assistant', sans-serif;
  }

  a {
    text-decoration: none;
    :hover {
      color: grey;
      -webkit-transition-property: border;
      -moz-transition-property: border;
      transition-property: border;
      -webkit-transition-duration: 1s;
      -moz-transition-duration: 1s;
      transition-duration: 1s;
      border-bottom: 1px solid;
    }
  }
`
export const black = '#222';
export const grey = '#7d7d7d';
export const red = '#24292E';
export const orange = '#F16125';
export const yellow = '#F8B03E;';

export const Container = styled.div`
  margin: 0 auto;
`
const Layout = (props) => (
  <Container>
    <Header/>
      {props.children}
    <Footer/>
  </Container>
)

export default Layout