import { cookies } from 'next/headers'

const COOKIE_NAME = 'buster_auth'
const COOKIE_VALUE = 'granted'

export async function isAuthenticated(): Promise<boolean> {
  const store = await cookies()
  return store.get(COOKIE_NAME)?.value === COOKIE_VALUE
}

export function getAuthCookieName() {
  return COOKIE_NAME
}

export function getAuthCookieValue() {
  return COOKIE_VALUE
}
