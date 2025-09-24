'use client';

import { Button } from '@/components/ui/button';
import { env } from '@/lib/env';
import { toast } from 'sonner';
import { FaGooglePlusG } from 'react-icons/fa6';
import { useTranslations } from 'next-intl';

export default function GoogleLoginButton() {
  const apiBase = env.NEXT_PUBLIC_API_BASE_URL;
  const loginPath = env.NEXT_PUBLIC_BACKEND_GOOGLE_LOGIN_PATH;

  const isDisabled = !apiBase || !loginPath;

  const t = useTranslations('login');

  const handleClick = () => {
    if (isDisabled) return;
    try {
      const url = new URL(loginPath, apiBase);
      window.location.href = url.toString();
    } catch {
      toast.error('There was an error starting Google login');
    }
  };

  return (
    <Button variant="outline" onClick={handleClick} disabled={isDisabled}>
      <div className="w-fit">
        <FaGooglePlusG size={30} color={'var(--primary)'} />
      </div>
      <p className="w-fit text-left">{t('login_google')}</p>
    </Button>
  );
}
