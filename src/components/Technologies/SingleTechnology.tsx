import { Clients } from "@/types/client";

const SingleTechnology = ({ technology }: { technology: Clients }) => {
  const { href, image, imageLight, name } = technology;

  return (
    <div className="flex w-1/2 items-center justify-center px-3 py-[15px] sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative h-10 w-full opacity-70 transition hover:opacity-100 dark:opacity-60 dark:hover:opacity-100"
      >
        <h3>{name}</h3>
      </a>
    </div>
  );
};

export default SingleTechnology;
