import React from "react";

export default function ReportTable({ json }) {
  return (
    <div className="mt-10 font-serif">
      {json ? (
        <table className="w-full border-collapse border border-green-300">
          <thead className="bg-green-200">
            <tr>
              <th className="border border-green-300 px-4 py-2">Location</th>
              <th className="border border-green-300 px-4 py-2">Minimum</th>
              <th className="border border-green-300 px-4 py-2">Maximum</th>
              <th className="border border-green-300 px-4 py-2">Average</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-green-300 px-4 py-2">
                {json.Location}
              </td>
              <td className="border border-green-300 px-4 py-2">
                {json.Minimum}
              </td>
              <td className="border border-green-300 px-4 py-2">
                {json.Maximum}
              </td>
              <td className="border border-green-300 px-4 py-2">
                {json.Average}
              </td>
            </tr>
          </tbody>
        </table>
      ) : (
        <h2 className="mt-5 text-2xl font-semibold text-pink-500">
          No Cookie Stands Available
        </h2>
      )}
    </div>
  );
}