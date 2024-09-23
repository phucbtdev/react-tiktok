import Header from "~/components/Layout/components/Header";
import Sidebar from "~/components/Layout/components/Sidebar";

function LayoutDefault({ children }) {
      return <>
            <Header></Header>
            <div className="container">
                  <Sidebar></Sidebar>
                  <div className="content">{children}</div>
            </div>
      </>;
}

export default LayoutDefault;