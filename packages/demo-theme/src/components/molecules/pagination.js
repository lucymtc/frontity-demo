import React from "react";
import { styled } from "frontity";
import Link from "@frontity/components/link";

const Pagination = ({ 
  next,
  previous
 }) => {
  return (
    <PrevNextNav>
      {previous && (
        <Link link={previous}>
          &#171; Prev
        </Link>
      )}
      {next && (
        <Link link={next}>
          Next &#187;
        </Link>
      )}
  </PrevNextNav>
    );
};
  
export default Pagination;

const PrevNextNav = styled.div`
  padding-top: 1.5em;

  & > a {
    background: #eee;
    text-decoration: none;
    padding: 0.5em 1em;
    color: #888;
    border: 1px solid #aaa;
    font-size: 0.8em;
    margin-right: 2em;
  }
  & > button:hover {
    cursor: pointer;
  }
`;