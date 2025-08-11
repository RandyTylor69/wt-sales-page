import Image from "next/image";
import Link from "next/link";

export default function Pricing() {
  return (
    <div className="mb-30 flex h-auto w-auto flex-col gap-16 pt-40 sm:px-5 md:px-10 lg:px-20 xl:px-70">
      <header className="flex w-full max-w-120 flex-col uppercase">
        <h1 className="text-3xl text-red-500">pricing</h1>
        <p className="tracking-tightest text-5xl">afffordable pricing plan:</p>
      </header>
      <section className="relative flex h-auto flex-col md:flex-row">
        <article className="relative z-90 flex h-full w-full min-w-80 flex-col gap-6">
          <span className="flex flex-row items-end text-lg">
            <h1 className="text-6xl text-red-500">$100</h1> /event +{" "}
            <h1 className="text-6xl text-red-500">$1</h1> /competitor
          </span>
          <p className="text-sm font-light">
            You set the cost of registration, we collect the money for you.
            After the event, we send you a check. We have helped fundraise over
            $1,000,000 for wrestling programs this year.
          </p>
          <div className="flex flex-col gap-4">
            <Link href={"/placeholder"}>
              {" "}
              <button className="ease w-fit cursor-pointer rounded-2xl border-2 border-black bg-black px-3 py-2 text-white uppercase duration-300 hover:bg-white hover:text-black">
                set up an event
              </button>
            </Link>
            <Link href={"/placeholder"}>
              {" "}
              <button className="ease w-fit cursor-pointer rounded-2xl border-2 border-black px-2 text-black uppercase duration-300 hover:bg-orange-200 hover:text-black">
                schedule a demo
              </button>
            </Link>
          </div>
        </article>

        <Image
          src="/images/pricing.png"
          alt="pricing image"
          width={600}
          height={600}
        />
      </section>
    </div>
  );
}
