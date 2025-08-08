import Image from "next/image";

export default function Process() {
  return (
    <div className="flex h-auto w-auto flex-col items-center justify-around gap-16 py-20">
      <div className="relative w-[80vw] h-[20vw]">
        <Image
          src={
            "https://cdn.discordapp.com/attachments/759795616539738156/1403173881560170587/Mask_group.png?ex=68969703&is=68954583&hm=1d8bd05ade60a17547a8039044bec6788180456e573dc439876810b5ba5e37d1&"
          }
          fill
          className="object-fit"
          alt="process image"
        />
      </div>

      <section className="flex flex-col gap-16 w-full px-6 sm:px-5 md:px-10 lg:px-20 xl:px-70">
        <div className="uppercase flex flex-col w-full">
          <h1 className="text-3xl text-red-500">process</h1>
          <p className="tracking-tightest text-6xl">how it works</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-end w-full gap-4">
          <article className="flex max-w-90 flex-col sm:gap-4 sm:flex-row">
            <h1 className="text-3xl text-red-500 md:text-6xl">01</h1>
            <p>
              Your staff have to input weigh-ins and results. Everything else
              will be handled by the WrestlingTournaments.com team.
            </p>
          </article>
          <article className="flex max-w-90 flex-col sm:gap-4 sm:flex-row">
            <h1 className="text-3xl text-red-500 md:text-6xl">02</h1>
            <p>
              Our service will ensure that your event runs smoothly and that
              your customers leave satisfied. For most customers, the entire
              experience (including weigh-ins and awards) will take less than 2
              hours.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
