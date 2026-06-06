'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function submitPassword(formData: FormData) {
  const entered = formData.get('password') as string
  const correct = process.env.BUSTER_ARCHIVE_PASSWORD

  if (!correct) {
    throw new Error('BUSTER_ARCHIVE_PASSWORD environment variable is not set')
  }

  if (entered === correct) {
    const store = await cookies()
    store.set('buster_auth', 'granted', {
      httpOnly: true,
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    redirect('/buster/archive')
  }

  redirect('/buster?error=1')
}

export async function logout() {
  const store = await cookies()
  store.delete('buster_auth')
  redirect('/buster')
}
