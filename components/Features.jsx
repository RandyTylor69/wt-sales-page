import Image from "next/image";
export default function Features() {
  return (
    <div className="flex h-auto w-auto flex-col gap-16 py-20">
      <header className="flex w-full flex-col px-6 uppercase sm:px-5 md:px-10 lg:px-20 xl:px-70">
        <h1 className="text-3xl text-red-500">features</h1>
        <p className="tracking-tightest text-6xl">what's included:</p>
      </header>
      <div className="flex flex-col gap-12 px-6 sm:flex-row sm:px-5 md:px-10 lg:px-20 xl:px-70">
        <Image
          src={
            "https://cdn.discordapp.com/attachments/759795616539738156/1403387705685180550/Screenshot_2024-09-11_at_4.26.49_PM_3.png?ex=68975e26&is=68960ca6&hm=287228edf01bdc806175fd8907b59532204d2ab89812a5d7cd44f9980dd46e76&"
          }
          alt="features image"
          width={400}
          height={400}
          className="object-fit"
        />

        <section className="flex flex-col gap-12 sm:gap-4 justify-around">
          {/* -------- 01 ---------- */}
          <article className="flex flex-col">
            <p className="text-bold text-2xl font-medium uppercase">
              Registration & Communication
            </p>
            <p className="md:text-md ml-6 border-l-3 border-red-500 pl-2 text-sm font-light">
              Online registration and credit card processing. Text message
              notifications - customers stay informed throughout the entire
              event. Email marketing campaigns to all wrestlers in our database
              within driving distance of your event.
            </p>
          </article>

          {/* -------- 02 ---------- */}
          <article className="flex flex-col">
            <p className="text-bold text-2xl font-medium uppercase">
              Match Scheduling & Management
            </p>
            <p className="md:text-md ml-6 border-l-3 border-red-500 pl-2 text-sm font-light">
              Automatic scheduling of weigh-ins, bouts, and awards. Customers
              always know the exact time of every match. Bracketing, match
              dispatching, and awards scheduling.
            </p>
          </article>

          {/* -------- 03---------- */}
          <article className="flex flex-col">
            <p className="text-bold text-2xl font-medium uppercase">
              Mobile-Friendly Interface
            </p>
            <p className="md:text-md ml-6 border-l-3 border-red-500 pl-2 text-sm font-light">
              Easy-to-use phone interface for entering weigh-ins and results.
              Laptops/monitors optional – everything works on mobile. Dashboard
              for coaches to manage their entire team.
            </p>
          </article>

          {/* -------- 04 ---------- */}
          <article className="flex flex-col">
            <p className="text-bold text-2xl font-medium uppercase">
              Event Stats & Insights
            </p>
            <p className="md:text-md ml-6 border-l-3 border-red-500 pl-2 text-sm font-light">
              Optional live streaming (auto-saved to athlete profiles).
              Dedicated customer support whenever you need it. Live team
              scoring. Fastest pin, most pins in least time, and other
              statistics.
            </p>
          </article>
        </section>
      </div>
    </div>
  );
}
