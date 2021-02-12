import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";
import Pagination from "../molecules/pagination";

const Archive = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <Items>
      {data.items.map(item => {
        const post = state.source[item.type][item.id];
        return (
          <Link key={item.id} link={post.link}>{post.title.rendered}</Link>
        );
      })}
      <Pagination 
        next={data.next}
        previous={data.previous} 
      />
    </Items>
  );
};

export default connect(Archive);

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2em;
    color: steelblue;
    text-decoration: none;
  }
`;
