import { User } from "lucide-react";

const DashboardNavbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-blue-500 p-4 flex items-center justify-end z-10">
      {/* <div>
        <h1 className="text-white text-xl font-semibold">Admin Dashboard | Sports Card Mvp</h1>
      </div> */}
      <div className="flex items-center space-x-2">
        <span className="text-white">Admin</span>
        <User className="text-white w-6 h-6" />
      </div>
    </nav>
  );
};

export default DashboardNavbar;
