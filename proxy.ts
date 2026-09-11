import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { type NextRequest } from 'next/server'
import { updateSession } from '@/utils/supabase/middleware'

const intlMiddleware = createMiddleware(routing)

export async function proxy(request: NextRequest) {
  const response = intlMiddleware(request)
  return updateSession(request, response)
}

export const config = {
  matcher: ['/', '/(id|en|ko)/:path*'],
}
