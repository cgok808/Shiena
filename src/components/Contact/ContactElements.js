import styled from "styled-components";

export const ContactSection = styled.section`
  height: 75vh;
  background-color: #b58c90;
  input {
    border: none;
    border-radius: 10px;
    height: 50px;
    padding-left: 40px;
    background-color: #fdf9ee;
    margin-top: 20px;
    box-shadow: 10px 5px 5px #96676C;

    &:focus {
      outline-color: #96676c;
    }
  }

  textarea {
    margin-top: 20px;
    border: none;
    background-color: #fdf9ee;
    border-radius: 10px;
    width: 95%;
    padding: 30px 40px 0 40px;
    box-shadow: 10px 5px 5px #96676C;

    &:focus {
      outline-color: #96676c;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FirstPairInput = styled.input`
  width: 45%;
`;

export const SecondPairInput = styled.input`
  width: 95%;
`;

export const SecondWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
