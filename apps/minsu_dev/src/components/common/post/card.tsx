import {FC} from 'react';
import Link from 'next/link';
import Image from 'next/image';

// TODO: The text and images in the component are used temporarily and will be replaced with actual content in the future. Content update needed.
const Card: FC = () => {
    return (
        <div className="w-full px-3 pb-7.5 border-b border-[#cecfd3] mob:w-[630px]">
            <Link href={''} passHref>
                <div className="cursor-pointer">
                    <div className="border border-[#e0e0e0] rounded-lg mt-10 relative overflow-hidden w-full"
                         style={{aspectRatio: '1.8 / 1'}}>
                        <Image
                            src={'/test.webp'}
                            layout={'fill'}
                            objectFit={'cover'}
                            alt={'123'}
                        />
                    </div>
                    <div>
                        <h2 className="text-2xl text-black mt-4 mb-2 break-words mob:text-lg">
                            여러 개의 프로젝트 (마이크로 앱) 모여 하나의 앱을 만들기 때문에, 프로젝트는 여러 개가 필요합니다.
                        </h2>
                        <p className="text-sm text-[#999] mt-1.25 mb-0.5 mob:text-xs">
                            2024년 1월 22일
                        </p>
                        <p className="text-[#999] text-lg mt-2.5 mb-5 mob:text-base">
                            모든 프로젝트가 하나의 저장소에 있으므로, 전체 코드베이스의 변경 사항, 업데이트, 그리고 히스토리를 한 곳에서 볼 수 있습니다.
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};


export default Card;
