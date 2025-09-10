import * as React from 'react';
import { Plus } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from '@/components/ui/sidebar';
import { useTranslations } from 'next-intl';
import { FaGift } from 'react-icons/fa';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

// This is sample data.
const data = {
  birthday_list: [
    {
      name: 'John Doe',
      birthday: '2015-09-06',
      url: '#',
    },
    {
      name: 'Jane Smith',
      birthday: '2015-09-08',
      url: '#',
    },
  ],
  contact_list: [
    {
      name: 'John Doe',
      img: 'https://via.placeholder.com/150',
      status: 'Online',
      url: '#',
    },
    {
      name: 'Jane Smith',
      img: 'https://via.placeholder.com/150',
      status: 'Offline',
      url: '#',
    },
    {
      name: 'John Doe',
      img: 'https://via.placeholder.com/150',
      status: 'Online',
      url: '#',
    },
    {
      name: 'Jane Smith',
      img: 'https://via.placeholder.com/150',
      status: 'Offline',
      url: '#',
    },
  ],
};

export const ContactSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const t = useTranslations('home_layout');
  return (
    <Sidebar
      collapsible="none"
      className="sticky top-0 h-svh w-50 border-l"
      {...props}
    >
      <SidebarHeader className="border-sidebar-border h-16 border-b"></SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>{t('birthday_title')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.birthday_list.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className={'p-1'}>
                      <FaGift
                        className={'text-[var(--primary)] hidden lg:inline'}
                      />
                      <p className={'p-1'}>
                        {t('birthday_notice')}
                        <span> {item.name}</span>
                      </p>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>{t('contact_title')}</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {data.contact_list.map((item) => (
                <SidebarMenuItem
                  key={item.name}
                  className="flex flex-row gap-2"
                >
                  <div
                    className={
                      'w-full rounded-lg  p-1 flex flex-row items-center gap-2 hover:cursor-pointer hover:bg-[var(--accent)]'
                    }
                  >
                    <div className="relative">
                      <Avatar>
                        <AvatarImage src={item.img} alt={item.name} />
                        <AvatarFallback>FK</AvatarFallback>
                      </Avatar>
                      {item.status === 'Online' ? (
                        <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-[var(--primary)]">
                          <span className="sr-only">{item.status}</span>
                        </span>
                      ) : (
                        <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-[var(--muted-foreground)]">
                          <span className="sr-only">{item.status}</span>
                        </span>
                      )}
                    </div>
                    <a href={item.url}>
                      <span>{item.name}</span>
                    </a>
                  </div>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <Plus />
              <span>New Calendar</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};
