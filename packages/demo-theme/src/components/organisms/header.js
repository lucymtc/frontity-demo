import React from "react";
import { connect, styled } from "frontity";
import Navigation from "../molecules/navigation";

export const Header = ({ state, actions }) => {
  const data = state.source.get(state.router.link);

  return (
    <StyledHeader isPostType={data.isPostType} isPage={data.isPage}>
      <HeaderInner>
        <h1>Frontity Workshop</h1>
        { state.theme.isUrlVisible ? ( 
          <>
            <p>Current URL: {state.router.link}</p> 
            <Button onClick={actions.theme.toggleUrl}>Hide Url</Button>
          </>
        ) : 
          <Button onClick={actions.theme.toggleUrl}>Show Url</Button>
        }
        <Navigation />
      </HeaderInner>
    </StyledHeader>
  );
};

export default connect(Header);

  
const StyledHeader = styled.header`
  background-color: #e5edee;
  border-width: 0 0 8px 0;
  border-style: solid;
  border-color: ${ props => props.isPostType ? ( props.isPage ? 'lightsteelblue' : 'lightseagreen') : 'maroon' };
  
  h1 {
    color: #4a4a4a;
  }
`;
  
const HeaderInner = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #aaa;

  :hover {
    cursor: pointer;
    color: #888;
  }
`
  