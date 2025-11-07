import { FaSearch, FaChevronDown  } from "react-icons/fa";
import profile2 from "../../assets/profile-2user.png";
import monitor from "../../assets/monitor.png";
import profiletick from "../../assets/profile-tick.svg";
import { Button, Dropdown, Table } from "antd";

const columns = [
  {
    title: <span className="text-[#B5B7C0]">Customer Name</span>,
    dataIndex: "CustomerName",
    key: "CustomerName",
    render: (text) => {
      return <a style={{ color: "#292D32" }}>{text}</a>;
    },
  },
  {
    title: <span className="text-[#B5B7C0]">Company</span>,
    dataIndex: "Company",
    key: "Company",
    render: (text) => {
      return <a style={{ color: "#292D32" }}>{text}</a>;
    },
  },
  {
    title: <span className="text-[#B5B7C0]">Phone Number</span>,
    dataIndex: "PhoneNumber",
    key: "PhoneNumber",
    render: (text) => {
      return <a style={{ color: "#292D32" }}>{text}</a>;
    },
  },
  {
    title: <span className="text-[#B5B7C0]">Email</span>,
    dataIndex: "Email",
    key: "Email",
    render: (text) => {
      return <a style={{ color: "#292D32" }}>{text}</a>;
    },
  },
  {
    title: <span className="text-[#B5B7C0]">Country</span>,
    dataIndex: "Country",
    key: "Country",
    render: (text) => {
      return <a style={{ color: "#292D32" }}>{text}</a>;
    },
  },
  {
    title: <span className="text-[#B5B7C0]">Status</span>,
    dataIndex: "Status",
    key: "Status",
    render: (status) => {
      const color = status === "Active" ? "green" : "red";
      return (
        <span
          className={`px-3 py-1 rounded-full text-white text-xs font-medium ${
            color === "green" ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {status}
        </span>
      );
    },
  },
];

const data = [
  {
    key: "1",
    CustomerName: "Jane Cooper",
    Company: "Microsoft",
    PhoneNumber: "(225) 555-0118",
    Email: "jane@microsoft.com",
    Country: "United States",
    Status: "Active",
  },
  {
    key: "2",
    CustomerName: "Floyd Miles",
    Company: "Yahoo",
    PhoneNumber: "(205) 555-0100",
    Email: "floyd@yahoo.com",
    Country: "Kiribati",
    Status: "Inactive",
  },
  {
    key: "3",
    CustomerName: "Ronald Richards",
    Company: "Adobe",
    PhoneNumber: "(302) 555-0107",
    Email: "ronald@adobe.com",
    Country: "Israel",
    Status: "Inactive",
  },
  {
    key: "4",
    CustomerName: "Marvin McKinney",
    Company: "Tesla",
    PhoneNumber: "(252) 555-0126",
    Email: "marvin@tesla.com",
    Country: "Iran",
    Status: "Active",
  },
  {
    key: "5",
    CustomerName: "Jerome Bell",
    Company: "Google",
    PhoneNumber: "(629) 555-0129",
    Email: "jerome@google.com",
    Country: "Réunion",
    Status: "Active",
  },
  {
    key: "6",
    CustomerName: "Kathryn Murphy",
    Company: "Microsoft",
    PhoneNumber: "(406) 555-0120",
    Email: "kathryn@microsoft.com",
    Country: "Curaçao",
    Status: "Active",
  },
  {
    key: "7",
    CustomerName: "Jacob Jones",
    Company: "Yahoo",
    PhoneNumber: "(208) 555-0112",
    Email: "jacob@yahoo.com",
    Country: "Brazil",
    Status: "Active",
  },
  {
    key: "8",
    CustomerName: "Kristin Watson",
    Company: "Facebook",
    PhoneNumber: "(704) 555-0127",
    Email: "kristin@facebook.com",
    Country: "Åland Islands",
    Status: "Inactive",
  },
  {
    key: "9",
    CustomerName: "Cameron Williamson",
    Company: "Apple",
    PhoneNumber: "(239) 555-0108",
    Email: "cameron@apple.com",
    Country: "Germany",
    Status: "Active",
  },
  {
    key: "10",
    CustomerName: "Courtney Henry",
    Company: "Amazon",
    PhoneNumber: "(405) 555-0123",
    Email: "courtney@amazon.com",
    Country: "Canada",
    Status: "Inactive",
  },
];

function Dashboard() {
  const items = [
    {
      key: "1",
      label: (
        <span className="text-green-600 font-medium hover:text-green-700">
          Active
        </span>
      ),
    },
    {
      key: "2",
      label: (
        <span className="text-red-600 font-medium hover:text-red-700">
          Inactive
        </span>
      ),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-[40px]">
        <h3 className="text-[#000000] text-[24px]">Hello Evano 👋🏼,</h3>
        <div className="flex items-center w-[216px] gap-2 bg-[#f8fbff] p-2 rounded-2xl">
          <FaSearch className="text-[#7E7E7E] " />
          <input type="text" placeholder="Search" className="outline-none " />
        </div>
      </div>

      <div className="flex justify-between flex-wrap gap-2 bg-[#f8fbff] px-[50px] py-[31px] rounded-3xl mb-[40px]">
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-center w-[85px] h-[84px] rounded-full bg-[#D3FFE7]">
            <img src={profile2} alt="" />
          </div>
          <div>
            <p className="text-[#ACACAC] text-sm ">Total Customers</p>
            <h4 className="text-[32px] text-[#333333]">5,423</h4>
            <p className="text-[#292D32] text-[12px]">
              <span className="text-[#00AC4F]">16%</span> this month
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-center w-[85px] h-[84px] rounded-full bg-[#D3FFE7]">
            <img src={profiletick} alt="" />
          </div>
          <div>
            <p className="text-[#ACACAC] text-sm ">Members</p>
            <h4 className="text-[32px] text-[#333333]">1,893</h4>
            <p className="text-[#292D32] text-[12px]">
              <span className="text-[#D0004B]">1%</span> this month
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex items-center justify-center w-[85px] h-[84px] rounded-full bg-[#D3FFE7]">
            <img src={monitor} alt="" />
          </div>
          <div>
            <p className="text-[#ACACAC] text-sm ">Active Now</p>
            <h4 className="text-[32px] text-[#333333]">189</h4>
          </div>
        </div>
      </div>

      <div className="shadow p-2 rounded-3xl">
        <div className="flex items-center justify-between mb-[40px]">
          <h3>All Customers</h3>
          <div className="flex gap-4">
            <div className="flex items-center w-[216px] gap-2 bg-[#f8fbff] p-2 rounded-2xl">
              <FaSearch className="text-[#7E7E7E] " />
              <input
                type="text"
                placeholder="Search"
                className="outline-none "
              />
            </div>
            <div className="flex items-center w-[216px] gap-2 bg-[#f8fbff] p-2 rounded-2xl">
              <p>Sort by: </p>
              <Dropdown menu={{ items }} placement="bottom">
                <Button style={{ border: "none", boxShadow: "none" }}>
                  NewSet
                  <FaChevronDown />
                </Button>
              </Dropdown>
            </div>
          </div>
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    </div>
  );
}

export default Dashboard;