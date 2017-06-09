import { injectGlobal } from 'styled-components';
import Footer from './Footer';
import styled from 'styled-components';

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700,900|Source+Serif+Pro');

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