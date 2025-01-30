export const paths = {
  home: '/',
  auth: { signIn: '/auth/sign-in', signUp: '/auth/sign-up', resetPassword: '/auth/reset-password' },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    customers: '/dashboard/customers',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
    school: {
      portal: '/dashboard/school/portal',
      academic: '/dashboard/school/academic',
    },
  },
  errors: { notFound: '/errors/not-found' },
} as const;
