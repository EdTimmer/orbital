import styled from 'styled-components';
import colors from './styles/colors';
import lakeImage from '/images/lake-purple.jpg';

export const AppContainer = styled.div`
  position: relative;
  z-index: 1;
  /* background: ${colors.eerieBlack}; */
  background-image: url(${lakeImage});
  font-family: 'Roboto Mono', monospace;
  padding: 0 3rem 5rem 3rem;
  /* width: 100vw; */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

export const SecondRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  margin-top: -10rem;
  flex-wrap: wrap;

  @media (min-width: 1024px) {
    gap: 40rem;
  }
`;

export const Header = styled.h1`
  color: ${colors.seasalt};
  font-family: 'Carlito', 'Roboto Mono', monospace;
  font-size: 2.6rem;
  margin: 0;
  padding: 0;
  font-weight: 400;
  text-align: center;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const PetriDishContainer = styled.div`
  /* border: 1px dashed ${colors.seasalt}; */
  /* border-radius: 30rem; */
  width: 35rem;
  height: 40rem;
  cursor: pointer;
  /* margin-top: 20rem; */
  /* margin-left: 10rem; */
`;

export const ShelfContainer = styled.div`
  /* border: 1px dashed ${colors.seasalt}; */
  /* border-radius: 30rem; */
  width: 35rem;
  height: 40rem;
  cursor: pointer;
  /* margin-top: 20rem; */
`;

export const ThreeDWebGroupContainer = styled.div`
  /* border: 1px dashed ${colors.seasalt}; */
  /* border-radius: 30rem; */
  width: 50rem;
  height: 25rem;
  cursor: pointer;
  /* margin-right: 20rem; */
  /* margin-top: -20rem; */
`;

export const DeloitteDigitalLogoContainer = styled.div`
  /* border: 1px dashed ${colors.seasalt}; */
  /* border-radius: 30rem; */
  width: 80rem;
  height: 40rem;
  cursor: pointer;

  @media (max-width: 450px) {
    width: 45rem;
    height: 25rem;
    margin-bottom: 5rem;
  }

  @media (max-width: 650px) {
    margin-bottom: 5rem;
  }
`;

export const BackgroundCanvas = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0; /* Ensure background canvas is behind other content */
  pointer-events: none; /* Prevent canvas from intercepting pointer events */
`;

export const Title = styled.h1`
  color: ${colors.seasalt};
  font-size: 3.8rem;
  margin: 0;
  letter-spacing: 1.0rem;
  text-transform: lowercase;
  padding: 0;
  font-weight: 300;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  align-items: flex-start;
  margin-bottom: 3rem;
`;

export const WebLink = styled.a`
  color: ${colors.seasalt};
  font-family: 'Carlito', 'Roboto Mono', monospace;
  font-size: 2.6rem;
  text-decoration-line: underline;
  text-underline-offset: 5px;
  margin-left: 0.4rem;
  /* z-index: 3; */
`;

export const Email = styled.p`
  color: ${colors.seasalt};
  margin: 0;
  padding: 0;
  font-size: 1.6rem;
  text-decoration: none;
  z-index: 3;
`;

export const CenterSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
