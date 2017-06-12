import { injectGlobal } from 'styled-components';
import Footer from './footer';
import styled from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Avenir+Next:600|Source+Sans+Pro:400,700,900|Source+Serif+Pro');
  
  html {
    -webkit-font-smoothing: antialiased;
    -ms-font-smoothing: antialiased;
  }
  
  body {
    font-family: 'Source Serif Pro', serif;
    font-size: 16px;
  }
  
  h1, h2, h3, h4 {
    font-family: 'Source Sans Pro', sans-serif;
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

export const Container = styled.div`
  margin: 0 auto;
`
const Layout = (props) => (
  <Container>
    {props.children}
    <Footer/>
  </Container>
)

export default Layout