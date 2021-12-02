import ExitToAppOutlined from "@material-ui/icons/ExitToAppOutlined";
import HomeIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PersonIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import Button from "./components/button";
import SidebarDiv from "./sidebar-div";
import SidebarOption from "./SidebarOption";
import TwitterLogo from "./twitter";

export default function Sidebar({ setToken }) {
    const logout = () => {
        setToken(null);
    };
    return (
        <SidebarDiv>
            <TwitterLogo />
            <SidebarOption Icon={HomeIcon} text="Home" active="true" />
            <SidebarOption Icon={SearchIcon} text="Search" />
            <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
            <SidebarOption Icon={PersonIcon} text="Profile" />
            <Button primary>Tweet</Button>
            <div style={{ marginTop: "auto", marginBottom: "20px" }}>
                <Button onClick={logout}>
                    <div style={{ display: "flex" }}>
                        <ExitToAppOutlined /> Logout
                    </div>
                </Button>
            </div>
        </SidebarDiv>
    );
}
