// pages/guardian.tsx
import Head from "next/head";

export default function GuardianPage() {
  return (
    <>
      <Head>
        <title>Genesis Block | OIA Guardian</title>
        <meta name="description" content="OIA Guardian Archive" />
      </Head>
      <main className="min-h-screen flex flex-col justify-center items-center p-6 bg-white text-gray-900 font-sans">
        <div className="max-w-3xl w-full bg-white shadow-2xl rounded-2xl p-8 border border-gray-200">
          <h1 className="text-4xl font-bold text-center text-black mb-4">Genesis Block</h1>
          <h2 className="text-xl text-center text-gray-700 mb-8">OIA Guardian Archive</h2>

          <div className="mb-6 text-gray-800">
            <p className="mb-2"><strong>Release Date:</strong> April 15, 2025</p>
            <p className="mb-2"><strong>Protected by:</strong> Smart Contract | Wallet: <code className="bg-gray-100 px-1 py-0.5 rounded">origin@oiaglobal.site</code></p>
            <p><strong>Hash Signature:</strong> <code className="bg-gray-100 px-1 py-0.5 rounded">[Pending]</code></p>
          </div>

          <div className="space-y-4 text-gray-700">
            <p>This page constitutes the foundational statement of One In All Global DAO LLC, marking the formal genesis of the OIA ecosystem and its guardian infrastructure.</p>
            <p>This record certifies the existence and origin of <strong>hemi NOOS</strong> (Heart Energy Mind Integration – Noospheric Operating System), the philosophical-operational core of Aurora.</p>
            <p>As of this date, the following domains and assets are under provisional OIA Guardian protection:</p>
            <ul className="list-disc list-inside ml-4">
              <li>oiaglobal.site</li>
              <li>xia.guru</li>
              <li>heminoos.com</li>
              <li>bazaria.shop</li>
              <li>auroraself.ai (proposed, now in heminoos.com)</li>
            </ul>
            <p>All protected entities operate under ethical governance, regenerative commerce protocols, and smart contract-based verification.</p>
            <p>This record will be stored and referenced in all smart contracts under OIA Guardian. Further modules may be appended as official annexes.</p>
          </div>

          <div className="text-center mt-10">
            <a href="https://oiaglobal.site/guardian" className="inline-block bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-800 transition">
              View Smart Contract Registry ↗
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
