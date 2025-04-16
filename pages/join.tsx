// pages/join.tsx
import Head from "next/head";

export default function JoinPage() {
  return (
    <>
      <Head>
        <title>Join as Founding Node | OIA DAO</title>
        <meta
          name="description"
          content="Apply to become a Founding Node of One In All Global DAO."
        />
      </Head>
      <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
        <div className="max-w-xl text-center bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 shadow-xl rounded-2xl p-8">
          <h1 className="text-3xl font-bold mb-4">Join as Founding Node</h1>
          <p className="text-zinc-400 text-base mb-6">
            This space is open for visionaries, builders, and allies aligned with the
            foundational mission of OIA DAO. Submit your request to become a node
            in the Genesis phase of this living architecture.
          </p>

          <a
            href="https://forms.gle/YOUR_FORM_HERE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-white text-black font-semibold py-2 px-4 rounded w-full hover:bg-gray-200 transition">
              Apply via Founding Node Form
            </button>
          </a>

          <p className="text-sm text-zinc-500 mt-4">
            Wallet connection and NFT minting will be available in the next phase.
          </p>
        </div>
      </main>
    </>
  );
}
