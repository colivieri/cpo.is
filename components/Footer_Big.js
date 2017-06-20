import Link from 'next/link'
import styled from 'styled-components';
import media from '../components/media';

const FooterContainer = styled.footer`
  padding: 1rem 0 .65625rem;
  background-color: #f2f2f2;
  color: #666;
  height: 100%;
  text-align: center;
  margin: 5px;
  display: flex; 
  flex-direction: row;

  flex-wrap: wrap;

  > div {
    display: flex; 
    flex-basis: calc(100%);  
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

const ChaseIcon = styled.img`
  width: 55px;
  margin: 20px 0;
`
const SocialLink = styled.a `
  display: block;
`

const Social = styled.img`
  width: 30px;
  margin: 20px;
  background-color: #e3e3e3;
  padding: 12px;
  
  &:hover {
    background-color: white;
  }

  ${media.phone`
    width: 20px;
  `}
`

const FooterNav = styled.section`
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
  cursor: hand;

  > h3 {
    padding: 0 20px;
    font-size: 1em;
    ${media.phone`
      font-size: .8em;
      padding: 0 10px;
    }`
  }
  > h3:hover {
    color: black;
    transition: color .3s;
  }

`
const FooterSocial = styled.section`
`

const Footer = () => (
    <FooterContainer>
      <div>
        <ChaseIcon src="./static/c-grey.jpg"/>
      </div>
       <div>
        <FooterNav>
          <Link href="/"><h3>Home</h3></Link>
          <Link href="/adventures"><h3>Adventures</h3></Link>
          <Link href="/gear"><h3>Gear</h3></Link>
          <Link href="/contact"><h3>Contact</h3></Link>
        </FooterNav>
      </div>
       <div>
       <FooterSocial>
          <SocialLink href='http://google.com' target='_blank'>
            <Social src="./static/instagram.png" href="http://google.com" />
          </SocialLink>
          <Social src="./static/twitter.png" />
          <Social src="./static/angellist.png"/>
        </FooterSocial>
      </div>
    </FooterContainer>
)

export default Footer