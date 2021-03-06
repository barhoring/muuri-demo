/* React */
import React, { useState, useRef, useEffect } from "react";
/* Muuri-react */
import { MuuriComponent } from "muuri-react";
/* Utils & components */
import { generateItems, options } from "./utils";
import { shuffle } from "lodash";
import {
  Select,
  Header,
  Footer,
  Button,
  Demo,
  Item,
  Tweet,
  Commit,
} from "./components";
/* Style */
import "./style.css";
import { TwitterIcon } from "./icons";

const url = `https://my-json-server.typicode.com/barhoring/social-wall-data/db`;

// App.
const App = () => {
  // Muuri instance ref.
  const muuriRef = useRef(null);

  // Items state.
  const [items, setItems] = useState(generateItems());
  const [tweets, setTweets] = useState();
  const [commits, setCommits] = useState();

  // Sort state.
  const [sort, setSort] = useState({
    keys: null,
    value: "title",
  });

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        debugger;
        setTweets(res.tweets);
        setCommits(res.commits);
      });
  }, []);

  // Children.

  const commitChildren =
    commits &&
    commits.map(
      ({
        issueId,
        title,
        status,
        devName,
        devMergeCount,
        devImage,
        commitTime,
      }) => <Commit title={title} image={devImage} status={status} />
    );
  const tweetChildren =
    tweets &&
    tweets.map(
      ({ tweetId, title, tweet, sourceImage, sourceName, tweetTime }) => (
        <Tweet
          key={tweetId}
          title={title}
          tweet={tweet}
          image={sourceImage}
          remove={() =>
            setItems(items.filter((item) => item.tweetId !== tweetId))
          }
        />
      )
    );
  let children = [];
  if (tweetChildren) children = children.concat(tweetChildren);
  if (commitChildren) children = children.concat(commitChildren);
  let children2 = shuffle(children);
  debugger;

  return (
    <Demo>
      {/* Header */}
      <Header>
        <Select
          values={[
            // Text => Value.
            ["Title (no drag)", "title"],
            ["Color (no drag)", "color"],
            ["Drag", "drag"],
          ]}
          onChange={(e) => {
            // Value of the select component.
            const value = e.target.value;
            // Save the keys if in the old sort value
            // the drag was enabled.
            const keys =
              sort.value === "drag"
                ? muuriRef.current.getItems().map((item) => item.getKey())
                : sort.keys;

            setSort({ value, keys });
          }}
        />
      </Header>
      {/* Content */}
      <MuuriComponent
        {...options}
        ref={muuriRef}
        dragEnabled={sort.value === "drag"}
        sort={sort.value === "drag" ? sort.keys : sort.value}
        propsToData={({ color, title }) => ({ color, title })}
      >
        {children2}
      </MuuriComponent>
      {/* Footer */}
      <Footer>
        <Button onClick={() => setItems(items.concat(generateItems()))} />
      </Footer>
    </Demo>
  );
};

export default App;
