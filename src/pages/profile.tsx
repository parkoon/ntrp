import { InferGetServerSidePropsType } from 'next'
import React, { useEffect, useState } from 'react'

import { protectRoute } from '@Lib/auth'

function Profile({ foo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [something, setSomething] = useState<{ status: boolean; hasExplanation: boolean }>({
    status: false,
    hasExplanation: false,
  })

  useSomething(something)

  useEffect(() => {
    setTimeout(() => {
      setSomething({ status: true, hasExplanation: false })
    }, 2000)

    setTimeout(() => {
      setSomething({ ...something, hasExplanation: false })
    }, 4000)
  }, [])

  return <div>{foo}</div>
}

const useSomething = (something: { status: boolean }) => {
  useEffect(() => {
    console.log('useEffect 1')
  }, [something])

  useEffect(() => {
    console.log('useEffect 2')
  }, [something])
}

export const getServerSideProps = protectRoute('guest')

export default Profile
