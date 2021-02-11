import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";
import { StyledHeader, HeaderContent } from "../styles";

const Header = ({ state }) => {
    return (
        <StyledHeader>
            <HeaderContent>
                <h1>Frontity Workshop</h1>
                <p>Current URL: {state.router.link}</p>
                <nav>
                    <Link link="/">Home</Link>
                    <br />
                    <Link link="/page/2">More posts</Link>
                    <br />
                    <Link link="/about-us">About Us</Link>
                </nav>
            </HeaderContent>
        </StyledHeader>
    );
};

export default connect(Header);