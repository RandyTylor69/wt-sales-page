export default function Landing() {
  return (
    <div
      style={{
        backgroundImage: `url('https://cdn.discordapp.com/attachments/759795616539738156/1403095022718550077/landing-page-img-improved.png?ex=68964d91&is=6894fc11&hm=464d8ed36d18cb6fc5bbb26a5df5e4028a0d7d1e9e844b165d06aa380c5f6f94&')`,
      }}
      className="h-screen w-auto bg-cover bg-[20%_center] md:bg-center"
    >
      <section className="absolute bottom-20 md:right-40 md:top-50 flex w-100 flex-col gap-10 p-10 lg:right-60 2xl:right-120">
        <h1 className="text-5xl md:text-7xl lg:text-8xl text-red-600 uppercase">
          a better way to host tournaments.
        </h1>
        <p className="text-md font-thin text-white">
          At <span className="font-normal italic">WrestlingTournaments.com,</span> We've helped hundreds of
          tournaments run smoothly and have created a simple process that can be
          learned in 20 minutes.
        </p>
        <button className="w-fit rounded-2xl border-2 border-white p-2 text-white uppercase cursor-pointer hover:bg-white hover:text-black duration-300 ease">
          <p className="text-sm">
              set up an event
          </p>
        
        </button>
      </section>
    </div>
  );
}
