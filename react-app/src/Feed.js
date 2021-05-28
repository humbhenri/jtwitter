import React from 'react';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';

export default function Feed() {
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox />
            <Post
                displayName="Humberto Pinheiro"
                userName="humbhenri"
                text="Hello world"
                verified="true"
                avatar="HP"
                image="https://media.giphy.com/media/xTiTntOfEb7Pqw5CLK/giphy.gif"
            />
            <Post
                displayName="Humberto Pinheiro"
                userName="humbhenri"
                text="Feeling good today"
                verified="true"
                avatar="HP"
            />
            <Post
                displayName="Humberto Pinheiro"
                userName="humbhenri"
                text="Back to work"
                verified="true"
                avatar="HP"
                image="https://media.giphy.com/media/f5ehe7RcZPIuFllGOi/giphy.gif"
            />
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
            {/* Post */}
        </div>
    );
}
