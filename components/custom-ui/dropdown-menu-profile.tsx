import { ChevronDownIcon } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { useTranslations } from 'next-intl';
import { IoMdHelpCircle, IoMdSettings } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { MdFeedback } from 'react-icons/md';
import { IoLogOutOutline } from 'react-icons/io5';
import Link from 'next/link';

export const DropdownMenuProfile = () => {
  const t = useTranslations('home_layout');
  return (
    <div className={'h-fit m-2 p-2 shadow-lg rounded-xl flex flex-row gap-2'}>
      <Link href={'/public'}>
        <Avatar>
          <AvatarImage src="./avatar.jpg" alt="Profile image" />
          <AvatarFallback>KK</AvatarFallback>
        </Avatar>
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className={'cursor-pointer'}>
          <ChevronDownIcon
            size={16}
            className="opacity-60"
            aria-hidden="true"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>{t('my_account')}</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="flex flex-row items-center gap-2">
              <div className={'rounded-full bg-[var(--accent)] p-2'}>
                <CgProfile className={'text-[var(--primary)]'} size={20} />
              </div>
              {t('profile')}
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row items-center gap-2">
              <div className={'rounded-full bg-[var(--accent)] p-2'}>
                <IoMdSettings className={'text-[var(--primary)]'} size={20} />
              </div>
              {t('setting_privacy')}
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row items-center gap-2">
              <div className={'rounded-full bg-[var(--accent)] p-2'}>
                <IoMdHelpCircle className={'text-[var(--primary)]'} size={20} />
              </div>
              {t('support_help')}
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row items-center gap-2">
              <div className={'rounded-full bg-[var(--accent)] p-2'}>
                <MdFeedback className={'text-[var(--primary)]'} size={20} />
              </div>
              {t('feedback')}
            </DropdownMenuItem>
            <DropdownMenuItem className="flex flex-row items-center gap-2">
              <div className={'rounded-full bg-[var(--accent)] p-2'}>
                <IoLogOutOutline
                  className={'text-[var(--primary)]'}
                  size={20}
                />
              </div>
              {t('sign_out')}
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
