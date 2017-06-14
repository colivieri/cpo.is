import Link from 'next/link'
import styled from 'styled-components';
import media from '../components/media';

const MainHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0 10px;

  h1, a {
    color: black;
    text-transform: none;
  }
   ${media.giant`
    flex-direction: row;
    align-items: center;
    }
  `}
  ${media.phone`
    flex-direction: column;
    align-items: center;
    }
  `}
`;

const MainNav = styled.ul`
  display: flex;
  list-style: none;
  padding: 0px;


  li {
    padding: 0 10px;
  }
  a {
    font-weight: 700;
    color: black;
`;
  
const Header = () => (
    <MainHeader>
      <h3><Link href="/">chase olivieri</Link></h3>
      <MainNav>
        <li><Link href="/adventures">Adventures</Link></li>
        <li><Link href="/gear">Gear</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </MainNav>
    </MainHeader>
)

export default Header