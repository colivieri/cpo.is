import { InjectGlobal, black, grey, red, orange, yellow } from '../components/CPO_Theme';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/CPO_Theme';
import media from '../components/media';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`
export const PostCard = styled.section`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 20px;
  
  ${media.giant`
    width: 70%;
  `}
  ${media.phone`
    width: 95%;
    font-size: .9em;
    }
  `}

  > h1 {
    font-weight: 600;
    font-size: 2em;
    padding-bottom: 10px;
    border-bottom: 1px solid #f3f3f3;
  }

  > p {
    color: ${grey};
    margin-top: 0px;
    font-size: 1.2em;
    text-align: left;
    line-height: 26px;
  }
  a {
    color: #7d7d7d;
    border-bottom: solid 3px red;
  }
  a:hover {
    color: black;
    padding-bottom: 2px;
    transition: padding-bottom .1s;
  }
`

export const Button = styled.div`
  font-family: 'Source Serif Pro', serif;
  background-color: ${red};
  color: black;
  height: 18vh;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer; 
  cursor: hand;

  flex: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 20px;
  margin: 5px;

  transition: box-shadow .25s;
  border-radius: 3px;

  > h2 {
    font-size: 2.4em;
    color: white;
  }
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 100px;
  margin: 30px 0 0 0;
`;

export const AdventuresButton = Button.extend`
  background-image: url('./static/world-map.png');
  background-size: cover;
`;

export const GearButton = Button.extend`
  background-color: ${orange};
`;

export const AboutButton = Button.extend`
  background-color: ${yellow};
`;

const Index = () => (
  <Layout>
    
    <Wrapper className="animated fadeInUp">
      <Link href="/adventures">
        <AdventuresButton><h2>Adventures</h2></AdventuresButton>
      </Link>
      <Link href="/gear">

        <GearButton><h2>Gear</h2></GearButton>
      </Link>
      <Link href="/contact">
        <AboutButton><h2>About</h2></AboutButton>
      </Link>
    </Wrapper>
  </Layout>
)

export default Index