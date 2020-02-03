import React, { useState } from 'react';

export default function Table() {

  const [state] = useState([
    {}
  ])
  return (
    <>
      <table className="text-left mt-4 w-full" style={{ borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Item typr</th>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Transaction Number</th>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Price</th>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Date</th>
            <th className="py-4 px-6 bg-grey-lighter font-sans font-medium uppercase text-sm text-grey border-b border-grey-light">Status</th>

          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light">Conversations</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light">Conversations</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light">Question-Buttons</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light">Conversations</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light">Image Attachment</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">✅ </td>
            <td className="py-4 px-6 border-b border-grey-light">Conversations</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>

          </tr>
          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light">Video Attachment</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light">Audio Attachment</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light">Conversations</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
          </tr>
          <tr className="bg-white">
            <td className="py-4 px-6 border-b border-grey-light">Location Attachment</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light">Conversations</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>
            <td className="py-4 px-6 border-b border-grey-light text-center">❌</td>

          </tr>
        </tbody>
      </table>


      <div className="flex justify-between mt-10">
        <div>
          <span> 1 to 10 of 500 entries </span>
        </div>

        <div className="pagination">
          <button className="p-2 border rounded border-gray-700 px-2 py-1">Previous</button>
          <button className="p-2 border rounded border-gray-700 px-2 py-1 bg-blue-500">1</button>
          <button className="p-2 border rounded border-gray-700 px-2 py-1">2</button>
          <button className="p-2 border rounded border-gray-700 px-2 py-1">Next</button>
        </div>
        
      </div>

    </>
  );
}
