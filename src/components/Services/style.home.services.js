import styled from "styled-components";

const Ssection4 = styled.div`
  text-align: left;
  .Section4 {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    padding: 80px;
  }
  .text4 {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    font-size: 18px;
    padding-left: -30px;
  }
  .title4 {
    font-size: 60px;
    padding: 30px 180px;
  }
  .img4 {
    padding-right: 180px;
  }
  .content4 {
    padding: 20px 180px;
  }

  .button4 {
    margin-left: 180px;
    margin-top: 50px;
    background-color: black;
    height: 50px;
    width: 120px;
    color: white;
  }
  @media only screen and (max-width: 576px) {
    .Section4 {
      padding: 0px;
    }
    .img4 {
      width: 100%;
      padding-right: 0px;
      img {
        width: 100%;
      }
    }
    .content4 {
      padding: 0px;
      text-align: center;
    }
    .title4 {
      font-size: 40px;
      padding: 0px;
      padding-left: 120px;
    }
    .button-services {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .button4 {
      height: 50px;
      width: 120px;
      margin-left: 0px;
    }
  }
`;
export default Ssection4;
