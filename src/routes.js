import Home from "./pages/Home/Home";
import NewUser from "./pages/NewUser/NewUser";
import Products from "./pages/Products/Products";
import Users from "./pages/Users/Users";


export const routes = [
    {path:'/' , element: <Home/> },
    {path:'/products' , element: <Products/> },
    {path:'/newuser' , element: <NewUser/> },
    {path:'/users' , element: <Users/> },
]
