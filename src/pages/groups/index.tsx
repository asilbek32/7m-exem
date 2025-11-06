import { useQueryHandler } from "../../hooks/useQueryHandler";

function Groups() {
  const { data } = useQueryHandler({
    pathname: "groups",
    url: "api/group/get-all-group",
  });
  console.log(data);

  return (
    <div className="p-6">
      <table className="w-full border-collapse">
        <thead>
          <tr className="text-left border-b border-gray-300">
            <th className="py-3 font-semibold text-gray-700">No</th>
            <th className="py-3 font-semibold text-gray-700">Guruhg nomi</th>
            <th className="py-3 font-semibold text-gray-700">Ustoz</th>
            <th className="py-3 font-semibold text-gray-700">O'quvchilar soni</th>
            <th className="py-3 font-semibold text-gray-700">Boshlaninsg vaqti</th>
            <th className="py-3 font-semibold text-gray-700">Tugash vaqti vaqti</th>
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
              <td className="py-3">{item.name}</td>
              <td className="py-3">{item.teacher.first_name} {item.teacher.last_name}</td>
              <td className="py-3 capitalize">{item.students?.length || 0}</td>
              <td className="py-3">{item.started_group}</td>
              <td className="py-3">{item.end_group}</td>
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

export default Groups;
