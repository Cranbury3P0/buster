import { isAuthenticated } from '@/lib/auth'
import { redirect } from 'next/navigation'
import PasswordGate from '@/components/PasswordGate'

interface Props {
  searchParams: Promise<{ error?: string }>
}

export default async function BusterPage({ searchParams }: Props) {
  const authed = await isAuthenticated()
  if (authed) {
    redirect('/buster/archive')
  }

  const params = await searchParams
  const hasError = params.error === '1'

  return <PasswordGate error={hasError} />
}
