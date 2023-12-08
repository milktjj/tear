import React, { useEffect, useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Playlist, { Playitem } from '../components/playlist';
import { Button, CalendarPicker, NavBar } from 'antd-mobile';
import { GetPlaylist, GetSharelink } from '../api/playlist';


const Home: React.FC = () => {
    const [playlist, setPlaylist] = useState<Playitem[]>([])
    const [date, setDate] = useState<Date>(new Date())
    const [currentTrack, setTrackIndex] = React.useState(0)
    const [visible, setVisible] = useState<boolean>(false)
    const [currentLink, setCurrentLink] = useState<string>("")

    useEffect(() => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        GetPlaylist(dateString).then((res: any) => {
            setPlaylist(res)
        }).catch(err => {
            console.log(err)
        })
    }, [date])

    useEffect(() => {
        playlist[currentTrack]?.t && GetSharelink(playlist[currentTrack]?.t).then((res: any) => {
            console.log(res.url)
            setCurrentLink(res?.url)
            // setCurrentLink("https://s3.jcloud.sjtu.edu.cn/331a60d07b0a4ac5b121dba66bf2b863-tjj-canvas-test/account_22/tjj/1700123082.mp3")
            // setCurrentLink("https://s3.jcloud.sjtu.edu.cn/331a60d07b0a4ac5b121dba66bf2b863-tjj-canvas-test/account_22/tjj/1700195987.amr?Signature=VY5RmSoQkQliyY1aZ1jG4OlAp%2Fs%3D&Expires=1700207981&AWSAccessKeyId=b8a5fb0a69c741b5b5a0aa2436cc8302")
        }).catch((error) => {
            console.error(error)
        })
    }, [currentTrack])

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
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        GetPlaylist(dateString).then((res: any) => {
            console.log(res)
            setPlaylist(res)
        }).catch(err => {
            console.log(err)
        })
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
    const handleDateSelectClick = () => {
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
                        onConfirm={(val) => {
                            if (val === null) {
                                return
                            }
                            setDate(val)
                        }}
                    />
                </NavBar>
            </div>
            <div style={{ flex: 1 }}>
                <Playlist playlist={playlist} selected={currentTrack} onSelectedChange={handleSelectedChange} onRefresh={handleDataChange} />
            </div>
            <AudioPlayer
                src={currentLink}
                showSkipControls
                volume={1}
                onClickNext={handleClickNext}
                onClickPrevious={handleClickPre}
                autoPlay={false}
                onPlay={_ => console.log("onplay")}
                autoPlayAfterSrcChange={false}
            />
        </>)
}

export default Home;
