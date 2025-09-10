import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Settings } from 'lucide-react';
import React from 'react';
import { Separator } from '@/components/ui/separator';
import { MdAccountCircle, MdOutlineOndemandVideo } from 'react-icons/md';
import { BsFillPeopleFill } from 'react-icons/bs';
import { FaClockRotateLeft } from 'react-icons/fa6';
import { FaBookmark } from 'react-icons/fa';
import { RiGroup2Line } from 'react-icons/ri';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const items = [
  {
    title: 'account',
    url: '#',
    icon: MdAccountCircle,
  },
  {
    title: 'friend',
    url: '#',
    icon: BsFillPeopleFill,
  },
  {
    title: 'memory',
    url: '#',
    icon: FaClockRotateLeft,
  },
  {
    title: 'saved',
    url: '#',
    icon: FaBookmark,
  },
  {
    title: 'group',
    url: '#',
    icon: RiGroup2Line,
  },
  {
    title: 'video',
    url: '#',
    icon: MdOutlineOndemandVideo,
  },
  {
    title: 'settings',
    url: '#',
    icon: Settings,
  },
];

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const t = useTranslations('home_layout');
  return (
    <Sidebar
      collapsible="none"
      className="top-[calc(0.25rem*20)] h-[calc(100svh-(0.25rem*20))]! w-40 hidden lg:flex"
      {...props}
    >
      <Separator />
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{t(item.title)}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <Separator />
      </SidebarContent>
      <SidebarFooter>
        <div className="flex flex-row flex-wrap gap-2 text-[12px]">
          <Link href={'#'} className={'hover:underline'}>
            {t('privacy')}
          </Link>
          <Link href={'#'} className={'hover:underline'}>
            {t('term')}
          </Link>
          <Link href={'#'} className={'hover:underline'}>
            {t('advertising')}
          </Link>
          <Link href={'#'} className={'hover:underline'}>
            {t('advertising_selection')}
          </Link>
          <Link href={'#'} className={'hover:underline'}>
            {t('cookie')}
          </Link>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
