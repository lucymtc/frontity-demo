/**
 * connect takes a React component as an argument. It passes the Frontity object to the React component specified in the argument via props. The Frontity object has amongst it's properties state, actions and libraries. connect therefore enables a component in our theme to access data stored in the state, or functions available in actions.
 */
import React from "react";
import { connect, Global, css } from "frontity";
import Switch from "@frontity/components/switch";
import { Main } from "../styles";
import List from "./list";
import Post from "./post";
import Page from "./page";
import Header from "./header";

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
                <List when={data.isArchive} />
                <Post when={data.isPost} />
                <Page when={data.isPage} />
            </Switch>
        </Main>
        </>
    );
}

export default connect(Root);