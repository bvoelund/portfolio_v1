import getAge from "../../utils/getAge";

export default function AboutMeInformation() {
  return (
    <div className="lg:items relative flex flex-col items-center lg:flex-row lg:items-start lg:space-x-10">
      {/* Top right border */}
      <div className="absolute top-0 -right-2 block h-16 w-16 rounded-tr-2xl border-t-2 border-r-2 border-lightBlue opacity-60 md:-right-14 md:h-40 md:w-40" />
      {/* Bottom left border */}
      <div className="absolute -bottom-8 -left-2 h-8 w-8 rounded-bl-2xl border-l-2 border-b-2 border-lightBlue opacity-60 md:-bottom-10 md:-left-10 md:h-20 md:w-20" />

      <div className="flex flex-col items-start space-y-2 text-lg">
        <div className="flex flex-col">
          <p className="text-lightBlue">Full name</p>
          <p>Benjamin Vølund</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lightBlue">Age</p>
          <p>{getAge("01-09-1996")}</p>
        </div>
        <div className="flex flex-col">
          <p className="text-lightBlue">Degree</p>
          <p>Software Engineer </p>
        </div>

        <div className="flex flex-col">
          <p className="text-lightBlue">Sparetime:</p>
          <p className="md:ml-1">
            Coding, Lego, Gaming, Football, Family and Friends
          </p>
        </div>
        <div className="flex flex-col">
          <p className="whitespace-nowrap text-lightBlue">In the workplace:</p>
          <p className="flex">
            <span className="text-lightBlue opacity-60">♢</span>
            <p className="ml-2">Engage in technical discussions</p>
          </p>

          <p className="flex">
            <span className="text-lightBlue opacity-60">♢</span>
            <p className="ml-2">Not afraid of responsibility</p>
          </p>
          <p className="flex">
            <span className="text-lightBlue opacity-60">♢</span>
            <p className="ml-2">Love to share my knowledge and help others</p>
          </p>
          <p className="flex">
            <span className="text-lightBlue opacity-60">♢</span>
            <p className="ml-2">
              Contribute to a positive work environment by socializing with my
              colleagues
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}
