import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@material-ui/icons/Twitter'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import PersonIcon from '@material-ui/icons/PersonOutline';
import SidebarOption from './SidebarOption'
import { Button } from '@material-ui/core'
import ExitToAppOutlined from '@material-ui/icons/ExitToAppOutlined';

export default function Sidebar({ setToken }) {
    const logout = () => {
        setToken(null)
    };
    return (
        <div className="sidebar">
            <TwitterIcon className="sidebar__twitterIcon"/>
            <SidebarOption Icon={HomeIcon} text="Home" active="true"/>
            <SidebarOption Icon={SearchIcon} text="Search"/>
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications"/>
            <SidebarOption Icon={PersonIcon} text="Profile" />
            <Button variant="outlined" className="sidebar__tweet" fullWidth> Tweet </Button>
            <div className="sidebar__logout">
                <Button variant="outlined" className="sidebar__logoutButton" fullWidth startIcon={<ExitToAppOutlined />} onClick={logout}>
                    Logout
                </Button>
            </div>
        </div>
    )
}
