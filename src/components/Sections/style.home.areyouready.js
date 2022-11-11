import styled from "styled-components";

const Ssection5 = styled.div`
  background-color: aliceblue;
  text-align: left;
  .Section5 {
    padding: 150px 100px;
    display: flex;
    justify-content: center;
  }

  .text5 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .title5 {
    font-size: 60px;
    text-align: center;
  }

  .content5-1-2 {
    padding-top: 50px;
    padding-right: 20px;
    font-size: 16px;
    width: 80%;
    padding-left: 390px;
  }
  .content5-3-4 {
    padding-left: 150px;
    padding-top: 50px;
    padding-right: 400px;
    width: 90%;
  }
  .content5-1 {
    /* padding-bottom: 60px; */
  }
  .content5-3 {
    /* padding-bottom: 60px; */
  }
  .content5-4 {
    /* padding-bottom: 60px;
    padding-top: 30px; */
  }
  .title5-1 {
    font-size: 25px;
  }
  .title5-2 {
    font-size: 25px;
  }
  .title5-3 {
    font-size: 25px;
  }
  .title5-4 {
    font-size: 25px;
  }
  @media only screen and (max-width: 576px) {
    .text5 {
      display: flex;
      flex-direction: column;
    }
    .content5-1-2 {
      padding-left: 10px;
      text-align: center;
      width: 100%;
    }
    .content5-3-4 {
      padding-right: 10px;
      padding-left: 10px;
      text-align: center;
      width: 100%;
    }
    .Section5 {
      padding: 0px;
    }
  }
`;
export default Ssection5;
