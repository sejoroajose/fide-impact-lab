export const mainNavigation = [
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Programs',
    href: '/programs',
    children: [
      { label: 'Chess Education', href: '/programs/chess-education' },
      { label: 'Social Impact', href: '/programs/social-impact' },
      { label: 'Youth Development', href: '/programs/youth' },
    ],
  },
  {
    label: 'Resources',
    href: '/resources',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
] as const;

export const dashboardNavigation = {
  admin: [
    { label: 'Dashboard', href: '/admin', icon: 'dashboard' },
    { label: 'Users', href: '/admin/users', icon: 'users' },
    { label: 'Programs', href: '/admin/programs', icon: 'programs' },
    { label: 'Analytics', href: '/admin/analytics', icon: 'analytics' },
  ],
  learner: [
    { label: 'My Learning', href: '/learn', icon: 'learn' },
    { label: 'Progress', href: '/learn/progress', icon: 'progress' },
    { label: 'Resources', href: '/learn/resources', icon: 'resources' },
  ],
} as const;