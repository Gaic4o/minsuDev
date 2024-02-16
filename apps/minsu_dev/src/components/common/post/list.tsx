import { FC } from 'react';
import Tag from "@/components/common/tag";
import Card from "@/components/common/post/card";

// TODO: It is used temporarily with the text included in the component and will be replaced by actual content in the future. Content update is needed.
const PostList: FC = () => {

    return (
        <>
            <div className="flex flex-wrap w-full justify-center mob:w-[750px] mt-3">
                <Tag name={'Component'} />
                <Tag name={'Javascript'} />
                <Tag name={'Typescript'} />
                <Tag name={'Component'} />
                <Tag name={'Javascript'} />
                <Tag name={'Typescript'} />
                <Tag name={'Component'} />
                <Tag name={'Javascript'} />
                <Tag name={'Typescript'} />
            </div>
            <div className="mt-1">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    )
}

export default PostList;
