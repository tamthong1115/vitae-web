'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ModeToogle } from '@/components/custom-ui/mode-toogle';
import { SelectLanguage } from '@/components/custom-ui/select-language';
import { buttonVariants } from '@/components/ui/button';
import { BsHouse } from 'react-icons/bs';

export default function UserLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const t = useTranslations('layout');

  return (
    <div className="w-full h-screen flex flex-col items-center justify-start">
      <div className="flex flex-row items-center justify-between gap-2 w-full h-fit py-2 px-4 border-b-2 border-b-[var(--primary)] mb-5">
        <div className="flex-1 flex flex-row justify-start items-center gap-2">
          <img
            src="/p_logo.png"
            alt="logo"
            className="w-20 h-20 shadow-lg rounded-lg"
          />
          <p className="font-bold text-[var(--primary)]">{t('slogan')}</p>
        </div>
        <div className="w-fit flex-1 flex flex-row justify-end items-center gap-2">
          <Link href={'/'} className={buttonVariants({ variant: 'outline' })}>
            <BsHouse color={'var(--primary)'} size={20} />
          </Link>
          <ModeToogle />
          <SelectLanguage />
        </div>
      </div>
      <div className="w-full h-full mb-5">{children}</div>
      <div
        className={
          'w-full h-fit border-t-2 border-[var(--primary)] py-2 px-4 grid grid-cols-4 grid-rows-1 items-start gap-2'
        }
      >
        <div className={'flex flex-col justify-center items-center gap-2'}>
          <p className={'font-bold text-[var(--primary)] text-lg'}>
            {t('policy_title')}
          </p>
          <Link href={'/'}>{t('policy_privacy')}</Link>
          <Link href={'/'}>{t('policy_legal')}</Link>
          <Link href={'/'}>{t('postings')}</Link>
          <Link href={'/'}>{t('community')}</Link>
        </div>

        <div className={'flex flex-col justify-center items-center gap-2'}>
          <p className={'font-bold text-[var(--primary)] text-lg'}>
            {t('products_support')}
          </p>
          <Link href={'/'}>{t('product_questions')}</Link>
          <Link href={'/'}>{t('account_support')}</Link>
          <Link href={'/'}>{t('complaints')}</Link>
        </div>

        <div className={'flex flex-col justify-center items-center gap-2'}>
          <p className={'font-bold text-[var(--primary)] text-lg'}>
            {t('general_guidelines')}
          </p>
          <Link href={'/'}>{t('community')}</Link>
          <Link href={'/'}>{t('parties_responsibilities')}</Link>
        </div>

        <div className={'flex flex-col justify-center items-center gap-2'}>
          <p className={'font-bold text-[var(--primary)] text-lg'}>
            {t('about_us')}
          </p>
          <Link href={'/'}>{t('about_us')}</Link>
          <Link href={'/'}>{t('copyright')}</Link>
        </div>
      </div>
    </div>
  );
}
