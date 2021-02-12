import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const Navigation = ({ state }) => {
    return (
        <Menu>
            <Link link="/">Home</Link>
            <Link link="/page/2">More posts</Link>
            <Link link="/about-us">About Us</Link>
        </Menu>
    );
};

const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    margin-top: 1em;
    & > a {
        margin-right: 1em;
        color: steelblue;
        text-decoration: none;
    }
`;

export default connect(Navigation);