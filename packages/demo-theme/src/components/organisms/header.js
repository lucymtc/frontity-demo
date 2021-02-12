import React from "react";
import { connect, styled } from "frontity";
import Navigation from "../molecules/navigation";

export const Header = ({ state }) => {
    return (
        <StyledHeader>
            <HeaderInner>
                <h1>Frontity Workshop</h1>
                <p>Current URL: {state.router.link}</p>
                <Navigation />
            </HeaderInner>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: #e5edee;
    border-width: 0 0 8px 0;
    border-style: solid;
    border-color: maroon;

    h1 {
    color: #4a4a4a;
    }
`;

const HeaderInner = styled.div`
  max-width: 800px;
  padding: 2em 1em;
  margin: auto;
`;

export default connect(Header);