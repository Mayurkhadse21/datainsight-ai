"use client";
import { readExcel } from "@/lib/excel";
import { useRef, useState } from "react";

export default function UploadButton() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState("");

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
    setFileName(file.name);

    readExcel(file);
    }
  };

  return (
    <div className="mt-10 flex flex-col items-center">
      <button
        onClick={handleClick}
        className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
      >
        Upload Dataset
      </button>

      <input
        type="file"
        ref={fileInputRef}
        className="hidden"
        accept=".csv,.xlsx,.xls"
        onChange={handleFileChange}
      />

      {fileName && (
        <p className="mt-4 text-green-400">
          📄 {fileName}
        </p>
      )}
    </div>
  );
}