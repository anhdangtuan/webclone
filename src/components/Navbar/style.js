import styled from "styled-components";

const Snavbar = styled.div`
  text-align: center;
  background-color: yellow;
  .nav {
    z-index: 16;
    display: grid;
    grid-area: 1/1/-1/-1;
    grid-template-columns: var(--navigation-grid-template-columns);
    align-items: center;
    width: 100%;
    max-width: var(--width, 1200px);
    padding: var(--padding, 24px 0);
    margin: 0 auto;
  }
  .title {
    padding-top: 25px;
    padding-bottom: 25px;
    font-weight: 500;
    font-size: 30px;
  }
  .navlinks {
    font-size: 15px;
  }
  .about-me {
    padding: 0px 30px;
  }
  .link {
    padding-bottom: 30px;
  }
`;
export default Snavbar;
