// pages/index.tsx
import Head from "next/head";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <>
      <Head>
        <title>OIA Genesis Block</title>
        <meta
          name="description"
          content="Custodial registry and foundational declaration of One In All Global DAO LLC."
        />
      </Head>
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-2xl text-center bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 shadow-xl rounded-2xl p-8">
          <div className="mb-4">
            <Globe className="mx-auto h-10 w-10 text-green-400" />
          </div>
          <h1 className="text-3xl font-bold mb-2">OIA Genesis Block</h1>
          <p className="text-sm text-zinc-300 mb-4">
            One In All Global DAO LLC
          </p>
          <p className="text-zinc-400 text-base mb-6">
            This is the official foundational declaration and custodial registry
            for the OIA ecosystem, including Aurora, XIA, Bazaria, Synapsis, and the
            Guardian Protocol.
          </p>

          <div className="space-y-3">
            <a href="/guardian">
              <button className="bg-white text-black font-semibold py-2 px-4 rounded w-full hover:bg-gray-200 transition">
                View Guardian Registry
              </button>
            </a>
            <a href="/documents/genesis.pdf" target="_blank" rel="noopener noreferrer">
              <button className="border border-white text-white font-semibold py-2 px-4 rounded w-full hover:bg-zinc-700 transition">
                Read Genesis Manifesto (PDF)
              </button>
            </a>
            <a href="/join">
              <button className="bg-green-500 text-black font-semibold py-2 px-4 rounded w-full hover:bg-green-400 transition">
                Join as Founding Node
              </button>
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

