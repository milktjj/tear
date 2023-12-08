import React from 'react'
import { PullToRefresh, List } from 'antd-mobile'
// import { sleep } from 'antd-mobile/es/utils/sleep'
import '../assets/css/playitem.less'

export interface Playitem {
    "t": number
    "l": boolean
}

interface PlaylistProps {
    playlist: Playitem[];
    selected: number;
    onSelectedChange: (newSelected: number) => void;
    onRefresh: () => void;
}


const Playlist: React.FC<PlaylistProps> = ({ playlist, selected, onSelectedChange, onRefresh }) => {
    console.log(playlist)
    return (
        <PullToRefresh
            onRefresh={async () => {
                // await sleep(1000)
                onRefresh()
            }}
        >
            <List style={{ height: '70vh', overflow: 'auto' }}>
                {playlist.map((item, index) => {
                    const getClassName = () => {
                        let className = "";

                        if (index == selected) {
                            className += "selectedItem";
                        } else {
                            className += " normalItem"
                        }

                        if (item?.l) {
                            className += "listened";
                        } else {
                            className += " nonlisten";
                        }

                        return className;
                    };
                    function convertTimestampToTimeString(timestamp: any) {
                        const date = new Date(timestamp * 1000); // 将秒转换为毫秒
                        const hours = date.getHours().toString().padStart(2, '0');
                        const minutes = date.getMinutes().toString().padStart(2, '0');
                        const seconds = date.getSeconds().toString().padStart(2, '0');
                        return `${hours}:${minutes}:${seconds}`;
                    }
                    return <List.Item className={getClassName()} onClick={() => { onSelectedChange(index); }} key={index}>{convertTimestampToTimeString(item.t)}</List.Item>
                })}
            </List>
        </PullToRefresh >
    )
}
export default Playlist
