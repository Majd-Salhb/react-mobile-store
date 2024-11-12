import styled from "styled-components";

const ButtonContainer = styled.button`
  background: transparent;
  border: 0.05rem solid ;
  border-color:${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  border-radius: 0.5rem ;
  color:${(props) => (props.cart ? "var(--mainYellow)" : "var(--lightBlue)")};
  text-transform: capitalize;
  font-size: 1.4rem;
  margin:0 0.5rem;
  padding:0 0.5rem
  curser:pointer;
  &:hover{
  background:${(props) =>
    props.cart ? "var(--mainYellow)" : "var(--lightBlue)"};
  color:var(--mainBlue);
  transition: all 1s ease-in-out;
}
  &:focus{outline:none}`;

export { ButtonContainer };
