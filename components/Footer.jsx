import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex h-auto w-full flex-col gap-20 bg-black py-16 sm:flex-row sm:px-5 md:px-10 lg:px-20 xl:px-70">
      <article className="display-around flex flex-col gap-4">
        <p className="text-4xl text-orange-100">Ready to set up an event?</p>
        <p className="text-sm text-orange-100">
          Registration can be open within a few minutes
        </p>{" "}
        <Link href={"/placeholder"}>
          {" "}
          <button className="ease w-fit cursor-pointer rounded-2xl border-2 border-orange-100 px-2 text-orange-100 uppercase duration-300 hover:bg-orange-100 hover:text-black">
            SET UP AN EVENT
          </button>
        </Link>
      </article>
      <article className="display-around flex flex-col gap-4">
        <p className="text-4xl text-orange-100">Still have questions?</p>
        <p className="text-sm text-orange-100">
          Schedule a call or Zoom with our team
        </p>

        <Link href={"/placeholder"}>
          {" "}
          <button className="ease w-fit cursor-pointer rounded-2xl border-2 border-orange-100 px-2 text-orange-100 uppercase duration-300 hover:bg-orange-100 hover:text-black">
            SCHEDULE A DEMO
          </button>
        </Link>
      </article>
    </div>
  );
}
