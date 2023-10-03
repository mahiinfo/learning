import { BrowserRouter, Routes, Route } from "react-router-dom";

import { authRouter,adminRouter } from "../router";


export const AuthRouterComponentConfig = () => {
  const auth = localStorage.getItem("Auth");
  const route = auth ? adminRouter : authRouter;
  return (
    <BrowserRouter>
      <Routes>
        {route.map((e) => (
          <Route path={e.path} element={<e.element />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
