import { useState } from 'react'
import { PullToRefresh, List } from 'antd-mobile'
import { sleep } from 'antd-mobile/es/utils/sleep'
import '../assets/css/playitem.less'

export interface Playitem {
    "src": string
}

export function Playlist(playlistsrc: Playitem[], selected: number) {
    console.log(playlistsrc)
    const [data, setData] = useState(playlistsrc)
    const [sindex] = useState(selected)
    return (
        <PullToRefresh
            onRefresh={async () => {
                await sleep(1000)
                setData(playlistsrc)
            }}
        >
            <List style={{ maxHeight: '70vh', overflow: 'auto' }}>
                {data.map((item, index) => (
                    <List.Item className={index == sindex ? 'selectedItem' : 'normalItem'} key={index}>{item.src}</List.Item>
                ))}
            </List>
        </PullToRefresh>
    )
}
export default Playlist
