import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function CallbackPage({
  searchParams,
}: {
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const cookieStore = cookies();
  const hasAccess = (await cookieStore).get('access_token') !== undefined;

  const rt = searchParams?.returnTo;
  const baseDest =
    typeof rt === 'string' && rt.length > 0 ? decodeURIComponent(rt) : '/home';

  if (hasAccess) {
    const dest = baseDest.includes('?')
      ? `${baseDest}&login=ok`
      : `${baseDest}?login=ok`;
    redirect(dest);
  }

  redirect('/login?error=signin');
}
