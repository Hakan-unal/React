
import { useState } from 'react';
import { MenuProps, MenuTheme } from 'antd';
import { AiOutlineHome, AiOutlineInsertRowBelow, AiTwotoneBuild, AiOutlineFilePdf, AiOutlineCopy, AiOutlineFolderOpen, AiOutlineFile } from "react-icons/ai";
import { TbBrandVercel } from "react-icons/tb";

import { Layout, Menu, Switch } from "antd"
import { Link } from 'react-router-dom';
const { Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to="">Home</Link>, 'home', <AiOutlineHome />),
  // {
  //   type: 'divider',
  // },
  getItem(<Link to="/projects">Projects</Link>, 'projects', <AiTwotoneBuild />),
  getItem(<Link to="/demo">Vercel Demos</Link>, 'demo', <TbBrandVercel />),
  getItem(<Link to="/portfolio">Portfolyo</Link>, 'portfolio', <AiOutlineFilePdf />),
  getItem(<Link to="/components">Components</Link>, 'components', <AiOutlineInsertRowBelow />),
  getItem(<Link to="/clones">Clones</Link>, 'clones', <AiOutlineCopy />),
  getItem(<Link to="/articles">Articles</Link>, 'articles', <AiOutlineFolderOpen />),
  getItem(<Link to="/certificate">Certificate</Link>, 'certificate', <AiOutlineFile />),


];


const Sidebar: React.FC = (...props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [mode, setMode] = useState<MenuTheme>('light');
  const [current, setCurrent] = useState('home');


  const changeMode = (value: boolean) => {
    setMode(value ? 'dark' : 'light');
  };

  const handleMenu: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };
  return (
    <Sider theme={mode} trigger={null} collapsible collapsed={collapsed}>
      <Switch
        checked={mode === 'dark'}
        onChange={changeMode}
        checkedChildren="Dark"
        unCheckedChildren="Light"
        style={{ marginBottom: 10 }}
      />

      <Menu
        onMouseEnter={() => setCollapsed(false)}
        onMouseLeave={() => setCollapsed(true)}
        selectedKeys={[current]}
        onClick={handleMenu}
        theme={mode}
        mode="inline"
        items={items}
      />

    </Sider>
  )
}


export default Sidebar;