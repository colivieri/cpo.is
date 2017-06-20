import { InjectGlobal, black, grey, red, orange, yellow, blue, stepu1, stepu2 } from '../components/CPO_Theme';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/CPO_Theme';
import media from '../components/media';

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`
export const Words = styled.div`
  p {
    font-size: ${ stepu1 };
  }
`;

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
  height: 17vh;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer; 
  cursor: hand;

  flex: 0 0 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 8px;


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
  background: url('./static/world-map.png') 100%;
  background-size: cover;
`;

export const GearButton = Button.extend`
  background: ${yellow};
`;

export const AboutButton = Button.extend`
  background-color: ${blue};
`;

const Index = () => (
  <Layout>
    <Wrapper>
      <Link href="/contact">
        <Button><h2>CPO</h2></Button>
      </Link>
      <Link href="/contact">
        <AboutButton><h2>About</h2></AboutButton>
      </Link>
      <Link href="/adventures">
        <AdventuresButton><h2>Adventures</h2></AdventuresButton>
      </Link>
      <Link href="/gear">
        <GearButton><h2>Gear</h2></GearButton>
      </Link>
    </Wrapper>
  </Layout>
)

export default Index