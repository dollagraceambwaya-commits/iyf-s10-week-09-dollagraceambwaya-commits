// components/Layout.jsx
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
// import Navigation from "./Navigation";
import { Button } from "../shared";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="flex justify-end space-x-2 bg-gray-100 p-4 ">
        <Button variant="primary">Login</Button>
        <Button variant="secondary">Sign Up</Button>
      </div>

      <div className="flex flex-1">
        <aside className="hidden md:block w-64 bg-gray-50 border-r p-4">
          <Sidebar />
        </aside>

        <main className="flex-1 p-6 bg-white">
          <div className="max-w-3xl mx-auto text-center p-6"></div>
          <Outlet /> {/* Child routes render here */}
        </main>
      </div>

      <Footer />
    </div>
  );
}

export default Layout;
