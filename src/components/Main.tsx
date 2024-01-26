import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-4 bg-gradient-to-b from-green-900 via-zinc-950 to-zinc-950">
      <div className="flex items-center gap-4">
        <button className="rounded-full bg-black/40 p-1">
          <ChevronLeft />
        </button>
        <button className="rounded-full bg-black/40 p-1">
          <ChevronRight />
        </button>
      </div>

      {/* GOOD AFTERNOON */}

      <h1 className="font-semibold text-3xl mt-10">Good Afternoon</h1>

      <div className="grid grid-cols-3 gap-4 mt-4">
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album-wasting-light.jpg"
            width={106}
            height={106}
            alt="Capa de álbum"
          />
          <strong>Wasting Light</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album-musica-para-meditar.jpg"
            width={106}
            height={106}
            alt="Capa de álbum"
          />
          <strong>Musica para Meditação</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album-rock-collection.jpg"
            width={106}
            height={106}
            alt="Capa de álbum"
          />
          <strong>Rock Collection</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album-jazz-mix.jpeg"
            width={106}
            height={106}
            alt="Capa de álbum"
          />
          <strong>Jazz Mix</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/album-night-visions.jpeg"
            width={106}
            height={106}
            alt="Capa de álbum"
          />
          <strong>Night Visions</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
        <a
          href="#"
          className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors"
        >
          <Image
            src="/matando-robos-gigantes.jpg"
            width={106}
            height={106}
            alt="Capa de álbum"
          />
          <strong>Matando Robôs Gigantes</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
      </div>

      {/* MADE FOR USUARIO*/}

      <h2 className="font-semibold text-3xl mt-10">
        Made for Eduardo Santiago
      </h2>
      <div className="grid grid-cols-6 gap-4 mt-6">
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/album-rock-mix.jpeg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Rock Mix</strong>
          <span className="text-sm text-zinc-400">
            AC/DC, Metallica, Guns and Roses, Led Zeppelin
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/mix-trip.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Trip Mix Vol3</strong>
          <span className="text-sm text-zinc-400">
            Oasis, Eagles, The Doors, Audioslave
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/album-jazz-mix.jpeg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Jazz Mix</strong>
          <span className="text-sm text-zinc-400">
            Nina Simone, Chet Backer, Gregory Porter
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/mix-summer.jpeg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Summer Mix Vol1</strong>
          <span className="text-sm text-zinc-400">
            Morron 5, Seu Jorge, Natirus, Chimarruts
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/mix-retro.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Retro Mix</strong>
          <span className="text-sm text-zinc-400">
            Bryan Ferry, Bonnie Tyler, Chicago, The Housemartins
          </span>
        </a>
      </div>
    </main>
  );
}
