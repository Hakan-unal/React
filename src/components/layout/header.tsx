import { Layout, theme } from "antd"



const { Header } = Layout;
const Head: React.FC = (...props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (<Header style={{ padding: 0, background: colorBgContainer }} ></Header>)
}


export default Head;