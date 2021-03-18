import { GetServerSideProps } from 'next'

export const protectRoute = (userType?: string): GetServerSideProps<{ foo: string }> => async ({
  req,
  res,
}) => {
  const foo = 'bar'

  if (!foo) {
    return {
      props: {},
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }
  return { props: { foo } }
}
