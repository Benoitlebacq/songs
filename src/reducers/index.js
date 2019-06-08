import { combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {title : 'No Scrubs', duration: '4:05'},
        {title : 'Macarena', duration: '2:30'},
        {title : 'All Star', duration: '3:35'},
        {title : 'Barbie Girl', duration: '2:42'}

    ];
}

const selectedSongReducer = (selectedSong=null , action ) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
})