"use client";

import {FaApple, FaGooglePlusG} from "react-icons/fa6";
import {useTranslations} from "next-intl";
import Link from "next/link";
import {Formik} from "formik";
import * as Yup from "yup";
import {TextField} from "@mui/material";

export default function UserLoginPage() {
    const t = useTranslations("login");

    return (
        <div className="w-full h-full flex flex-row justify-center items-center gap-10">
            <div className="w-[40%] shadow-lg drop-shadow-2xl rounded-xl">
                <img src="/p_login.png" alt="logo" className="w-full rounded-xl"/>
            </div>

            <div className="w-[40%] h-fit flex flex-col justify-start items-center gap-2">
                <p className={'text-[var(--primary)]'}>{t("welcome")}</p>
                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                    }}
                    enableReinitialize={true}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .email(t("email_invalid"))
                            .required(t("email_required")),
                        password: Yup.string()
                            .min(6, t("password_min"))
                            .required(t("password_required")),
                    })}
                    validateOnBlur={true}
                    onSubmit={async (values) => {

                    }}
                >
                    {({
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          errors,
                      }) => {
                        return (
                            <form className="w-[70%] h-fit m-2 p-2 shadow-lg rounded-xl flex flex-col justify-center items-center gap-3"
                            onSubmit={handleSubmit}>
                                    <TextField
                                        variant={'outlined'}
                                        name={'email'}
                                        className="w-full p-0  placeholder-red-500 placeholder:italic"
                                        type="text"
                                        label={t("email")}
                                        required
                                        onChange={(e) => {
                                            handleChange(e);
                                            e.target.setCustomValidity(""); // reset lỗi cũ
                                        }}
                                        onBlur={(e) => {
                                            handleBlur(e);
                                            if (errors.email) {
                                                e.target.setCustomValidity(errors.email); // gắn lỗi của Formik
                                            } else {
                                                e.target.setCustomValidity("");
                                            }
                                        }}
                                    />

                                    <TextField
                                        variant={'outlined'}
                                        name={'password'}
                                        className="w-full p-0 outline-none"
                                        type="password"
                                        label={t("password")}
                                        required
                                        onChange={(e) => {
                                            handleChange(e);
                                            e.target.setCustomValidity(""); // reset lỗi cũ
                                        }}
                                        onBlur={(e) => {
                                            handleBlur(e);
                                            if (errors.password) {
                                                e.target.setCustomValidity(errors.password); // gắn lỗi của Formik
                                            } else {
                                                e.target.setCustomValidity("");
                                            }
                                        }}
                                    />

                                <div className="w-full h-fit p-2 grid grid-cols-2 grid-rows-1 gap-2">
                                    <button
                                        type="button"
                                        className="border-2 border-[var(--primary)] rounded-xl p-2"
                                    >
                                        <Link href={"/user/register"}>{t("register")}</Link>
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[var(--primary)] rounded-xl p-2 text-[var(--primary-foreground)]"
                                    >
                                        {t("login")}
                                    </button>
                                </div>
                            </form>
                        );
                    }}
                </Formik>

                <p className={'text-[var(--primary)]'}>Hoặc đăng nhập bằng</p>
                <div className="w-[70%] h-fit m-2 p-2 shadow-lg rounded-lg grid grid-cols-2 grid-rows-1 gap-2">
                    <button
                        className="w-full h-fit p-2 my-2 border-2 border-[var(--primary)] rounded-lg flex flex-row justify-between items-center gap-2">
                        <div className="w-[20%]">
                            <FaGooglePlusG size={30} color={"var(--primary)"}/>
                        </div>
                        <p className="w-[80%] text-left">{t("login_google")}</p>
                    </button>
                    <button
                        className="w-full h-fit p-2 my-2 border-2 border-[var(--primary)] rounded-lg flex flex-row justify-between items-center gap-2">
                        <div className="w-[20%]">
                            <FaApple size={30} color={"var(--primary)"}/>
                        </div>
                        <p className="w-[80%] text-left">{t("login_apple")}</p>
                    </button>
                </div>
            </div>
        </div>
    );
}
