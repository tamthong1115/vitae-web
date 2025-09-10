'use client';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { FaRegCommentAlt } from 'react-icons/fa';
import { FaRegHeart } from 'react-icons/fa6';
import { IoShareSocialSharp } from 'react-icons/io5';
import { Separator } from '@/components/ui/separator';
import { useTranslations } from 'next-intl';

const data = [
  {
    id: 1,
    image_url: '/avatar-80-07.jpg',
    username: 'User 1',
    time: '1:00 2025-09-07',
    description: 'What the *** is this!?',
    likes: '39k',
    comments: '12k',
    shares: '103k',
  },
  {
    id: 3,
    image_url: '/avatar-80-07.jpg',
    username: 'User 1',
    time: '13:00 2025-09-06',
    description: 'welcome to my website!',
    likes: '3k',
    comments: '2k',
    shares: '10k',
  },
  {
    id: 3,
    image_url: '/avatar-80-07.jpg',
    username: 'User 1',
    time: '5:00 2025-09-05',
    description: 'lovely day!',
    likes: '9k',
    comments: '2k',
    shares: '3k',
  },
];

const HomePage = () => {
  const t = useTranslations('home_page');

  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-10 p-10">
      {data.map((item) => (
        <Card className={'w-[80%]'} key={item.id}>
          <CardHeader>
            <CardTitle>
              <div className={'flex flex-row justify-start items-center gap-2'}>
                <Avatar>
                  <AvatarImage src={item.image_url} alt="Avatar" />
                  <AvatarFallback>KN</AvatarFallback>
                </Avatar>
                <span className={'text-sm'}>
                  <p>{item.username}</p>
                  <p>{item.time}</p>
                </span>
              </div>
            </CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="w-full h-full flex flex-row justify-start items-center gap-2">
              <div className={'w-1/2 h-96 bg-gray-100'}></div>
              <div
                className={
                  'w-1/2 h-96 flex flex-col justify-start items-center gap-2'
                }
              >
                <div className={'w-full h-1/2 bg-gray-100'}></div>
                <div className={'w-full h-1/2 bg-gray-100'}></div>
              </div>
            </div>
          </CardContent>
          <Separator />
          <CardFooter>
            <div
              className={
                'w-full h-fit flex flex-row justify-between items-center gap-2'
              }
            >
              <Button variant={'ghost'} className={'hover:cursor-pointer'}>
                {item.likes}
                <FaRegHeart />
                {t('likes')}
              </Button>
              <Button variant={'ghost'} className={'hover:cursor-pointer'}>
                {item.comments}
                <FaRegCommentAlt />
                {t('comments')}
              </Button>
              <Button variant={'ghost'} className={'hover:cursor-pointer'}>
                {item.shares}
                <IoShareSocialSharp />
                {t('share')}
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default HomePage;
