/**
* connect takes a React component as an argument. It passes the Frontity object to the React component specified in the argument via props. The Frontity object has amongst it's properties state, actions and libraries. connect therefore enables a component in our theme to access data stored in the state, or functions available in actions.
*/
import React from "react";
import { connect, Global, css, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Header from "./organisms/header";
import Archive from "./templates/archive";
import Page from "./templates/page";
import Post from "./templates/post";

const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html {
            font-family: system-ui, Verdana, Arial, sans-serif;
          }
        `}
      />
      <Header />
      <Main>
        <Switch>
          <Archive when={data.isArchive} />
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </Main>
    </>
  );
}
  
export default connect(Root);

  
const Main = styled.main`
  max-width: 800px;
  padding: 1em;
  margin: auto;
  
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5em 0;
  }
  p {
    line-height: 1.25em;
    margin-bottom: 0.75em;
  }
  figcaption {
    color: #828282;
    font-size: 0.8em;
    margin-bottom: 1em;
  }
`;