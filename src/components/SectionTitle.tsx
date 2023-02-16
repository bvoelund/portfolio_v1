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
          "flex h-auto min-h-[40px] w-11 min-w-[40px] rotate-45 items-center justify-center rounded-xl border-2 border-lightBlue opacity-60 md:h-14 md:min-h-[56px] md:w-14 md:min-w-[56px]"
        )}
      >
        <div className="flex h-auto min-h-[28px] w-7 items-center justify-center rounded-xl border-2 border-yellow md:min-h-[40px] md:w-10 md:min-w-[40px]">
          <div className="h-auto min-h-[16px] w-4 rounded-lg border-2 border-lightBlue md:min-h-[24px] md:min-w-[24px]" />
        </div>
      </div>
      <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
      <h1
        className={classNames(
          reverse ? "bg-gradient-to-l" : "bg-gradient-to-r",
          "mx-4 whitespace-nowrap from-lightBlue to-yellow bg-clip-text fill-transparent text-2xl text-transparent md:text-4xl"
        )}
      >
        {title}
      </h1>
      <div className="w-full rounded-l-2xl border-[1px] border-dashed border-lightBlue opacity-60" />
    </div>
  );
}
