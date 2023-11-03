import type { SiteNavigationElement } from 'apps/commerce/types.ts';
import Image from 'apps/website/components/Image.tsx';
import { headerHeight } from './constants.ts';

function NavItem({ item }: { item: SiteNavigationElement }) {
  const { url, name, children } = item;
  const image = item?.image?.[0];

  return (
    <li class='group flex items-center'>
      <a href={url} class='px-4 py-3'>
        <span class='group-hover:underline'>{name}</span>
      </a>
    </li>
  );
}

export default NavItem;
