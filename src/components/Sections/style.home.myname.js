import styled from "styled-components";

const Ssection3 = styled.div`
  background-color: aliceblue;
  text-align: center;
  .Section3 {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    padding: 30px;
  }

  .title3 {
    font-size: 60px;
    padding: 30px 180px;
    display: flex;
    justify-content: center;
  }

  .content3 {
    font-size: 18px;
    padding: 30px 530px;
    display: flex;
    align-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 576px) {
    .title3 {
      padding: 0px;
      font-size: 40px;
    }
    .content3 {
      padding: 0px;
    }
  }
`;
export default Ssection3;
