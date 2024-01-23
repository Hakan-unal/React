
import { Layout, theme } from "antd"
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/home"
import page404 from "./pages/404"
import Sidebar from './components/layout/sidebar';
import Web from "./pages/web"
import Components from "./pages/components"
import Portfolio from "./pages/portfolio"
import Projects from "./pages/projects"
import Clones from "./pages/clones"
import Articles from "./pages/articles"
import Certificate from "./pages/certificate"
import Npm from "./pages/npm"
import Mobile from "./pages/mobile"

import Header from "./components/layout/header";

const { Content } = Layout;

const App: React.FC = () => {

  const {
    token: { colorBgContainer },
  } = theme.useToken();


  return (<Layout >
    <Sidebar />
    <Layout>

      <Header />

      <Content
        style={{
          margin: '24px 16px',
          padding: 24,
          minHeight: 400,
          background: colorBgContainer,
        }}
      >
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/web" Component={Web}></Route>
          <Route path="/mobile" Component={Mobile}></Route>
          <Route path="/components" Component={Components}></Route>
          <Route path="/portfolio" Component={Portfolio}></Route>
          <Route path="/projects" Component={Projects}></Route>
          <Route path="/clones" Component={Clones}></Route>
          <Route path="/articles" Component={Articles}></Route>
          <Route path="/certificate" Component={Certificate}></Route>
          <Route path="/npm" Component={Npm}></Route>

          <Route path="*" Component={page404}></Route>
        </Routes>

      </Content>
      {
        // optional Footer
        // <Footer><Footer />
      }


    </Layout>

  </Layout>

  )
}


export default App;
