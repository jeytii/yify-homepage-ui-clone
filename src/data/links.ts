import { ComponentType } from 'react';
import type { SVGAttributes } from 'react';
import Suggestions from '@/components/_utilities/icons/Suggestions';
import Requests from '@/components/_utilities/icons/Requests';
import Blog from '@/components/_utilities/icons/Blog';
import ApiIcon from '@/components/_utilities/icons/Api';
import RSS from '@/components/_utilities/icons/RSS';
import Contact from '@/components/_utilities/icons/Contact';

type MobileFooterLink = {
    key: number;
    name: string;
    icon: ComponentType<SVGAttributes<SVGElement>>;
};

export const desktopFooterLinks: string[] = [
  'Blog',
  'DMCA',
  'API',
  'RSS',
  'Contact',
  'Browse Movies',
  'Requests',
];

export const mobileFooterLinks: MobileFooterLink[] = [
  { key: 1, name: 'Suggestions', icon: Suggestions },
  { key: 2, name: 'Requests', icon: Requests },
  { key: 3, name: 'Blog', icon: Blog },
  { key: 4, name: 'API', icon: ApiIcon },
  { key: 5, name: 'RSS', icon: RSS },
  { key: 6, name: 'Contact', icon: Contact },
];
