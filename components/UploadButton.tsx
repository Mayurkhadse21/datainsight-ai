"use client";

export default function UploadButton() {
  return (
    <button
      className="mt-10 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg font-semibold"
      onClick={() => alert("Coming Soon")}
    >
      Upload Dataset
    </button>
  );
}