"use client"
import * as React from "react"
import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuRadioGroup, DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {usePathname, useRouter} from "next/navigation";
import {useLocale} from "next-intl";

export const SelectLanguage = ({t}: { t: (key: string) => string }) => {
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();

    const changeLang = (event: string) => {
        const lang = event
        console.log(lang)
        const withoutLocale = pathname.replace(/^\/(vi|en|jp)(\/|$)/, "/");
        router.push(`/${lang}${withoutLocale}`);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={'text-[var(--primary)]'}>{t("language")}</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuSeparator/>
                <DropdownMenuRadioGroup value={locale} onValueChange={(val) => changeLang(val)}>
                    <DropdownMenuRadioItem
                        value={'vi'}
                    >
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/vietnam.png"
                                 alt="vietnam"/>
                            <p>Tiếng Việt</p>
                        </div>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                        value={'en'}
                    >
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img width="48" height="48" src="https://img.icons8.com/color/48/great-britain.png"
                                 alt="great-britain"/>
                            <p>English</p>
                        </div>
                    </DropdownMenuRadioItem>
                    <DropdownMenuRadioItem
                        value={'jp'}
                    >
                        <div className="flex flex-row justify-center items-center gap-2">
                            <img width="48" height="48" src="https://img.icons8.com/?size=100&id=22435&format=png&color=000000"
                                 alt="japan"/>
                            <p>日本語</p>
                        </div>
                    </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}