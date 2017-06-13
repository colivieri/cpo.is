import { css } from 'styled-components';

const sizes = {
  phone: 375,
  tablet: 768,
  desktop: 992,
  giant: 1170
};

function phone(...args) {
  return css`
    @media(max-width: ${sizes.phone}px) {
      ${css(...args)}
    }
  `;
}

function giant(...args) {
  return css`
    @media(max-width: ${sizes.giant}px) {
      ${css(...args)}
    }
  `;
}

const media = {
  phone,
  giant
};

export default media;