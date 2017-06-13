import { InjectGlobal, black, grey, red, orange, yellow } from '../components/CPO_Theme';
import styled from 'styled-components';
import Layout from '../components/CPO_Theme.js';
import media from '../components/media';

export const PostCard = styled.section`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  padding-bottom: 30px;
  
  ${media.giant`
    width: 70%;
  `}
  ${media.phone`
    width: 90%;
    font-size: .9em;
    }
  `}

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

const Contact = () => (
  <Layout>
    <PostCard>      
      <Avatar src="https://pbs.twimg.com/profile_images/344513261569144716/a5f2f32a10970817e1545afc50a3ac4b_400x400.jpeg"/>
      <h3>Clients</h3>
        <p>Mozilla, BBC News, Rainbow Sandals, Emily Krzyzewski Center, EFE News, Southern Living, VANS Triple Crown, Duke University, Teach For America, GreenWater, and few that I'm not allowed to talk about...</p>
      <h3>Work Availability</h3>
        <p>Open for select projects starting in June 2017.</p>
      <h3>Contact</h3>
        <p>I'm easy to reach via email - <a href="mailto:c@cpo.is" target="_blank">c@cpo.is</a> or you can follow me on <a href="http://instagram.com/chaseolivieri" target="_blank">Instagram</a>.</p>
    </PostCard>
  </Layout>
)

export default Contact