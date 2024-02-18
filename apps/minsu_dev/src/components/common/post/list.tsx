import { FC } from 'react';
import Tag from "@/components/common/tag";
import Card from "@/components/common/post/card";

// TODO: It is used temporarily with the text included in the component and will be replaced by actual content in the future. Content update is needed.
const PostList: FC = () => {

    return (
        <>
            <div className="mt-1">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default PostList;
