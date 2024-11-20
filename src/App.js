import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import './App.css'

function App() {

    let router = useRoutes(routes)

    return (
        <>
            <Topbar />
            <div className="container">
                <Sidebar />
                {router}
            </div>

        </>
    );
}

export default App;
