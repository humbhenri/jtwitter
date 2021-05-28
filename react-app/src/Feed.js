import React, { useState, useEffect } from 'react';
import { getPosts } from './API';
import './Feed.css';
import Post from './Post';
import TweetBox from './TweetBox';
import FlipMove from 'react-flip-move';

export default function Feed() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then((allPosts) => {
            console.log(allPosts);
            setPosts(allPosts);
        });
    }, []);
    return (
        <div className="feed">
            <div className="feed__header">
                <h2>Home</h2>
            </div>
            <TweetBox setPosts={setPosts} />
            <FlipMove>
                {posts.map((post) => (
                    <Post {...post} key={post.id} />
                ))}
            </FlipMove>
        </div>
    );
}
