import { Button, Layout, Space, theme } from "antd"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { BsStackOverflow } from "react-icons/bs";
import { FaNpm } from "react-icons/fa";

const { Header } = Layout;
const Head: React.FC = (...props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (<Header style={{ padding: 0, background: colorBgContainer }} >
        <Space direction='horizontal' size={10}>
            <Button rel="noopener" target='_blank' href={"https://www.linkedin.com/in/hakan-unal/"} icon={<AiOutlineLinkedin color='blue' size={25} />} />
            <Button rel="noopener" target='_blank' href={"https://github.com/Hakan-unal"} icon={<AiOutlineGithub size={25} />} />
            <Button rel="noopener" target='_blank' href={"https://stackoverflow.com/users/22632846/hakan-unal"} icon={<BsStackOverflow color='orange' size={25} />} />
            <Button rel="noopener" target='_blank' href={"https://play.google.com/store/apps/dev?id=8883692665902284708"} icon={<FcGoogle size={25} />} />
            <Button rel="noopener" target='_blank' href={"https://www.npmjs.com/~kardinal"} icon={<FaNpm size={25} color='red' />} />
        </Space>
    </Header>)
}


export default Head;
