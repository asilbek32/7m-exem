import { useState } from "react";
import { useQueryHandler } from "../../hooks/useQueryHandler";

function Teachers() {

    const [status, setStatus] = useState("");
    const [search, setSearch] = useState("");

  const { data } = useQueryHandler({
    pathname: `teachers-${status}-${search}`, 
    url: "api/teacher/get-all-teachers",
    params: { status, search },
  });
  console.log(data);

  return (
    <div className="p-6">
     <div className="flex justify-between mb-5">
        
        <h2 className="text-2xl font-bold">Ustozlar ro'yxati</h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="border rounded px-2 py-1"
          />
          <select
            name="admins"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border rounded px-2 py-1"
          >
            
            <option value="">ALL</option>
            <option value="ta'tilda">Ta'tilda</option>
            <option value="faol">Faol</option>
            <option value="ishdan bo'shatilgan">Nofaol</option>
          </select>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="py-3 font-semibold text-gray-700">Ism</th>
            <th className="py-3 font-semibold text-gray-700">Familiya</th>
            <th className="py-3 font-semibold text-gray-700">Email</th>
            <th className="py-3 font-semibold text-gray-700">Holat</th>
            <th className="py-3 font-semibold text-gray-700">Amallar</th>
          </tr>
        </thead>

        <tbody>
          {data?.map((item: any, index: number) => (
            <tr
              key={index}
              className="border-b border-gray-200 hover:bg-gray-50 transition"
            >
              <td className="py-3">{item.first_name}</td>
              <td className="py-3">{item.last_name}</td>
              <td className="py-3">{item.email}</td>
              <td className="py-3">{item.status}</td>

              <td className="py-3">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                  ...
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teachers;
