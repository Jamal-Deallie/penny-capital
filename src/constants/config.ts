export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Penny Capital',
  description:
    'Penny Capital is a visionary venture capital firm dedicated to empowering the next wave of innovation in Education, Healthcare, and Energy. With a strategic focus on early-stage startups, Penny Capital nurtures transformative ideas that promise not only financial returns but also a positive societal impact. Our investment philosophy centers around partnering with companies that demonstrate potential for industry disruption and sustainable growth. By providing capital, mentorship, and access to an extensive network, Penny Capital propels its portfolio companies towards achieving their ambitious goals.',
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
    { title: 'FAQs', href: '/faq' },
    {
      title: 'Sitemap',
      href: '/sitemap',
    },
  ],
};
