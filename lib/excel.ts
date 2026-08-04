import * as XLSX from "xlsx";

export function readExcel(file: File) {
  const reader = new FileReader();

  reader.onload = (event) => {
    const data = event.target?.result;

    const workbook = XLSX.read(data, {
      type: "array",
    });

    const firstSheet = workbook.Sheets[workbook.SheetNames[0]];

    const jsonData = XLSX.utils.sheet_to_json(firstSheet);

    console.log(jsonData);
  };

  reader.readAsArrayBuffer(file);
}