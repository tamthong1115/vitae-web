import React from 'react';
import { SearchBar } from '@/components/custom-ui/search-bar';
import { BsPostcard } from 'react-icons/bs';
import { MdOutlinePeople } from 'react-icons/md';
import { PiVideoFill } from 'react-icons/pi';
import { FaGamepad } from 'react-icons/fa6';
import { ModeToogle } from '@/components/custom-ui/mode-toogle';
import { SelectLanguage } from '@/components/custom-ui/select-language';
import { DropdownMenuProfile } from '@/components/custom-ui/dropdown-menu-profile';
import { Separator } from '@/components/ui/separator';

export const SiteHeader = () => {
  return (
    <>
      {/* header */}
      <header className="bg-[var(--background)] sticky top-0 z-50 w-full h-20 flex items-center">
        <div className="flex h-[var(--header-height-c)] w-full items-center gap-2 px-2 grid grid-cols-3 grid-rows-1">
          {/*search bar and logo*/}
          <div className="w-full h-full flex flex-row justify-start items-center gap-1">
            <img
              src="/p_logo.png"
              alt="logo"
              className="w-15 h-15 shadow-lg rounded-lg"
            />
            <SearchBar />
          </div>
          {/*navigator button*/}
          <div
            className={
              'w-full h-full flex flex-row justify-center items-center gap-2'
            }
          >
            <ul
              className={
                'w-full h-full flex flex-row justify-center items-center gap-2'
              }
            >
              <li
                className={
                  'h-full flex-1 flex justify-center items-center hover:bg-[var(--hover-background)] hover:border-b-2 hover:border-[var(--primary)] hover:cursor-pointer'
                }
              >
                <BsPostcard color={'var(--primary)'} size={30} />
              </li>
              <li
                className={
                  'h-full flex-1 flex justify-center items-center hover:bg-[var(--hover-background)] hover:border-b-2 hover:border-[var(--primary)] hover:cursor-pointer'
                }
              >
                <MdOutlinePeople color={'var(--primary)'} size={30} />
              </li>
              <li
                className={
                  'h-full flex-1 flex justify-center items-center hover:bg-[var(--hover-background)] hover:border-b-2 hover:border-[var(--primary)] hover:cursor-pointer'
                }
              >
                <PiVideoFill color={'var(--primary)'} size={30} />
              </li>
              <li
                className={
                  'h-full flex-1 flex justify-center items-center hover:bg-[var(--hover-background)] hover:border-b-2 hover:border-[var(--primary)] hover:cursor-pointer'
                }
              >
                <FaGamepad color={'var(--primary)'} size={30} />
              </li>
            </ul>
          </div>
          {/*setting and profile*/}
          <div
            className={'w-full flex flex-row justify-end items-center gap-2'}
          >
            <div className="w-fit flex flex-col-reverse md:flex-row justify-center items-center gap-2">
              <ModeToogle />
              <SelectLanguage />
            </div>
            <DropdownMenuProfile />
          </div>
        </div>
      </header>
      <Separator />
    </>
  );
};
