import { NavLink, Outlet } from "react-router-dom";

function Header() {
  const userData = localStorage.getItem("user");
  const user = userData ? JSON.parse(userData) : null;

  const logOut = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload();
  };

  // Class function active uchun
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `text-[17px] px-3 py-2 rounded-md hover:bg-gray-100 transition ${
      isActive ? "border-l-4 border-blue-500 bg-gray-100" : ""
    }`;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {" "}
      <aside className="w-[250px] bg-white shadow-md border-r border-gray-200 flex flex-col justify-between fixed top-0 left-0 h-screen p-6">
        {" "}
        <div className="flex flex-col gap-6 overflow-y-auto">
          {" "}
          <div>
            {" "}
            <h2 className="text-xl font-bold mb-3 text-gray-800">Menu</h2>{" "}
            <div className="flex flex-col gap-1">
              <NavLink className={linkClass} to={"/"}>
                Asosiy{" "}
              </NavLink>
              <NavLink className={linkClass} to={"/menegers"}>
                Menejerlar{" "}
              </NavLink>
              <NavLink className={linkClass} to={"/admins"}>
                Adminlar{" "}
              </NavLink>
              <NavLink className={linkClass} to={"/teachers"}>
                Ustozlar{" "}
              </NavLink>
              <NavLink className={linkClass} to={"/students"}>
                Studentlar{" "}
              </NavLink>
              <NavLink className={linkClass} to={"/groups"}>
                Guruhlar{" "}
              </NavLink>
              <NavLink className={linkClass} to={"/courses"}>
                Kurslar{" "}
              </NavLink>
              <NavLink className={linkClass} to={"/payment"}>
                To‘lovlar{" "}
              </NavLink>{" "}
            </div>{" "}
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3 text-gray-800">Boshqalar</h2>
            <div className="flex flex-col gap-1">
              <NavLink className={linkClass} to={"/profile"}>
                Profil
              </NavLink>
              <button
                className="text-[17px] text-red-600 px-3 py-2 rounded-md hover:bg-red-50 transition"
                onClick={logOut}
              >
                Chiqish
              </button>
            </div>
          </div>
        </div>
      </aside>
      <div className="flex-1 ml-[250px] flex flex-col">
        <nav className="h-[60px] bg-white shadow-sm border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <h2 className="text-lg font-semibold text-gray-800">Asosiy</h2>
          <div className="text-gray-700 font-medium">
            {user ? `${user.first_name} ${user.last_name}` : "Foydalanuvchi"}
          </div>
        </nav>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default Header;
