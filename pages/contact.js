import { InjectGlobal, black, grey, red, orange, yellow } from '../components/CPO_Theme';
import styled from 'styled-components';
import Layout from '../components/CPO_Theme.js';
import media from '../components/media';

export const PostCard = styled.section`
  margin: 0 auto;
  text-align: center;
  padding: 10px 10px 30px 10px;

  > h1 {
    text-align: center;
    font-family: 'Avenir Next';
    font-weight: 600;
    font-size: 2em;
    padding-bottom: 10px;
    border-bottom: 1px solid #f3f3f3;
  }
  
  > h3 {
    text-align: left;
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
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 100px;
  margin: 30px 0 0 0;
`;

const AboutLinks = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const AboutColumn = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  flex-wrap: row;

  li {
    padding-bottom: 15px;
  }
  
  a {
    color: black;
    border-bottom: solid 3px red;
  }
  a:hover {
    color: #7d7d7d;
    padding-bottom: 2px;
    transition: padding-bottom .1s;
  }
  span {
    padding-left: 1.5em;
  }
`;

const AboutTag = styled.div`
  background-color: ${yellow};
  font-weight: 700;
  padding: 3px 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  color: white;
  text-transform: uppercase;
`

const Contact = () => (
  <Layout>
    <AboutLinks>
      <AboutColumn>
        <AboutTag>Social</AboutTag>
        <li><a href="twitter.com/chaseolivieri">Instagram</a></li>
        <li><a href="twitter.com/chaseolivieri">Twitter</a></li>
        <li><a href="twitter.com/chaseolivieri">Github</a></li>
        <li><a href="twitter.com/chaseolivieri">Email</a></li>
      </AboutColumn>

      <AboutColumn>
        <AboutTag>Work</AboutTag>
        <li><a href="twitter.com/chaseolivieri">Listo Labs</a></li>
        <span><li><a href="twitter.com/chaseolivieri">Outdoor Industry</a></li></span>
        <span><li><a href="twitter.com/chaseolivieri">Turtle Bay</a></li></span>

        <li><a href="twitter.com/chaseolivieri">Twitter</a></li>
        <li><a href="twitter.com/chaseolivieri">Github</a></li>
        <li><a href="twitter.com/chaseolivieri">Email</a></li>
      </AboutColumn>

      <AboutColumn>
        <AboutTag>Other</AboutTag>
        <li><a href="twitter.com/chaseolivieri">Instagram</a></li>
        <li><a href="twitter.com/chaseolivieri">Twitter</a></li>
        <li><a href="twitter.com/chaseolivieri">Github</a></li>
        <li><a href="twitter.com/chaseolivieri">Email</a></li>
      </AboutColumn>

      <AboutColumn>
        <AboutTag>Non-profit</AboutTag>
        <li><a href="twitter.com/chaseolivieri">Instagram</a></li>
        <li><a href="twitter.com/chaseolivieri">Twitter</a></li>
        <li><a href="twitter.com/chaseolivieri">Github</a></li>
        <li><a href="twitter.com/chaseolivieri">Email</a></li>
      </AboutColumn>
    </AboutLinks>

    <PostCard>      
      <Avatar src="https://pbs.twimg.com/profile_images/344513261569144716/a5f2f32a10970817e1545afc50a3ac4b_400x400.jpeg"/>
      <h3 className="animated fadeInUp">Select Clients</h3>
        <p>Mozilla, Under Armour, Patagonia, Outdoor Industry Foundation, BBC News, Rainbow Sandals, Emily Krzyzewski Center, EFE News, Southern Living, VANS Triple Crown, Duke University, Teach For America, GreenWater, and few that I'm not allowed to talk about...</p>
      <h3 className="animated fadeInUp">Work Availability</h3>
        <p>Open for select projects starting in June 2017.</p>
      <h3 className="animated fadeInUp">Contact</h3>
        <p>I'm easy to reach via email - <a href="mailto:c@cpo.is" target="_blank">c@cpo.is</a> or you can follow me on <a href="http://instagram.com/chaseolivieri" target="_blank">Instagram</a>.</p>
    </PostCard>
  </Layout>
)

export default Contact