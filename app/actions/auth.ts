'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function submitPassword(formData: FormData) {
  const entered = formData.get('password') as string
  const correct = process.env.BUSTER_ARCHIVE_PASSWORD

  // Env var not set → treat as wrong password rather than crashing
  if (!correct || entered !== correct) {
    redirect('/buster?error=1')
  }

  const store = await cookies()
  store.set('buster_auth', 'granted', {
    httpOnly: true,
    sameSite: 'lax',   // 'strict' can block mobile Safari on redirect
    path: '/',
    maxAge: 60 * 60 * 24 * 7,
  })
  redirect('/buster/archive')
}

export async function logout() {
  const store = await cookies()
  store.delete('buster_auth')
  redirect('/buster')
}
