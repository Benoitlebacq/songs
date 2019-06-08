// Action creator
export const selectSong = (song) => {
    //retunr an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

