import React from 'react';
import Post from './Post/Post';
import styles from './styles.module.css'

const Posts = ()=>{
    return (
        <>
            <h1>Posts</h1>
            <Post />
            <Post />
        </>
       
    );
};

export default Posts;