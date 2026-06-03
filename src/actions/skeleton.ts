'use server'

import { cookies } from 'next/headers'

export async function markSkeletonShown() {
  const cookieStore = await cookies()
  cookieStore.set('skeleton_shown', '1', {
    maxAge: 60 * 60 * 24, // 1 dia
    path: '/',
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
  })
}
