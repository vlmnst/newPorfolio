import { Outlet } from "react-router-dom";


function Layout() {
  return (
    <div className="h-screen">
        <Outlet/>
    </div>
  )
}

export default Layout;