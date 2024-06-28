import styled from "styled-components";
export const ModalsWrap = styled.div`
  padding: 20px;
  text-align: center;
  .para {
    padding: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .timeSlots {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    button{
        background-color: ${({ bgClr }) => bgClr || "white"};
    }
  }
  button {
    border-radius: 0;
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 20px;
      height: 20px;
    }
  }
`;
