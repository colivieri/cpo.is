import Link from 'next/link'
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 1rem 0 .65625rem;
  background-color: #f2f2f2;
  color: #666;
  height: 30vh;
  text-align: center;
  margin: 5px;
  display: flex; 

  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  > h3 {
    font-weight: 100;
    font-size: 1em;
    margin-bottom: 35px;
  }

  > a {
    display: flex;
    flex: 0 0 100%;
    justify-content: center;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 900;
    color: #24292e;
    margin: 10px;
  }
`

const ChaseIcon = styled.img`
  width: 5%;
  margin: 20px;
  display: inline;
`
const Social = styled.img`
  width: 30px;
  margin: 20px;
  background-color: #e3e3e3;
  padding: 12px;
  
  &:hover {
    background-color: white;
  }
`

const Footer = () => (
    <FooterContainer>
        <ChaseIcon src="./static/c-grey.jpg"/>
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
        <Social src="./static/instagram.png" />
        <Social src="./static/twitter.png" />
        <Social src="./static/angellist.png"/>
    </FooterContainer>
)

export default Footer