import type { Props as SearchbarProps } from '$store/components/search/Searchbar.tsx';
import Drawers from '$store/islands/Header/Drawers.tsx';
import { usePlatform } from '$store/sdk/usePlatform.tsx';
import type { ImageWidget } from 'apps/admin/widgets.ts';
import type { SiteNavigationElement } from 'apps/commerce/types.ts';
import Navbar from './Navbar.tsx';

export interface Props {

  /** @title Search Bar */
  searchbar?: Omit<SearchbarProps, 'platform'>;

  /**
   * @title Navigation items
   * @description Navigation items used both on mobile and desktop menus
   */
  navItems?: SiteNavigationElement[] | null;

  /** @title Logo */
  logo?: { src: ImageWidget; alt: string };
}

function Header({searchbar, navItems, logo }: Props) {
  const platform = usePlatform();
  const items = navItems ?? [];

  return (
    <>
      <header>
        <Drawers menu={{ items }} searchbar={searchbar} platform={platform}>
          <div class='bg-base-100 fixed w-full z-50 bg-stone-500'>
            <Navbar
              items={items}
              searchbar={searchbar && { ...searchbar, platform }}
              logo={logo}
            />
          </div>
        </Drawers>
      </header>
    </>
  );
}

export default Header;
