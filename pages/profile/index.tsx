import Head from 'next/head'
import type { NextPage } from 'next'
import { __auth } from 'context/AuthProvider'

const Index: NextPage = () => {
  const { currentUser } = __auth()

  return (
    <>
      <Head>
        <title>stkzer | {currentUser.user_name} </title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
    </>
  )
}

export default Index