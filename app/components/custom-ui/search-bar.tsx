'use client';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Input } from '@/components/ui/input';
import { useTranslations } from 'next-intl';
import { ArrowRightIcon, SearchIcon } from 'lucide-react';

export const SearchBar = () => {
  const t = useTranslations('home_layout');

  return (
    <div className={'w-[50%] p-2'}>
      <Formik
        initialValues={{
          keyword: '',
        }}
        enableReinitialize={true}
        validationSchema={Yup.object({
          keyword: Yup.string().required(t('search_required')),
        })}
        validateOnBlur={true}
        onSubmit={async (values) => {}}
      >
        {({ handleChange, handleBlur, handleSubmit, errors }) => {
          return (
            <form
              className="h-fit m-2 p-2 shadow-lg rounded-xl :not-first:mt-2"
              onSubmit={handleSubmit}
            >
              <div className="relative">
                <Input
                  id={'search'}
                  name={'search'}
                  className="peer ps-9 pe-9"
                  type="text"
                  placeholder={t('search_placeholder')}
                  required
                  onChange={(e) => {
                    handleChange(e);
                    e.target.setCustomValidity(''); // reset lỗi cũ
                  }}
                  onBlur={(e) => {
                    handleBlur(e);
                    if (errors.keyword) {
                      e.target.setCustomValidity(errors.keyword); // gắn lỗi của Formik
                    } else {
                      e.target.setCustomValidity('');
                    }
                  }}
                />
                <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
                  <SearchIcon size={16} />
                </div>
                <button
                  className="text-muted-foreground/80 hover:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md transition-[color,box-shadow] outline-none focus:z-10 focus-visible:ring-[3px] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
                  aria-label="Submit search"
                  type="submit"
                >
                  <ArrowRightIcon size={16} aria-hidden="true" />
                </button>
              </div>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
