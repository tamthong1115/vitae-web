'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export default function UserLoginPage() {
  const t = useTranslations('register');

  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-10">
      <div className="w-[40%] shadow-lg drop-shadow-2xl rounded-xl">
        <img src="/p_login.png" alt="logo" className="w-full rounded-xl" />
      </div>

      <div className="w-[40%] h-fit flex flex-col justify-start items-center gap-2">
        <Card className={'w-full'}>
          <CardHeader>
            <CardTitle className={'text-[var(--primary)]'}>
              {t('register')}
            </CardTitle>
            <CardDescription>{t('welcome')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                account_name: '',
                email: '',
                password: '',
                confirm_password: '',
                number_phone: '',
              }}
              enableReinitialize={true}
              validationSchema={Yup.object({
                account_name: Yup.string()
                  .min(6, t('account_name_min'))
                  .required(t('account_name_required')),
                email: Yup.string()
                  .email(t('email_invalid'))
                  .required(t('email_required')),
                password: Yup.string()
                  .min(6, t('password_min'))
                  .required(t('password_required')),
                confirm_password: Yup.string()
                  .oneOf([Yup.ref('password')], t('password_not_match'))
                  .required(t('confirm_password_required')),
                number_phone: Yup.string()
                  .length(10, t('number_phone_invalid'))
                  .required(t('number_phone_required')),
              })}
              validateOnBlur={true}
              onSubmit={async (values) => {}}
            >
              {({ handleChange, handleBlur, handleSubmit, errors }) => {
                return (
                  <form
                    className="h-fit m-2 p-2 shadow-lg rounded-xl flex flex-col justify-center items-center gap-3"
                    onSubmit={handleSubmit}
                  >
                    <div className={'w-full group relative'}>
                      <label
                        htmlFor={'account_name'}
                        className={
                          'origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
                        }
                      >
                        <span className={'bg-background inline-flex px-2'}>
                          {t('account_name')}
                        </span>
                      </label>
                      <Input
                        id={'account_name'}
                        name={'account_name'}
                        className="w-full p-2"
                        type="text"
                        placeholder=" "
                        required
                        onChange={(e) => {
                          handleChange(e);
                          e.target.setCustomValidity(''); // reset lỗi cũ
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                          if (errors.account_name) {
                            e.target.setCustomValidity(errors.account_name); // gắn lỗi của Formik
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>
                    <div className={'w-full group relative'}>
                      <label
                        htmlFor="email"
                        className={
                          'origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
                        }
                      >
                        <span className={'bg-background inline-flex px-2'}>
                          {t('email')}
                        </span>
                      </label>
                      <Input
                        id={'email'}
                        name={'email'}
                        className="w-full p-2"
                        type="email"
                        placeholder=" "
                        required
                        onChange={(e) => {
                          handleChange(e);
                          e.target.setCustomValidity(''); // reset lỗi cũ
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                          if (errors.email) {
                            e.target.setCustomValidity(errors.email); // gắn lỗi của Formik
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>

                    <div className={'w-full group relative'}>
                      <label
                        htmlFor="password"
                        className={
                          'origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
                        }
                      >
                        <span className={'bg-background inline-flex px-2'}>
                          {t('password')}
                        </span>
                      </label>
                      <Input
                        id={'password'}
                        name={'password'}
                        className="w-full p-0 outline-none"
                        type="password"
                        placeholder=" "
                        required
                        onChange={(e) => {
                          handleChange(e);
                          e.target.setCustomValidity(''); // reset lỗi cũ
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                          if (errors.password) {
                            e.target.setCustomValidity(errors.password); // gắn lỗi của Formik
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>
                    <div className={'w-full group relative'}>
                      <label
                        htmlFor="confirm_password"
                        className={
                          'origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
                        }
                      >
                        <span className={'bg-background inline-flex px-2'}>
                          {t('confirm_password')}
                        </span>
                      </label>
                      <Input
                        id={'confirm_password'}
                        name={'confirm_password'}
                        className="w-full p-2"
                        type="password"
                        placeholder=" "
                        required
                        onChange={(e) => {
                          handleChange(e);
                          e.target.setCustomValidity(''); // reset lỗi cũ
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                          if (errors.confirm_password) {
                            e.target.setCustomValidity(errors.confirm_password); // gắn lỗi của Formik
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>
                    <div className={'w-full group relative'}>
                      <label
                        htmlFor="number_phone"
                        className={
                          'origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
                        }
                      >
                        <span className={'bg-background inline-flex px-2'}>
                          {t('number_phone')}
                        </span>
                      </label>
                      <Input
                        id={'number_phone'}
                        name="number_phone"
                        className="w-full p-2"
                        type="text"
                        placeholder=" "
                        required
                        onChange={(e) => {
                          handleChange(e);
                          e.target.setCustomValidity(''); // reset lỗi cũ
                        }}
                        onBlur={(e) => {
                          handleBlur(e);
                          if (errors.number_phone) {
                            e.target.setCustomValidity(errors.number_phone); // gắn lỗi của Formik
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>

                    <div className="w-full h-fit p-2 grid grid-cols-2 grid-rows-1 gap-2">
                      <Link
                        href={'/user/login'}
                        className={buttonVariants({ variant: 'ghost' })}
                      >
                        {t('login')}
                      </Link>
                      <Button
                        variant={'default'}
                        type="submit"
                        className={'cursor-pointer'}
                      >
                        {t('register')}
                      </Button>
                    </div>
                  </form>
                );
              }}
            </Formik>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
