import { Suspense } from "@/utils";
import { lazy } from "react";
import { useRoutes } from "react-router-dom";

const Layout = lazy(() => import("./layout/Layout"));
const Portfolio = lazy(() => import("./portfolio/Portfolio"));
const Team = lazy(() => import("./team/Team"));
const Info = lazy(() => import("./info/Info"));

const MainRouters = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Layout />
        </Suspense>
      ),
      children: [
        {
          path: "/",
          element: (
            <Suspense>
              <Portfolio />
            </Suspense>
          ),
        },
        {
          path: "/team",
          element: (
            <Suspense>
              <Team />
            </Suspense>
          ),
        },
        {
          path: "/info",
          element: (
            <Suspense>
              <Info />
            </Suspense>
          ),
        },
      ],
    },
  ]);
};

export default MainRouters;
