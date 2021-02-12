import React from "react";
import { connect, styled } from "frontity";
import Navigation from "../molecules/navigation";

export const Header = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <StyledHeader isPostType={data.isPostType} isPage={data.isPage}>
      <HeaderInner>
        <h1>Frontity Workshop</h1>
        <p>Current URL: {state.router.link}</p>
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
  