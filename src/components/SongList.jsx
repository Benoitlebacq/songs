import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Icon } from "semantic-ui-react";
import { selectSong} from '../actions';

class SongList extends Component {
  renderList() {
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <Button animated primary onClick={()=> this.props.selectSong(song)}>
              <Button.Content visible>Select</Button.Content>
              <Button.Content hidden>
                <Icon name="music" />
              </Button.Content>
            </Button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }
  render() {
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
// retourne un objet comme un props pour ce composant 
const mapStateToProps = state => {
    console.log(state)
  return { songs: state.songs };
};
export default connect(mapStateToProps, {selectSong})(SongList);
// la fonction connect va permettre de dispatch l'action