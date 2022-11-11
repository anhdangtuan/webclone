import styled from "styled-components";

const Ssection6 = styled.div`
  text-align: left;
  .Section6 {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    padding: 80px;
  }
  .text6 {
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    font-size: 18px;
    padding-left: 80px;
  }
  .title6 {
    font-size: 60px;
    font-weight: 500;
    padding: 0px 180px;
  }
  .img6 {
    padding-right: 180px;
  }
  .content6 {
    padding: 20px 180px;
    padding-top: 30px;
  }

  .button6 {
    margin-left: 180px;
    background-color: black;
    height: 50px;
    width: 120px;
    color: white;
    margin-top: 80px;
  }
  @media only screen and (max-width: 576px) {
    .title6 {
      padding: 0px;
    }
    .content6 {
      padding: 20px 0px;
    }
    .button6 {
      padding-left: 0px;
    }
  }
`;
export default Ssection6;
