import type { SiteNavigationElement } from 'apps/commerce/types.ts';

function NavItem({ item }: { item: SiteNavigationElement }) {
  const { url, name } = item;

  return (
    <li class='group flex items-center'>
      <a href={url} class='px-4 py-3'>
        <span class='group-hover:underline'>{name}</span>
      </a>
    </li>
  );
}

export default NavItem;
