"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import UploadButton from "@/components/UploadButton";
import DataTable from "@/components/DataTable";

export default function Home() {
  const [data, setData] = useState<any[]>([]);

  return (
    <div>
      <Navbar />

      <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center px-6 py-10">

        <h1 className="text-6xl font-bold mb-6">
          DataInsight AI
        </h1>

        <p className="text-xl text-gray-300 text-center max-w-2xl">
          Transform Excel and CSV files into beautiful dashboards
          and AI-powered business insights.
        </p>

        <UploadButton onDataLoaded={setData} />

        {data.length > 0 && (
          <DataTable data={data} />
        )}

      </main>
    </div>
  );
}
