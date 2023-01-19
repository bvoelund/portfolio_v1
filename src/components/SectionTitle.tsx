import classNames from "classnames";

type Props = {
  title: string;
  reverse?: boolean;
};

export default function SectionTitle({ title, reverse }: Props) {
  return (
    <div
      className={classNames(
        reverse ? "flex-row-reverse" : "flex-row",
        "mb-4 flex w-full flex-row items-center justify-center"
      )}
    >
      <div
        className={classNames(
          reverse ? "ml-4" : "mr-4 ",
          "flex h-auto min-h-[44px] w-11 min-w-[44px] rotate-45 items-center justify-center rounded-xl border-2 border-lightBlue opacity-60 md:h-14 md:min-h-[56px] md:w-14 md:min-w-[56px]"
        )}
      >
        <div className="flex h-auto min-h-[32px] w-8 items-center justify-center rounded-xl border-2 border-lightBlue md:min-h-[40px] md:w-10 md:min-w-[40px]">
          <div className="h-auto min-h-[20px] w-5 rounded-lg border-2 border-lightBlue md:min-h-[24px] md:min-w-[24px]" />
        </div>
      </div>
      <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
      <h1 className="mx-4 whitespace-nowrap text-2xl text-lightBlue md:text-4xl">
        {title}
      </h1>
      <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
    </div>
  );
}
