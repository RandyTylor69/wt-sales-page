import Link from "next/link";
export default function Landing() {
  return (
    <div
      style={{
        backgroundImage: "url('/images/landing.png')",
      }}
      className="h-screen w-auto bg-cover bg-[20%_center] md:bg-center"
    >
      <section className="absolute bottom-20 flex w-100 flex-col gap-10 p-10 md:top-50 md:right-40 lg:right-60 2xl:right-120">
        <h1 className="text-5xl text-red-600 uppercase md:text-7xl lg:text-8xl">
          a better way to host tournaments.
        </h1>
        <p className="text-md font-thin text-white">
          At{" "}
          <span className="font-normal italic">WrestlingTournaments.com,</span>{" "}
          We've helped hundreds of tournaments run smoothly and have created a
          simple process that can be learned in 20 minutes.
        </p>
        <Link href={"/placeholder"}>
          <button className="ease w-fit cursor-pointer rounded-2xl border-2 border-white p-2 text-white uppercase duration-300 hover:bg-white hover:text-black">
            <p className="text-sm">set up an event</p>
          </button>
        </Link>
      </section>
    </div>
  );
}
