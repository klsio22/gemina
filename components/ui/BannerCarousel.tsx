import { useId } from '$store/sdk/useId.ts';
import type { ImageWidget } from 'apps/admin/widgets.ts';
import { Picture, Source } from 'apps/website/components/Picture.tsx';
import { relative } from 'std/path/win32.ts';

/**
 * @titleBy alt
 */
export interface Banner {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description mobile otimized image */
  mobile: ImageWidget;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
    title: string;
    /** @description Image text subtitle */
    label: string;
  };
}

export interface HighlightImages {
  /** @description desktop otimized image */
  desktop: ImageWidget;
  /** @description Image's alt text */
  alt: string;
  action?: {
    /** @description when user clicks on the image, go to this link */
    href: string;
    /** @description Image text title */
  };
}
export interface Props {
  images?: Banner[];

  imagesBanners?: HighlightImages[];

  textTitle?: string;
  /**
   * @description Check this option when this banner is the biggest image on the screen for image optimizations
   */
  preload?: boolean;
  /**
   * @title Autoplay interval
   * @description time (in seconds) to start the carousel autoplay
   */
}

const DEFAULT_PROPS = {
  images: [
    {
      alt: '/feminino',
      action: {
        href: 'https://www.deco.cx/',
        label: 'deco.cx',
        title: 'Demo Store',
        subTitle: 'Visit our site and start building now:',
      },
      mobile:
        'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/24278f9e-412d-4a8a-b2d3-57353bb1b368',
      desktop:
        'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/afa2c07c-74f4-496d-8647-5cc58f48117b',
    },
    {
      alt: '/feminino',
      action: {
        href: 'https://www.deco.cx/',
        label: 'deco.cx',
        title: 'Demo Store',
        subTitle: 'Visit our site and start building now:',
      },
      mobile:
        'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/eeaa624c-a3e1-45e8-a6fe-034233cfbcd0',
      desktop:
        'https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/239/7949d031-9a79-4639-b85e-62fd90af85a9',
    },
  ],
  preload: true,
};

function BannerItem({ image, lcp }: { image: Banner; lcp?: boolean }) {
  const { alt, mobile, desktop, action } = image;

  return (
    <a
      href={action?.href ?? '#'}
      aria-label={action?.label}
      className='relative h-screen overflow-y-hidden w-full'
    >
      <Picture preload={lcp}>
        <Source
          media='(max-width: 767px)'
          fetchPriority={lcp ? 'high' : 'auto'}
          src={mobile}
          width={360}
          height={600}
        />
        <Source
          media='(min-width: 768px)'
          fetchPriority={lcp ? 'high' : 'auto'}
          src={desktop}
          width={1440}
          height={600}
        />
        <img
          className='object-cover w-full h-full'
          loading={lcp ? 'eager' : 'lazy'}
          src={desktop}
          alt={alt}
        />
      </Picture>
      {action && (
        <div class='absolute h-min top-0 bottom-0 m-auto left-0 right-0 sm:right-auto sm:left-[12%] max-h-min max-w-[547px] flex flex-col gap-4 p-4 rounded font-cinzel uppercase'>
          <span class='text-6xl font-medium text-base-100'>{action.title}</span>
        </div>
      )}
    </a>
  );
}

function BannersPhotos({
  image,
  lcp,
}: {
  image: HighlightImages;
  lcp?: boolean;
}) {
  const { alt, desktop } = image;

  return (
    <div className='hidden md:flex'>
      <Picture>
        <Source
          media='(min-width: 768px)'
          src={desktop}
          fetchPriority={lcp ? 'high' : 'auto'}
          width={1440}
          height={600}
        />
        <img
          className='object-cover w-full h-full'
          loading={lcp ? 'eager' : 'lazy'}
          src={desktop}
          alt={alt}
        />
      </Picture>
    </div>
  );
}

function BannerCarousel(props: Props) {
  const { images, imagesBanners, textTitle, preload } = {
    ...DEFAULT_PROPS,
    ...props,
  };

  const id = useId();

  return (
    <div
      id={id}
      class='grid grid-cols-[48px_1fr_48px] sm:grid-cols-[120px_1fr_120px] grid-rows-[1fr_48px_1fr_64px]'
    >
      <div className='carousel carousel-center w-full col-span-full row-span-full gap-6'>
        {images?.map((image, index) => (
          <BannerItem image={image} lcp={index === 0 && preload} />
        ))}
      </div>

      <div className='absolute right-12 top-1/3'>
        <div>
          <div className='flex gap-10'>
            {imagesBanners?.map((image, index) => (
              <BannersPhotos image={image} lcp={index === 0 && preload} />
            ))}
          </div>

          <div className='w-7'>
            <span className='font-quattrocento font-normal text-xl text-white-matte uppercase'>
              {textTitle}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerCarousel;
