'use client';

import { FaApple } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button, buttonVariants } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import GoogleLoginButton from '@/app/[locale]/(auth)/auth/_components/GoogleLoginButton';
import { ToastOnQuery } from '@/app/_components/ToastOnQuery';
import { Suspense } from 'react';

export default function UserLoginPage() {
  const t = useTranslations('login');

  return (
    <div className="w-full h-full flex flex-row justify-center items-center gap-10">
      <div className="w-[40%] shadow-lg drop-shadow-2xl rounded-xl">
        <img src="/p_login.png" alt="logo" className="w-full rounded-xl" />
      </div>
      <Suspense>
        <ToastOnQuery
          param="error"
          map={{
            signin: {
              type: 'error',
              title: t('error.title'),
              description: t('error.desc'),
            },
          }}
        />
      </Suspense>
      <div className="w-[40%] h-fit flex flex-col justify-start items-center gap-2">
        <Card className={'w-full'}>
          <CardHeader>
            <CardTitle className={'text-[var(--primary)]'}>
              {t('login')}
            </CardTitle>
            <CardDescription>{t('welcome')}</CardDescription>
          </CardHeader>
          <CardContent>
            <Formik
              initialValues={{
                email: '',
                password: '',
              }}
              enableReinitialize={true}
              validationSchema={Yup.object({
                email: Yup.string()
                  .email(t('email_invalid'))
                  .required(t('email_required')),
                password: Yup.string()
                  .min(6, t('password_min'))
                  .required(t('password_required')),
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
                      <Label
                        htmlFor="email"
                        className={
                          'origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
                        }
                      >
                        <span className={'bg-background inline-flex px-2'}>
                          {t('email')}
                        </span>
                      </Label>
                      <Input
                        id={'email'}
                        name={'email'}
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
                          if (errors.email) {
                            e.target.setCustomValidity(errors.email); // gắn lỗi của Formik
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>
                    <div className={'w-full group relative'}>
                      <Label
                        htmlFor="password"
                        className={
                          'origin-start text-muted-foreground/70 group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-1 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium'
                        }
                      >
                        <span className="bg-background inline-flex px-2">
                          {t('password')}
                        </span>
                      </Label>
                      <Input
                        id={'password'}
                        name={'password'}
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
                          if (errors.password) {
                            e.target.setCustomValidity(errors.password); // gắn lỗi của Formik
                          } else {
                            e.target.setCustomValidity('');
                          }
                        }}
                      />
                    </div>

                    <div className="w-full h-fit p-2 grid grid-cols-2 grid-rows-1 gap-2">
                      <Link
                        href={'/user/register'}
                        className={buttonVariants({ variant: 'ghost' })}
                      >
                        {t('register')}
                      </Link>
                      <Button
                        variant={'default'}
                        type="submit"
                        className={'cursor-pointer'}
                      >
                        {t('login')}
                      </Button>
                    </div>
                  </form>
                );
              }}
            </Formik>
            <div
              className={
                'w-full flex flex-row justify-center items-center gap-2 text-sm'
              }
            >
              <Link href={'/'}>Quên mật khẩu?</Link>
            </div>
          </CardContent>
          <CardFooter
            className={'w-full flex flex-col justify-center items-center gap-2'}
          >
            <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
              <span className="bg-background text-muted-foreground relative z-10 px-2">
                {t('others_way')}
              </span>
            </div>
            <div className="w-full h-fit m-2 p-2 shadow-lg rounded-lg grid md:grid-cols-1 md:grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 gap-2">
              <GoogleLoginButton />
              <Link
                href={'/'}
                className={buttonVariants({ variant: 'outline' })}
              >
                <div className="w-fit">
                  <FaApple size={40} color={'var(--primary)'} />
                </div>
                <p className="w-fit text-left">{t('login_apple')}</p>
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
