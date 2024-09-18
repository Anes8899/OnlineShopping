import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";

function AppLayout() {
  return (
    <div>
      <PageNav />

      <div id="detail">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
