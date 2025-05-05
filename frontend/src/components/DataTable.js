// src/components/DataTable.tsx
'use client';

import { React } from 'react';

export default function DataTable({ data, columns }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-xl">
        <thead className="bg-gray-200 text-gray-600 ">
          <tr>
            {columns.map((col, i) => (
              <th key={i} className="py-3 px-4 text-left">
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-100 transition-colors duration-200"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="py-2 px-4 border-t text-left">
                  {typeof col.accessor === 'function'
                    ? col.accessor(row)
                    : row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
