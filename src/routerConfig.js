import MantenedorMain from "./views/MantenedorMain"
import Index from "./views";

export const routes = [
  {
    path: "/MantenedorMain",
    element: <MantenedorMain />,
  },
  {
    path: "/index",
    element: <Index />,
  }
];