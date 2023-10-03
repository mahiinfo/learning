import LoginPage from "./Components/AuthComponents/LoginPage";
import RegisterPage from "./Components/AuthComponents/RegisterPage";
import { ForgotPswPage } from "./Components/AuthComponents/ForgotPswPage";
import Home from "./Components/AdminLayout/Home";
import { LaptopOutlined } from "@ant-design/icons";
export const authRouter = [
  {
    id: 1,
    path: "/",
    element: LoginPage,
  },
  {
    id: 2,
    path: "register",
    element: RegisterPage,
  },
  {
    id: 3,
    path: "forgotpsw",
    element: ForgotPswPage,
  },
];

export const adminRouter = [
  {
    id: 1,
    path: "/",
    element: Home,
  },
];

export const sideMenuRouter = [
  { key: `Dashboard`, icon: LaptopOutlined, label: `Dashboard` },
  {
    key: `Stock`,
    icon: LaptopOutlined,
    label: `Stock`,

    children: [
      {
        key: 1,
        label: `Add Category`,
        onClick: (e) => {
          console.log(e);
        },
      },
      {
        key: 2,
        label: `Add Brand`,
        onClick: (e) => {
          console.log(e);
        },
      },
      {
        key: 3,
        label: `Add Unit`,
        onClick: (e) => {
          console.log(e);
        },
      },
      {
        key: 4,
        label: `Add Product`,
        onClick: (e) => {
          console.log(e);
        },
      },
    ],
  },
];
