import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Playlist, { Playitem } from '../components/playlist';
import { Button, CalendarPicker, NavBar } from 'antd-mobile';


const Home: React.FC = () => {
    const [playlist, setPlaylist] = useState<Playitem[]>([{ src: "" }])
    const [date, setDate] = useState<Date>(new Date())
    const [currentTrack, setTrackIndex] = React.useState(0)
    const [visible, setVisible] = useState<boolean>(false)

    useEffect(() => {
        let a = [
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
            { src: 'https://music.163.com/song/media/outer/url?id=28613680' },
            { src: 'https://music.163.com/song/media/outer/url?id=1969744125' },
        ]
        setPlaylist(a)
    }, [date])

    const handleClickNext = () => {
        console.log('click next')
        let nextTrack = currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        setTrackIndex(nextTrack);
    };

    const handleClickPre = () => {
        console.log('click pre')
        setTrackIndex((currentTrack) =>
            currentTrack > 0 ? currentTrack - 1 : playlist.length - 1
        );
    };
    const handleSelectedChange = (newSelected: number) => {
        console.log("new selected", newSelected)
        setTrackIndex(newSelected);
    };
    const handleDataChange = () => {

    }

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
    const handleDateSelectClick = ()=>{
        setVisible(true)
    }
    return (
        <>
            <div className="top" style={{ height: '10vh' }}>
                <NavBar backArrow="">
                    <Button onClick={handleDateSelectClick}>{date?.toLocaleDateString()}</Button>
                    <CalendarPicker
                        visible={visible}
                        selectionMode='single'
                        defaultValue={date}
                        onClose={() => setVisible(false)}
                        onMaskClick={() => setVisible(false)}
                        onConfirm={(val)=>{
                            if(val === null){
                                return
                            }
                            setDate(val)}}
                    />
                </NavBar>
            </div>
            <div style={{ flex: 1 }}>
                <Playlist playlist={playlist} selected={currentTrack} onSelectedChange={handleSelectedChange} onRefresh={handleDataChange} />
            </div>
            <AudioPlayer
                src={playlist[currentTrack].src}
                showSkipControls
                volume={0.1}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
                autoPlay={false}
                onPlay={_ => console.log("onplay")}
                autoPlayAfterSrcChange={false}
            />
        </>)
}

export default Home;