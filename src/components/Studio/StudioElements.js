import styled from "styled-components";

export const StudioSection = styled.section`
  height: 100vh;
  background: linear-gradient(to bottom, #d9a09f 70%, #654a59 30%);
`;

const AccordionContainer = styled.div`
  overflow: hidden;
  width: 18.75rem;
  border-radius: 0.5rem;
  background-color: #27262c;
  color: #f9f9f9;
`;

const Inner = styled.div`
  position: absolute;
  padding: 1rem;
  color: #c3c1cb;
`;

const Header = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 1rem;
  font-size: 1rem;
  text-align: left;
  background: #212025;
  color: inherit;
  cursor: pointer;
`;

const HeaderIcon = styled.span`
  transform: rotate(${props => (props.isActive ? -180 : 0)});
  transition: all 0.2s;
`;

const Content = styled.div`
  position: relative;
  overflow: hidden;
  height: ${props => {
    const inner = document.getElementById(props.itemName);
    return `${props.isActive && inner ? inner.clientHeight : 0}px`;
  }};
  transition: height 0.35s;
`;

const AccordionContent = ({ onClick, itemName, itemContent, isActive }) => {
  return (
    <>
      <Header onClick={onClick}>
        {itemName}
        <HeaderIcon isActive={isActive}>
          expand more
        </HeaderIcon>
      </Header>
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName}>{itemContent}</Inner>
      </Content>
    </>
  );
};

export { AccordionContainer, AccordionContent };
