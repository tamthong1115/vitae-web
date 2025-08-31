"use client";

import {FaApple, FaGooglePlusG} from "react-icons/fa6";
import {useTranslations} from "next-intl";
import Link from "next/link";
import * as Yup from "yup";
import {Formik} from "formik";
import {TextField} from "@mui/material";

export default function UserLoginPage() {
    const t = useTranslations("register");

    return (
        <div className="w-full h-full flex flex-row justify-center items-center gap-10">
            <div className="w-[40%] shadow-lg drop-shadow-2xl rounded-xl">
                <img src="/p_login.png" alt="logo" className="w-full rounded-xl"/>
            </div>

            <div className="w-[40%] h-fit flex flex-col justify-start items-center gap-2">
                <p className={'text-[var(--primary)]'}>{t("welcome")}</p>

                <Formik
                    initialValues={{
                        account_name: '',
                        email: '',
                        password: '',
                        confirm_password: '',
                        number_phone: ''
                    }}
                    enableReinitialize={true}
                    validationSchema={Yup.object({
                        account_name: Yup.string()
                            .min(6, t("account_name_min"))
                            .required(t("account_name_required")),
                        email: Yup.string()
                            .email(t("email_invalid"))
                            .required(t("email_required")),
                        password: Yup.string()
                            .min(6, t("password_min"))
                            .required(t("password_required")),
                        confirm_password: Yup.string()
                            .oneOf([Yup.ref("password")], t("password_not_match"))
                            .required(t("confirm_password_required")),
                        number_phone: Yup.string()
                            .length(10, t("number_phone_invalid"))
                            .required(t("number_phone_required")),
                    })}
                    validateOnBlur={true}
                    onSubmit={async (values) => {

                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          setFieldValue,
                          errors,
                          touched,
                          resetForm,
                      }) => {
                        return (
                            <form className="w-[70%] h-fit m-2 p-2 shadow-lg rounded-xl flex flex-col justify-center items-center gap-3"
                                  onSubmit={handleSubmit}>
                                    <TextField
                                        variant={"outlined"}
                                        name={'account_name'}
                                        className="w-full p-0 outline-none"
                                        type="text"
                                        label={t("account_name")}
                                        required
                                        onChange={(e) => {
                                            handleChange(e);
                                            e.target.setCustomValidity(""); // reset lỗi cũ
                                        }}
                                        onBlur={(e) => {
                                            handleBlur(e);
                                            if (errors.account_name) {
                                                e.target.setCustomValidity(errors.account_name); // gắn lỗi của Formik
                                            } else {
                                                e.target.setCustomValidity("");
                                            }
                                        }}
                                    />

                                    <TextField
                                        variant={"outlined"}
                                        name={'email'}
                                        className="w-full p-0 outline-none"
                                        type="email"
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
                                        variant={"outlined"}
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

                                    <TextField
                                        variant={'outlined'}
                                        name={'confirm_password'}
                                        className="w-full p-0 outline-none"
                                        type="password"
                                        label={t("confirm_password")}
                                        required
                                        onChange={(e) => {
                                            handleChange(e);
                                            e.target.setCustomValidity(""); // reset lỗi cũ
                                        }}
                                        onBlur={(e) => {
                                            handleBlur(e);
                                            if (errors.confirm_password) {
                                                e.target.setCustomValidity(errors.confirm_password); // gắn lỗi của Formik
                                            } else {
                                                e.target.setCustomValidity("");
                                            }
                                        }}
                                    />

                                    <TextField
                                        variant={'outlined'}
                                        name="number_phone"
                                        className="w-full p-0 outline-none"
                                        type="text"
                                        label={t("number_phone")}
                                        required
                                        onChange={(e) => {
                                            handleChange(e);
                                            e.target.setCustomValidity(""); // reset lỗi cũ
                                        }}
                                        onBlur={(e) => {
                                            handleBlur(e);
                                            if (errors.number_phone) {
                                                e.target.setCustomValidity(errors.number_phone); // gắn lỗi của Formik
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
                                        <Link href={"/user/login"}>{t("login")}</Link>
                                    </button>
                                    <button
                                        type="submit"
                                        className="bg-[var(--primary)] rounded-xl p-2 text-[var(--primary-foreground)]"
                                    >
                                        {t("register")}
                                    </button>
                                </div>
                            </form>
                        );
                    }}
                </Formik>

            </div>
        </div>
    );
}
