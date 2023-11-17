import type { FC } from 'react'
import { TabBar } from 'antd-mobile'
import {
    Route,
    useNavigate,
    useLocation,
    MemoryRouter,
    Routes,
} from 'react-router-dom'
import {
    AppOutline,
    MessageOutline,
    UserOutline,
} from 'antd-mobile-icons'
import './assets/css/app.less'
import Home from './pages/home'

const Bottom: FC = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { pathname } = location

    const setRouteActive = (value: string) => {
        navigate(value)
    }

    const tabs = [
        {
            key: '/home',
            title: '首页',
            icon: <AppOutline />,
        },
        // {
        //     key: '/todo',
        //     title: '待办',
        //     icon: <UnorderedListOutline />,
        // },
        {
            key: '/message',
            title: '消息',
            icon: <MessageOutline />,
        },
        {
            key: '/me',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    return (
        <TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
            {tabs.map(item => (
                <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
            ))}
        </TabBar>
    )
}

export default () => {
    return (
        <MemoryRouter initialEntries={['/home']}>
            <div className="app">
                {/* <div className="top">
                    <NavBar backArrow="">title</NavBar>
                </div> */}
                <div className="body">
                    <Routes>
                        <Route element={<Home />} path='/home' />
                        <Route path='/message' element={<Message />} />
                        <Route path='/me' element={<PersonalCenter />} />
                    </Routes>
                </div>
                <div className="bottom">
                    <Bottom />
                </div>
            </div>
        </MemoryRouter>
    )
}


// function Todo() {
//     return <div>待办</div>
// }
//
//                         <Route path='/todo' element={<Todo />} />
function Message() {
    return <div>消息</div>
}

function PersonalCenter() {
    return <div>我的</div>
}
