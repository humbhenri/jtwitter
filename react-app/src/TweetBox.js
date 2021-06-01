import { Button, Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { getPosts, tweet } from './API';
import './TweetBox.css';

export default function TweetBox({ setPosts }) {
    const [text, setText] = useState('');
    const [urlImage, setUrlImage] = useState('');
    const sendTweet = async (e) => {
        e.preventDefault();
        await tweet({text, urlImage});
        const posts = await getPosts();
        setPosts(posts);
        setText('');
        setUrlImage('');
    };
    return (
        <div className="tweetBox">
            <form onSubmit={sendTweet}>
                <div className="tweetBox__input">
                    <Avatar>HP</Avatar>
                    <input
                        type="text"
                        placeholder="What's happening ?"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        required
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
                <Button type="submit" className="tweetBox__tweetButton">
                    Tweet
                </Button>
            </form>
        </div>
    );
}
