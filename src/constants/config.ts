export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Big Poppas Pizza',
  description:
    'Indulge in irresistible flavors at Big Poppas Pizza. Inspired by Notorious B.I.G, we craft delectable pizzas with premium ingredients. Order online for a taste of legendary pies delivered to your door, embracing the spirit of hip-hop and culinary excellence. Elevate your pizza experience today!',
  socialLinks: {
    twitter: 'https://twitter.com/shadcn',
    github: 'https://github.com/shadcn/ui',
    docs: 'https://ui.shadcn.com',
  },
  primaryLinks: [
    {
      label: 'home',
      href: '/',
    },
    {
      label: 'mission',
      href: '/mission',
    },
    {
      label: 'team',
      href: '/team',
    },
    {
      label: 'insights',
      href: '/insights',
    },
    {
      label: 'contact',
      href: '/contact',
    },
  ],
  supportLinks: [
    {
      title: 'Privacy Policy',
      href: '/privacypolicy',
    },
    {
      title: 'Terms of Service',
      href: '/termsofservice',
    },
    {
      title: 'Sitemap',
      href: '/sitemap',
    },
  ],
};
