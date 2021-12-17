import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import {Button, Card, CardBody, CardGroup, CardText} from "reactstrap";

interface PostItemProps {
    post: IPost;
    update: (post: IPost) => void;
    remove: (post: IPost) => void;
}

const PostItem: FC<PostItemProps> = ({post, update, remove}) => {

    const handleRemove = (event: React.MouseEvent) => {
        event.stopPropagation()
        remove(post)
    }

    const handleUpdate = (event: React.MouseEvent) => {
        const title = prompt() || ''
        const body = prompt() || ''
        update({...post, title, body})
    }

    return (
        <>
            <CardGroup>
                <Card>
                    <CardBody>
                        <CardText tag="h5">
                            Id: {post.id}
                        </CardText>
                        <CardText
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            Title: {post.title}
                        </CardText>
                        <CardText>
                            Body: {post.body}
                        </CardText>
                        <Button
                            onClick={handleRemove}
                            color="danger"
                        >
                            remove
                        </Button>
                        <Button onClick={handleUpdate} color="primary">
                            update
                        </Button>
                    </CardBody>
                </Card>
            </CardGroup>
        </>
    );
};

export default PostItem