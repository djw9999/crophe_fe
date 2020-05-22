import React from "react";
import { Menu } from "antd";
import { routes } from "../../route";
import { Link } from "react-router-dom";

const SubMenu = Menu.SubMenu;

interface IMenuItem {
  name: string;
  path?: string | string[];
  subMenu?: IMenuItem[];
}

interface IProps {
  [key:string]: any;
}

export const Menus = (props: IProps) => {

  const DEFAULT_ACTIVE_ITEM = {
    name: "Qifa Zhang & Wanneng Yang",
    path: routes.riceQzWy.path
  }

  const menus: IMenuItem[] = [
    {
      name: "Rice",
      subMenu: [
        {
          name: DEFAULT_ACTIVE_ITEM.name,
          path: DEFAULT_ACTIVE_ITEM.path
        }
      ]
    }
  ];

  const getDefaultSelectedName = (menus:IMenuItem[]) => {
    const { pathname } = window.location;
    return menus.reduce((name, item, index) => {
      if(item.subMenu) {
        name = getDefaultSelectedName(item.subMenu);
      } else if(item.path === pathname) {
        name = item.name;
      };
      return name
    }, DEFAULT_ACTIVE_ITEM.name)
  }

  const defaultOpenKeys = menus.map((item:any) => item.name);

  const renderMenu = (menus: IMenuItem[]) => {
    return menus.map(item => {
      if (item.subMenu) {
        return (
          <SubMenu key={item.name} title={item.name}>
            {renderMenu(item.subMenu)}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={item.name}>
          <Link to={item.path as string}>{item.name}</Link>
        </Menu.Item>
      );
    });
  };

  return (
    <Menu 
      mode="inline"
      defaultOpenKeys={defaultOpenKeys}
      selectedKeys={[getDefaultSelectedName(menus)]}
    >
      {renderMenu(menus)}
    </Menu>
  );
};
