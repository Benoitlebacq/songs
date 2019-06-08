import React from "react";
import Songlist from "./SongList";
import SongDetail from './SongDetail';
import "semantic-ui-css/semantic.min.css";

const App = () => {
  return (
    <div className="ui container grid">
      <div className=" ui row">
        <div className="column eight wide">
          <Songlist />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
