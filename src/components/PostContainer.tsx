import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";
import PostUpdate from "./PostUpdate";


const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    const [updatePost, {}] = postAPI.useUpdatePostMutation()
    const [deletePost, {}] = postAPI.useDeletePostMutation()

    const handleRemove = (post: IPost) => {
        deletePost(post)
    }

    const handleUpdate = (post: IPost) => {
        updatePost(post)
    }

    return (
        <div >

            {isLoading && <h1>Идет загрузка...</h1>}
            {error && <h1>{error}</h1>}

            <div style={{display: 'flex'}}>
                {posts && posts.map(post =>
                    <PostItem
                        key={post.id}
                        post={post}
                        remove={handleRemove}
                        update={handleUpdate}
                    />
                )}
            </div>
            <PostUpdate/>
        </div>
    );
};

export default PostContainer;