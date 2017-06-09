import Link from 'next/link'
import styled from 'styled-components';

const FooterContainer = styled.div`
  padding: 1rem 0 .65625rem;
  width: 100%;
  background-color: #f2f2f2;
  color: #666;
  height: 40vh;
  text-align: center;
  margin: 5px;

  align-items: center;
  justify-content: center;
  flex-direction: row;

  > img {
    width: 5%;
    text-align: center;
    margin: 20px;
    justify-content: center;
    display: inline;
  }

  > h3 {
    font-weight: 100;
    font-size: 1em;
    margin-bottom: 35px;
  }

  > a {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    color: #24292e;
    margin: 10px;
  }
`
const Footer = () => (
    <FooterContainer>
        <img src="./static/c-grey.jpg"/>
        <br/>
        <h3>Chase Olivieri</h3>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/adventures">
          <a>Adventures</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
    </FooterContainer>
)

export default Footer