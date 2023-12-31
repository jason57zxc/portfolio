import createMiddleware from 'next-intl/middleware';
import { locales } from '@/lib/data'

export default createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // Used when no locale matches
    defaultLocale: locales[0],

    localePrefix: 'as-needed'
});

export const config = {
    // Match only internationalized pathnames
    //matcher: ['/', '/(zh-TW|en)/:path*']
    matcher: [
        // Match all pathnames except for
        // - … if they start with `/api`, `/_next` or `/_vercel`
        // - … the ones containing a dot (e.g. `favicon.ico`)
        '/((?!api|_next|_vercel|.*\\..*).*)',
    ]
};