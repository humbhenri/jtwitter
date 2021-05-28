import { Button, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { tweet } from './API';
import './TweetBox.css';

export default function TweetBox() {
    const [text, setText] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const sendTweet = async (e) => {
        e.preventDefault();
        await tweet({text, urlImage});
        setText('');
        setUrlImage('');
    };
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar>HP</Avatar>
                    <input
                        type="text"
                        placeholder="What's happening ?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                    />
                </div>
                <div className="tweetBox__inputImg">
                    <input
                        type="text"
                        placeholder="Optional: Post a image url"
                        value={urlImage}
                        onChange={(e) => setUrlImage(e.target.value)}
                    />
                </div>
                <Button className="tweetBox__tweetButton" onClick={sendTweet}>
                    Tweet
                </Button>
            </form>
        </div>
    );
}
