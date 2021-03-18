import { InferGetServerSidePropsType } from 'next'
import React from 'react'

import { protectRoute } from '@Lib/auth'

function Profile({ foo }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <div>{foo}</div>
}

export const getServerSideProps = protectRoute('guest')

export default Profile
