import { injectGlobal } from 'styled-components';
import Footer from './Footer'

/* eslint-disable */
injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:700|Source+Serif+Pro');

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
const Layout = (props) => (
  <div>
    {props.children}
    <Footer/>
  </div>
)

export default Layout