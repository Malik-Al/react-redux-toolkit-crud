import React, {useState} from 'react';
import {postAPI} from "../services/PostService";
import {IPost} from "../models/IPost";


const PostCreate = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(100)
    const [createPost, {}] = postAPI.useCreatePostMutation()
    const [title, setTitle] = useState<string>('')
    const [body, setBody] = useState<string>('')

    const handleCreate = async (e: any) => {
        e.preventDefault();
        const id = Date.now()
        await createPost({id, body, title} as IPost)
        setTitle('')
        setBody('')
    }

    return (
        <div>
            <form
                onSubmit={handleCreate}
            >
                <label>Title add: </label>
                <input
                    type="text"
                    placeholder="title..."
                    name='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <label>Body add: </label>
                <input
                    type="text"
                    placeholder="body..."
                    name='body'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <button type='submit'>create post</button>
            </form>
        </div>
    );
};

export default PostCreate;