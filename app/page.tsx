"use client";
import Navbar from "@/components/Navbar";
import UploadButton from "@/components/UploadButton";

export default function Home() {
  return (
    <div>
    <Navbar />
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center px-6">

    <h1 className="text-6xl font-bold mb-6">
      DataInsight AI
    </h1>

    <p className="text-xl text-gray-300 text-center max-w-2xl">
      Transform Excel and CSV files into beautiful dashboards
      and AI-powered business insights.
    </p>

    <button
  className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
  onClick={() => alert("Welcome to DataInsight AI")}
   >
  Upload Dataset
</button>

  </main>
  </div>
  );
}
