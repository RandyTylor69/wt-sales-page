import Image from "next/image";

export default function Services() {
  return (
    <div className="h-auto w-auto">
      <section className="flex flex-col items-center justify-center px-10 py-25 md:px-20 lg:px-30 xl:px-60">
        


        {/* --------- 0001 ----------- */}
        <article className="flex flex-col md:gap-40 md:flex-row w-full justify-between border-t-6 mb-12">
          <a
            target="_blank"
            className="mt-4 hover:decoration max-w-90 text-3xl lg:text-5xl tracking-tightest uppercase hover:underline hover:underline-offset-2"
            href="https://www.youtube.com/watch?v=d7nsH7wLME0&ab_channel=WrestlingTournaments%E2%80%A4com"
          >
            war zone <span className="text-red-500">↗</span>
          </a>
          <div className="flex flex-col sm:flex-row p-4 justify-center gap-4 mx-l-0 mx-r-8 md:mx-l-12 md:mx-r-0">
            <Image
              src="/images/s1.png"
              alt="warzone image"
              height={300}
              width={300}
              className="object-cover"
            />{" "}
            <p className="max-w-60">
              Wrestlers are paired in even-leveled matches. Better for
              developmental events where mat time is the primary goal.
            </p>
          </div>
        </article>




                {/* --------- 0002 ----------- */}
        <article className="flex flex-col md:gap-15 md:flex-row w-full justify-between border-t-6 mb-12">
          <a
            target="_blank"
            className="mt-4 hover:decoration max-w-90 text-3xl lg:text-5xl tracking-tightest uppercase hover:underline hover:underline-offset-2"
            href="https://www.youtube.com/watch?v=d7nsH7wLME0&ab_channel=WrestlingTournaments%E2%80%A4com"
          >
            RAPID BRACKETS <span className="text-red-500">↗</span>
          </a>
          <div className="flex flex-col sm:flex-row p-4 justify-center gap-4 mx-l-0 mx-r-8 md:mx-l-12 md:mx-r-0">
            <Image
              src="/images/s2.png"
              alt="rapid brackets img"
              height={300}
              width={300}
              className="object-cover"
            />{" "}
            <p className="max-w-60">
              A fast tournament that  crowns a champion. It gives exact match times and speeds up customer flow.
            </p>
          </div>
        </article>



        {/* --------- 0003 ----------- */}
        <article className="flex flex-col md:flex-row w-full justify-between border-t-6 mb-12">
          <a
            target="_blank"
            className="mt-4 hover:decoration max-w-90 text-3xl lg:text-5xl tracking-tightest uppercase hover:underline hover:underline-offset-2"
            href="https://www.youtube.com/watch?v=aOcUUgzORW0&ab_channel=WrestlingTournaments%E2%80%A4com"
          >
            TRADITIONAL BRACKETS <span className="text-red-500">↗</span>
          </a>
          <div className="flex flex-col sm:flex-row p-4 justify-center gap-4 mx-l-0 mx-r-8 md:mx-l-12 md:mx-r-0">
            <Image
              src="/images/s3.png"
              alt="trad brackets img"
              height={300}
              width={300}
              className="object-cover"
            />{" "}
            <p className="max-w-60">
              A simple solution for running a tournament that crowns a champion.
            </p>
          </div>
        </article>


        
        {/* --------- 0004 ----------- */}
        <article className="flex flex-col md:flex-row w-full justify-between border-t-6 mb-12">
          <a
            target="_blank"
            className="mt-4 hover:decoration max-w-90 text-3xl lg:text-5xl tracking-tightest uppercase hover:underline hover:underline-offset-2"
            href="https://www.youtube.com/watch?v=IYky4Sx7QJQ&ab_channel=WrestlingTournaments%E2%80%A4com"
          >
            DUAL MEET TOURNAMENTS <span className="text-red-500">↗</span>
          </a>
          <div className="flex p-4 flex-col sm:flex-row justify-center gap-4 mx-l-0 mx-r-8 md:mx-l-12 md:mx-r-0">
            <Image
              src="/images/s4.png"
              alt="DM tournaments img"
              height={300}
              width={300}
              className="object-cover"
            />{" "}
            <p className="max-w-60">
              Teams compete against one another with one wrestler representing each weight class.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
