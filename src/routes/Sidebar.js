import React from "react";
import {
  DocumentDuplicateIcon,
  ArrowRightOnRectangleIcon,
  UserIcon,
  KeyIcon,
  DocumentIcon,
  ExclamationTriangleIcon,
  Cog6ToothIcon,
  WalletIcon,
  UsersIcon,
  DocumentTextIcon,
  TableCellsIcon,
  CodeBracketSquareIcon,
} from "@heroicons/react/24/outline";
import InboxArrowDownIcon from "@heroicons/react/24/outline/InboxArrowDownIcon";

const iconClasses = `h-6 w-6`;
const submenuIconClasses = `h-5 w-5`;

const Sidebar = async () => {
  try {
    const res = await fetch("/data/icons.json");
    const data = await res.json();

    // const dynamicRoutes = data[0].iconList.map((item) => ({
    //   path: `/app/${item.desc.toLowerCase().replace(/\s+/g, "")}`,
    //   icon: <i className={`${item.icon}`}></i>,
    //   name: item.desc,
    // }));
    const dynamicRoutes = data.flatMap((section) =>
      (section.iconList || []).map((item) => ({
        path: `/app/${item.desc.toLowerCase().replace(/\s+/g, "")}`,
        icon: <i className={item.icon}></i>,
        name: item.desc,
      }))
    );

    const routes = [
      {
        path: "",
        icon: <DocumentDuplicateIcon className={`${iconClasses} inline`} />,
        name: "Pages",
        submenu: [
          {
            path: "/login",
            icon: <ArrowRightOnRectangleIcon className={submenuIconClasses} />,
            name: "Login",
          },
          {
            path: "/register",
            icon: <UserIcon className={submenuIconClasses} />,
            name: "Register",
          },
          {
            path: "/forgot-password",
            icon: <KeyIcon className={submenuIconClasses} />,
            name: "Forgot Password",
          },
          {
            path: "/app/blank",
            icon: <DocumentIcon className={submenuIconClasses} />,
            name: "Blank Page",
          },
          {
            path: "/app/404",
            icon: <ExclamationTriangleIcon className={submenuIconClasses} />,
            name: "404",
          },
        ],
      },
      {
        path: "",
        icon: <Cog6ToothIcon className={`${iconClasses} inline`} />,
        name: "Settings",
        submenu: [
          {
            path: "/app/settings-profile",
            icon: <UserIcon className={submenuIconClasses} />,
            name: "Profile",
          },
          {
            path: "/app/settings-billing",
            icon: <WalletIcon className={submenuIconClasses} />,
            name: "Billing",
          },
          {
            path: "/app/settings-team",
            icon: <UsersIcon className={submenuIconClasses} />,
            name: "Team Members",
          },
        ],
      },
      {
        path: "",
        icon: <DocumentTextIcon className={`${iconClasses} inline`} />,
        name: "Documentation",
        submenu: [
          {
            path: "/app/getting-started",
            icon: <DocumentTextIcon className={submenuIconClasses} />,
            name: "Getting Started",
          },
          {
            path: "/app/features",
            icon: <TableCellsIcon className={submenuIconClasses} />,
            name: "Features",
          },
          {
            path: "/app/components",
            icon: <CodeBracketSquareIcon className={submenuIconClasses} />,
            name: "Components",
          },
        ],
      },
    ];

    return [...dynamicRoutes, ...routes];
  } catch (err) {
    console.error("Failed to load icons:", err);
    return [];
  }
};

export default Sidebar;
