import Image from "next/image";
import Link from "next/link";

export default function Placeholder() {
  return (
    <main className="px-6 pt-20">
      <section className="mx-auto flex flex-col items-center justify-center gap-12">
        <Image
          src={
            "https://i.pinimg.com/1200x/27/f7/fe/27f7fe387d6abec38619c013a6c91f24.jpg"
          }
          alt="i have great sad news freinds"
          height={600}
          width={600}
        />
        <p>
          I can't log in to your website. Please kindly imagine this page as the
          destination, in which the button you've clicked had taken you to.
        </p>
        <p>
          I wonder if the sad I'd be without Tailwind CSS would be less than the
          sad I get from being with Tailwind CSS.
        </p>

        <Link href={"/"}>

          <button className="ease w-fit cursor-pointer rounded-2xl border-2 border-black bg-black px-3 py-2 text-orange-100 uppercase duration-300 hover:bg-orange-100 hover:text-black">
            go back
          </button>
        </Link>
      </section>
    </main>
  );
}
