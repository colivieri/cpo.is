import { InjectGlobal, black, grey, red, orange, yellow } from '../components/CPO_Theme';
import Link from 'next/link';
import styled from 'styled-components';
import Layout from '../components/CPO_Theme';
import media from '../components/media';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`
export const PostCard = styled.section`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  
  ${media.giant`
    width: 70%;
  `}
  ${media.phone`
    width: 90%;
    font-size: .9em;
    }
  `}

  > h1 {
    font-family: 'Avenir Next';
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

  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 10px 20px;
  margin: 5px;

  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
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
    <PostCard>      
      <Avatar src="https://pbs.twimg.com/profile_images/344513261569144716/a5f2f32a10970817e1545afc50a3ac4b_400x400.jpeg"/>
      <h1>Chase Olivieri</h1>
      <p>Hi! I'm a designer and developer that splits time between San Francisco and Lake Tahoe. I currently work as a React and Rails freelancer. I also enjoy surfing, skiing and coconut chocolate-chip cookies. Seriously, coconut is a gamechanger.</p>
      <p>My past work includes projects at <a href="#">OIA</a>, <a href="#">Teach For America</a>, <a href="#">Firefox</a> and hush-hush stuff at <a href="#">GreenWater</a>.</p>
      <p>Travel directly informs the work that I do day-to-day and exposes me to people both in busy cities and those living on the edge of the grid. I've visited over 77 countries so far and am frequently on planes off to discover new places.</p>
      <p>I graduated from Duke University a few years ago and later earned a master's degree from University of Miami. Please free to <a href="#">get in touch</a>! I always love chatting with new people.</p>
      <p>🤙 Chase</p>
    </PostCard>
    <Wrapper>
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