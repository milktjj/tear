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
                {playlist.map((item, index) => (
                    <List.Item className={index == selected ? 'selectedItem' : 'normalItem'} onClick={() => { onSelectedChange(index); }} key={index}>{item.t}</List.Item>
                ))}
            </List>
        </PullToRefresh>
    )
}
export default Playlist
