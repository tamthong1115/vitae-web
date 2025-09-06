'use client';
import React from 'react';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/custom-ui/app-sidebar';
import { SiteHeader } from '@/components/custom-ui/site-header';
import { ContactSidebar } from '@/components/custom-ui/contact-sidebar';

export default function HomeLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full h-screen">
      <div className="[--header-height:calc(--spacing(14))]">
        <SidebarProvider className={'flex flex-col'}>
          <SiteHeader />
          <div className={'flex flex-1'}>
            <AppSidebar />
            <SidebarInset>{children}</SidebarInset>
            <ContactSidebar />
          </div>
        </SidebarProvider>
      </div>
    </div>
  );
}
