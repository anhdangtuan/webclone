import styled from "styled-components";

const Ssection1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;

  .img {
    display: flex;
    justify-content: center;
  }
  .Section_blog {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    padding-top: 60px;
  }
  .Section1_blog {
    padding-left: 60px;
  }

  .text1 {
    text-align: center;
  }
  .img1 {
    padding-bottom: 30px;
    width: 600px;
    height: 300px;
    padding-right: 10px;
  }
  .product {
    display: flex;
    flex-direction: inherit;
    justify-items: center;
  }
  .content1 {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* width: 500px;
    height: 30px; */
  }
  .pagination {
    text-align: center;
  }
`;
export default Ssection1;
