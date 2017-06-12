import { InjectGlobal } from '../components/CPO_Theme';
import styled from 'styled-components';
import Layout from '../components/CPO_Theme.js';
import { fadeInUp } from 'react-css-animate';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PostCard = styled.section`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  
  > h1 {
    font-family: 'Avenir Next';
    font-weight: 600;
    font-size: 2em;
    padding-bottom: 10px;
    border-bottom: 1px solid #f3f3f3;
  }

  > p {
    color: #7d7d7d;
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
    padding-bottom: 3px;
  }
`

export const Button = styled.div`
  font-family: 'Source Serif Pro', serif;
  background-color: #24292e;
  color: black;
  height: 18vh;
  text-align: center;
  text-transform: uppercase;

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

export const AboutButton = Button.extend`
  background-color: #F16125;
`;

export const ContactButton = Button.extend`
  background-color: #F8B03E;
`;

const Index = () => (
  <Layout>
    <PostCard>      
      <Avatar src="https://pbs.twimg.com/profile_images/344513261569144716/a5f2f32a10970817e1545afc50a3ac4b_400x400.jpeg"/>
      <h1>Chase Olivieri</h1>
      <p>Hi! I'm a designer and developer that splits time between San Francisco and Lake Tahoe. I currently work as a React and Rails freelancer. I also enjoy surfing, skiing and coconut chocolate-chip cookies. Seriously, coconut is a gamechanger.</p>
      <p>I believe in design solutions that are both functional and wordly. My past work includes <a href="#">OIA</a>, <a href="#">Teach For America</a>, <a href="#">Firefox</a> and hush-hush stuff at <a href="#">GreenWater</a>.</p>
      <p>Travel directly informs the work that I do day-to-day and exposes me to people both in busy cities and those living on the edge of the grid. I've visited over 77 countries so far and am frequently on planes off to discover new places.</p>
      <p>Mi casa es su casa - cruise around the site and please free to <a href="#">get in touch</a>! I always love chatting with new people.</p>
      <p>🤙 Chase</p>
    </PostCard>
    <Wrapper>
      <AdventuresButton><h2>Adventures</h2></AdventuresButton>
      <AboutButton><h2>About</h2></AboutButton>
      <ContactButton><h2>Contact</h2></ContactButton>
    </Wrapper>
  </Layout>
)

export default Index