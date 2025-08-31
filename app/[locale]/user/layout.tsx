"use client";

import React, {useEffect, useState} from "react";
import {FaMoon, FaSun} from "react-icons/fa6";
import {useTranslations, useLocale} from "next-intl";
import {useRouter, usePathname} from "next/navigation";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Link from "next/link";

export default function UserLayoutClient({children}: { children: React.ReactNode }) {
    const [isDark, setIsDark] = useState(false);
    const t = useTranslations("header");
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();

    // Setup theme từ localStorage
    useEffect(() => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
            setIsDark(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.theme = "dark";
            setIsDark(true);
        }
    };

    // Đổi ngôn ngữ
    const changeLang = (event: SelectChangeEvent) => {
        const lang = event.target.value;
        const withoutLocale = pathname.replace(/^\/(vi|en)(\/|$)/, "/");
        router.push(`/${lang}${withoutLocale}`);
    };

    return (
        <div className="w-full h-full flex flex-col items-center justify-center">
            <div
                className="flex flex-row items-center justify-between gap-2 w-full h-fit py-2 px-4 border-b-2 border-b-[var(--primary)] mb-5">
                <div className="flex-1 flex flex-row justify-start items-center gap-2">
                    <img src="/p_logo.png" alt="logo" className="w-20 h-20 shadow-lg rounded-lg"/>
                    <p className="font-bold text-emerald-600">{t("slogan")}</p>
                </div>
                <div className="w-fit flex-1 flex flex-row justify-end items-center gap-2">
                    {/* Nút đổi theme */}
                    <button
                        onClick={toggleTheme}
                        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                            isDark ? "bg-green-600" : "bg-gray-400"
                        }`}
                    >
            <span
                className={`h-5 w-5 flex justify-center items-center transform rounded-full bg-white transition-transform ${
                    isDark ? "translate-x-6" : "translate-x-1"
                }`}
            >
              {isDark ? <FaMoon color={"var(--primary)"}/> : <FaSun color={"var(--primary)"}/>}
            </span>
                    </button>

                    {/* Select đổi ngôn ngữ */}
                    <FormControl size={'medium'} variant={'standard'}>
                        <InputLabel id="demo-simple-select-label">{t("language")}</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            onChange={changeLang}
                            value={locale}
                            label={t("language")}
                            className="rounded h-fit"
                            autoWidth
                            renderValue={(selected) => (
                                <div className="flex flex-row justify-center items-center gap-2">
                                    <img width="48" height="48" src={t("icon")}
                                         alt={selected}/>
                                    <p>{t("label")}</p>
                                </div>
                            )}>
                            <MenuItem value="vi" className="flex flex-row justify-center items-center gap-2">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/vietnam.png"
                                     alt="vietnam"/>
                                <p>Tiếng Việt</p>
                            </MenuItem>
                            <MenuItem value="en" className="flex flex-row justify-center items-center gap-2">
                                <img width="48" height="48" src="https://img.icons8.com/color/48/great-britain.png"
                                     alt="great-britain"/>
                                <p>English</p>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
            </div>
            <div className="w-full h-full mb-5">{children}</div>
            <div className={'w-full h-fit border-t-2 border-[var(--primary)] py-2 px-4 grid grid-cols-4 grid-rows-1 items-start gap-2'}>
                <div className={'flex flex-col justify-center items-center gap-2'}>
                    <p className={'font-bold text-[var(--primary)] text-lg'}>Chính sách</p>
                    <Link href={'/'}>Quyền riêng tư</Link>
                    <Link href={'/'}>Pháp lý</Link>
                    <Link href={'/'}>Nội dung đăng tải</Link>
                    <Link href={'/'}>Cộng đồng</Link>
                </div>
                <div className={'flex flex-col justify-center items-center gap-2'}>
                    <p className={'font-bold text-[var(--primary)] text-lg'}>Sản phẩm và hỗ trợ</p>
                    <Link href={'/'}>Thắc mắc sản phẩm</Link>
                    <Link href={'/'}>Hỗ trợ tài khoản</Link>
                    <Link href={'/'}>Khiếu nại</Link>
                </div>
                <div className={'flex flex-col justify-center items-center gap-2'}>
                    <p className={'font-bold text-[var(--primary)] text-lg'}>Nguyên tắc chung</p>
                    <Link href={'/'}>Cộng đồng</Link>
                    <Link href={'/'}>Trách nhiệm các bên</Link>
                </div>
                <div className={'flex flex-col justify-center items-center gap-2'}>
                    <p className={'font-bold text-[var(--primary)] text-lg'}>Về chúng tôi</p>
                    <Link href={'/'}>Về chúng tôi</Link>
                    <Link href={'/'}>Bản quyền</Link>
                </div>
            </div>
        </div>
    );
}
