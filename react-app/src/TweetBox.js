import { Button, Avatar } from '@material-ui/core'
import React from 'react'
import './TweetBox.css'

export default function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar>HP</Avatar>
                    <input type="text" placeholder="What's happening ?" />
                </div>
                <div className="tweetBox__inputImg">
                    <input type="text" placeholder="Optional: Post a image url" />
                </div>
                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    )
}
