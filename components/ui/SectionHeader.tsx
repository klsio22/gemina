interface Props {
  title?: string;
  fontSize?: "Normal" | "Large";
  description?: string;
  alignment: "center" | "left";
  colorReverse?: boolean;
}

function Header(props: Props) {
  return (
    <>
      {props.title || props.description
        ? (
          <div
            class={`flex flex-col gap-2 space-y-11 ${
              props.alignment === "left" ? "text-left" : "text-center"
            }`}
          >
            {props.title &&
              (
                <h1
                  class={`text-4xl font-cinzel uppercase font-light text-stone-500 leading-8 lg:leading-10
                  ${
                    props.colorReverse
                      ? "text-primary-content"
                      : "text-base-content"
                  }
                  ${props.fontSize === "Normal" ? "lg:text-3xl" : "lg:text-4xl"}
                `}
                >
                  {props.title}
                </h1>
              )}
            {props.description &&
              (
                <h2
                  class={`text-6xl pb-32
                  leading-6 lg:leading-8 font-light  uppercase font-cinzel text-stone-50`}
                >
                  {props.description}
                </h2>
              )}
          </div>
        )
        : null}
    </>
  );
}

export default Header;
