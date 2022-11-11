import styled from "styled-components";

const Ssection1 = styled.div`
  background-color: aliceblue;
  text-align: left;
  .Section1 {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    padding: 80px;
  }
  .text1 {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    font-size: 18px;
    padding-left: 80px;
  }
  .title {
    font-size: 60px;
    padding: 30px 180px;
  }
  .img1 {
    padding-right: 180px;
  }
  .content1 {
    padding: 20px 180px;
  }

  .button1 {
    margin-left: 180px;
    margin-top: 50px;
    background-color: black;
    height: 50px;
    width: 120px;
    color: white;
  }
  /* mobile */
  @media only screen and (max-width: 576px) {
    .Section1 {
      padding: 0px;
    }

    .text1 {
      padding-left: 0px;
    }
    .title {
      padding: 0px;
      font-size: 45px;
      text-align: center;
    }
    .content1 {
      padding: 5px;
      text-align: center;
    }
    .button-contract {
      width: 100%;
      display: flex;
      justify-content: center;
    }
    .button1 {
      margin-block: center;
      background-color: black;
      height: 50px;
      width: 120px;
      color: white;
      margin-left: 0px;
    }
    .img1 {
      width: 100%;
      padding: 0px;
    }
    .imghello {
      width: 100%;
    }
  }
`;
export default Ssection1;
