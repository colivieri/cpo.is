import { InjectGlobal } from '../components/CPO_Theme';
import styled from 'styled-components';
import { fadeInUp } from 'react-animations';
import Layout from '../components/CPO_Theme.js'

export const Container = styled.div`
  margin: 0 auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const PostCard = styled.section`
  width: 50%;
  margin: 0 auto;
  text-align: center;
  > p {
    font-size: 1em;
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
  padding: 10px 15px;
  margin: 5px;

  box-shaddow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);
  transition: box-shadow .25s;
  border-radius: 3px;

  > h2 {
    font-size: 2.4em;
    color: white;
  }
`;

export const AdventuresButton = Button.extend`
  background-image: url('./static/world-map.png');
  background-size: cover;
`

export const AboutButton = Button.extend`
  background-color: #F16125;
`

export const ContactButton = Button.extend`
  background-color: #F8B03E;
`

const Index = () => (
  <Layout>
    <Container>
        <PostCard>
          <h1>CHASE OLIVIERI</h1>
          <p>Frequently on planes.</p>
        </PostCard>
        <Wrapper>
          <AdventuresButton><h2>Adventures</h2></AdventuresButton>
          <AboutButton><h2>About</h2></AboutButton>
          <ContactButton><h2>Contact</h2></ContactButton>
        </Wrapper>
      </Container>
  </Layout>
)

export default Index