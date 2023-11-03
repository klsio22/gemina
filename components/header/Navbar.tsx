import type { Props as SearchbarProps } from '$store/components/search/Searchbar.tsx';
import { MenuButton } from '$store/islands/Header/Buttons.tsx';
import Image from 'apps/website/components/Image.tsx';
import { navbarHeight } from './constants.ts';

export interface LogoTop {
  src: string;
  alt: string;
}

function Navbar({ logo }: { logo?: LogoTop }) {
  return (
    <>
      {/* Mobile Version */}
      <div
        style={{ height: navbarHeight }}
        class='md:hidden flex flex-row justify-between items-center border-b border-base-200 w-full pl-2 pr-6 gap-2'
      >
        {logo && (
          <a
            href='/'
            className='flex-grow inline-flex items-center'
            style={{ minHeight: navbarHeight }}
            aria-label='Store logo'
          >
            <Image src={logo.src} alt={logo.alt} width={300} height={16} />
          </a>
        )}
        <MenuButton />
      </div>

      {/* Desktop Version */}
      <div class='hidden md:flex flex-row justify-between items-center border-base-200 w-full pl-2 pr-6'>
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
      </div>
    </>
  );
}

export default Navbar;
