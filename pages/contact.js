import { InjectGlobal, black, grey, red, orange, yellow } from '../components/CPO_Theme';
import styled from 'styled-components';
import Layout from '../components/CPO_Theme.js';
import media from '../components/media';

export const PostCard = styled.section`
  margin: 0 auto;
  max-width: 1000px;
  text-align: center;
  padding: 10px 10px 30px 10px;

  > h1 {
    text-align: center;
    font-family: 'Avenir Next';
    font-weight: 600;
    font-size: 2em;
    padding-bottom: 10px;
  }
  
  > h3 {
    text-align: left;
    margin-bottom: 5px;
  }

  > p {
    color: ${grey};
    margin-top: 0px;
    font-size: 1.1em;
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
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 100px;
  margin: 10px 0 0 0;
`;


const Contact = () => (
  <Layout>
    <PostCard>
      <h1>Hi, I'm Chase!</h1>
      <p>I design and build things on the internet using React and Rails.</p>
      <h3>Three fun facts:</h3>
      <p>1. I grew up in Puerto Rico<br/>
      2. Goal to visit 100 countries by 30 (currently at 77)<br/>
      3. I love coffee and travel with a grinder and pour-over setup</p>
      <h3>Select Clients</h3>
        <p>Mozilla, Under Armour, Patagonia, Outdoor Industry Foundation, BBC News, Rainbow Sandals, Emily Krzyzewski Center, EFE News, Southern Living, VANS Triple Crown, Duke University, Teach For America, GreenWater, and few that I'm not allowed to talk about...</p>
      <h3>Work Availability</h3>
        <p>Open for select projects starting in July 2017.</p>
      <h3>Contact</h3>
        <p>I'm easy to reach via email - <a href="mailto:c@cpo.is" target="_blank">c@cpo.is</a> or you can follow me on <a href="http://instagram.com/chaseolivieri" target="_blank">Instagram</a>.</p>
    </PostCard>
  </Layout>
)

export default Contact