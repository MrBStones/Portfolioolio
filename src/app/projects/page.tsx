import { bsData } from "../_components/bookshelf/bsdata";
import BsItemHover from "../_components/bookshelf/bsitemhover";

export default function Projects() {
  return (
    <main className="-z-20 flex min-h-screen select-none flex-col items-center justify-center overflow-hidden text-light">
      <div className="container flex w-full flex-col gap-3">
        <div className="h-[30svh]" />
        <h1 className="text-4xl font-bold">Projects</h1>
        <p className="text-xl">
          Here are some of the projects I have worked on. Click on the images to
          see more details.
        </p>
        <div className="container flex flex-wrap items-stretch justify-center gap-3">
          {bsData.map((item, index) => {
            return (
              <BsItemHover
                key={index}
                num={item.num}
                title={item.title}
                description={item.description}
                fixedWidth={false}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
