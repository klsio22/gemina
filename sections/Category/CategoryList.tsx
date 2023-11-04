import Header from "$store/components/ui/SectionHeader.tsx";
import Slider from "$store/components/ui/Slider.tsx";
import SliderJS from "$store/islands/SliderJS.tsx";
import { useId } from "$store/sdk/useId.ts";
import Image from "apps/website/components/Image.tsx";

import type { ImageWidget } from "apps/admin/widgets.ts";

export interface Category {
  tag?: string;
  label: string;
  description?: string;
  href?: string;
  image?: ImageWidget;
  buttonText?: string;
}

export interface Props {
  header?: {
    title?: string;
    description?: string;
  };
  list?: Category[];
  layout?: {
    headerAlignment?: "center" | "left";
    categoryCard?: {
      textPosition?: "top" | "bottom";
      textAlignment?: "center" | "left";
    };
  };
}

function CardText(
  { tag, label, pricePromotion, priceOriginal, alignment }: {
    tag?: string;
    label?: string;
    pricePromotion?: string;
    priceOriginal?: string;
    alignment?: "center" | "left";
  },
) {
  return (
    <div
      class={`flex flex-col ${
        alignment === "center" ? "text-center" : "text-left"
      }`}
    >
      {tag && <div class="text-sm text-primary">{tag}</div>}
      {label && <h3 class="text-lg text-2xl font-quattrocento text-left">{label}</h3>}
      <div class="flex flex-nowrap space-x-4">
        {pricePromotion && 
        <div class="text-2xl font-bold font-cinzel text-left float-right col-span-1">{pricePromotion}</div>}
        {priceOriginal && 
        <div class="text-2xl font-bold font-cinzel text-left float-left col-span-2 text-orange-extra-light">{priceOriginal}</div>}
      </div>
    </div>
  );
}

function CategoryList(props: Props) {
  const id = useId();
  const {
    header = {
      title: "",
      description: "",
    },
    list = [
      {
        tag: "",
        label: "",
        pricePromotion: "",
        priceOriginal: "",
        href: "",
        image:
          "",
        buttonText: "",
      },
    ],
    layout = {
      headerAlignment: "center",
      categoryCard: {
        textPosition: "top",
        textAlignment: "center",
      },
    },
  } = props;

  return (
    <div
      id={id}
      class="container py-8 flex flex-col gap-8 lg:gap-10 text-base-content lg:py-10"
    >
      
      <Header
        title={header.title}
        description={header.description || ""}
        alignment={layout.headerAlignment || "center"}
      />

    <Slider class="carousel carousel-start gap-4 lg:gap-24 row-start-2 row-end-5 overflow-visible">
    {list.map(
      ({ tag, label, pricePromotion, priceOriginal, href, image, buttonText }, index) => (
        <Slider.Item
          index={index}
          class="flex flex-col gap-4 carousel-item first:pl-6 sm:first:pl-0 last:pr-6 sm:last:pr-0"
        >
          <a href={href} class="flex absolute flex-col gap-4 lg:w-[464px] w-28 lg:h-auto relative">
              <img
                class="card w-full"
                src={image}
                alt={pricePromotion || priceOriginal || label || tag}
                width={464}
                height={464}
                loading="lazy"
              />
              <div class="bg-orange-light  absolute top-2 left-2 text-white rounded-full  flex items-center justify-center w-28 h-28 -ml-10 left-2 top-1 -mt-9 border-4 border-white-matte">
                <span class="font-cinzel text-2xl text-white-matte italic -rotate-45">50% Off</span>
              </div>
          </a>

          {layout.categoryCard?.textPosition === "top" && (
            <CardText
            tag={tag}
            label={label}
            pricePromotion={pricePromotion}
            priceOriginal={priceOriginal}
            alignment={layout?.categoryCard?.textAlignment}
          />
          )}
          {layout.categoryCard?.textPosition === "bottom" && (
            <CardText
            tag={tag}
            label={label}
            pricePromotion={pricePromotion}
            priceOriginal={priceOriginal}
            alignment={layout?.categoryCard?.textAlignment}
          />
          )}

          {buttonText && <a href={href} class="btn">{buttonText}</a>}
        </Slider.Item>
      )
    )}
    </Slider>

      <SliderJS rootId={id} />
    </div>
  );
}

export default CategoryList;


