import { Outlet } from "react-router-dom";
import PageNav from "../components/PageNav";
import { useState } from "react";

function AppLayout() {
  const [scrollPosition, setScrollPosition] = useState(0);

  // function handleScroll(e) {
  //   const { scrollTop, scrollHeight, clientHeight } = e.target;
  //   const position = Math.ceil(
  //     (scrollTop / (scrollHeight - clientHeight)) * 100
  //   );
  //   setScrollPosition(position);
  // }

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
