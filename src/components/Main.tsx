import { ChevronLeft, ChevronRight, Play } from "lucide-react";
import Image from "next/image";

export function Main() {
  return (
    <main className="flex-1 p-6 bg-gradient-to-b from-green-900 via-zinc-950 to-zinc-950">
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
          <strong>Wasting Ligth</strong>

          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
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
          <strong>Wasting Ligth</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
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
          <strong>Wasting Ligth</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
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
          <strong>Wasting Ligth</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
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
          <strong>Wasting Ligth</strong>
          <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
            <Play style={{ fill: "black" }} />
          </button>
        </a>
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
          <strong>Wasting Ligth</strong>
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
            src="/album-wasting-light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/album-wasting-light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/album-wasting-light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/album-wasting-light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
        <a
          href=""
          className="bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10"
        >
          <Image
            src="/album-wasting-light.jpg"
            className="w-full"
            width={120}
            height={120}
            alt="Capa de álbum"
          />
          <strong className="font-semibold">Daily Mix 1</strong>
          <span className="text-sm text-zinc-400">
            Wallows, COIN, girl in red and more
          </span>
        </a>
      </div>
    </main>
  );
}
