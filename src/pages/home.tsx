import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Playlist, { Playitem } from '../components/playlist';

export default () => {
    const [playlist, setPlaylist] = useState<Playitem[]>([{ src: "" }])
    useEffect(() => {
        let a = [
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
        ]
        setPlaylist(a)
    }, [])
    const [currentTrack, setTrackIndex] = React.useState(0)
    const handleClickNext = () => {
        console.log('click next')
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    // const handleEnd = () => {
    //     console.log('end')
    //     setTrackIndex((currentTrack) =>
    //         currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
    //     );
    // }
    // return <>
    //     <div style={{ width: '100vw', display: 'flex', alignItems: 'flex-end' }}>
    //         <AudioPlayer
    //             src="https://music.163.com/song/media/outer/url?id=1969744125"
    //             onPlay={_ => console.log("onPlay")}
    //         // other props here
    //         />
    //     </div>
    // </>
    // <div style={{ width: '100vw', display: 'flex', alignItems: 'flex-end' }}>
    return (
        <>
            <Playlist playlistsrc={playlist} seleced={currentTrack} />
            <AudioPlayer
                src={playlist[currentTrack].src}
                showSkipControls
                onClickNext={handleClickNext}
                autoPlay={false}
                onPlay={_ => console.log("onplay")}
                autoPlayAfterSrcChange={false}
            />
        </>)
}
