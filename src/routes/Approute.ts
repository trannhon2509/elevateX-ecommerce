import AdminLayout from "../layouts/AdminLayout/AdminLayout";
import MainLayout from "../layouts/MainLayout/MainLayout";
import Home from "../pages/Home/Home";
import ShoppingCart from "../pages/ShoppingCart/ShoppingCart";
import RoutePath from "./RoutePath";

interface Route {
    path: string;
    page: React.ComponentType;
    exact: boolean;
    layout: React.ComponentType<{ children: React.ReactNode }>;
}

const publicRoutes: Route[] = [
    { path: RoutePath.HOME, page: Home, exact: true, layout: MainLayout },
];

const privateRoutes: Route[] = [
    { path: RoutePath.SHOPPINGCART, page: ShoppingCart, exact: true, layout: AdminLayout },
];

export { publicRoutes, privateRoutes };