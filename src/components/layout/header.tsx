import { Button, Layout, Space, theme } from "antd"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";



const { Header } = Layout;
const Head: React.FC = (...props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (<Header style={{ padding: 0, background: colorBgContainer }} >
        <Space direction='horizontal' size={10}>
            <Button rel="noopener" target='_blank' href={"https://www.linkedin.com/in/hakan-unal/"} icon={<AiOutlineLinkedin color='blue' size={25} />} />
            <Button rel="noopener" target='_blank' href={"https://github.com/Hakan-unal"} icon={<AiOutlineGithub size={25} />} />
            <Button rel="noopener" target='_blank' href={"https://play.google.com/store/apps/dev?id=8883692665902284708"} icon={<FcGoogle size={25} />} />
        </Space>
    </Header>)
}


export default Head;