import type { Props as SearchbarProps } from '$store/components/search/Searchbar.tsx';
import { MenuButton } from '$store/islands/Header/Buttons.tsx';
import { SiteNavigationElement } from 'apps/commerce/types.ts';
import Image from 'apps/website/components/Image.tsx';
import NavItem from './NavItem.tsx';
import { navbarHeight } from './constants.ts';

function Navbar({
  items,
  logo,
}: {
  items: SiteNavigationElement[];
  searchbar?: SearchbarProps;
  logo?: { src: string; alt: string };
}) {

  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class='md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2'
      >
        <MenuButton />

        {logo && (
          <a
            href='/'
            class='flex-grow inline-flex items-center'
            style={{ minHeight: navbarHeight }}
            aria-label='Store logo'
          >
            <Image src={logo.src} alt={logo.alt} width={126} height={16} />
          </a>
        )}
      </div>

      {/* Desktop Version */}
      <div class='hidden md:flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6'>
        <div class='flex-none w-44'>
          {logo && (
            <a
              href='/'
              aria-label='Store logo'
              class='block px-4 py-3 w-[160px]'
            >
              <Image src={logo.src} alt={logo.alt} width={126} height={16} />
            </a>
          )}
        </div>
        <div class='flex-auto flex justify-center text-white-matte'>
          {items.map((item) => (
            <NavItem item={item} />
          ))}
        </div>
        <div class='flex-none w-44 flex items-center justify-end gap-2'>
        </div>
      </div>
    </>
  );
}

export default Navbar;
