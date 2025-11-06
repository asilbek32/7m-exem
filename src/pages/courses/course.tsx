import { useQueryHandler } from "../../hooks/useQueryHandler";

function Course() {
  const { data } = useQueryHandler({
    pathname: "courses",
    url: "api/course/get-courses",
  });

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      
      <h2 className="text-3xl font-bold mb-6">Kurslar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map((item: any, index: number) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-500 text-sm mb-4">{item.description}</p>

              <div className="flex justify-between items-center mb-4">
                <p className="text-gray-700 font-medium">{item.duration}</p>
                <p className="text-gray-700 font-medium">15 students</p>
              </div>

              <p className="text-lg font-bold text-indigo-600">
                {Number(item.price).toLocaleString()} so'm
              </p>
            </div>

            <div className="mt-6 flex justify-between">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
                Edit
              </button>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition">
                O'chirish
              </button>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition">
                Muzlatish
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
