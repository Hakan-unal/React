import { Link } from "react-router-dom";
import { Row, Col, Card, Image, Space } from "antd";

const Page404 = (props: any) => {
  return (<Card style={{ textAlign: "center", fontSize: "4.3vh" }} >


    <Row>
      <Col xs={{ span: 20, offset: 2 }} sm={{ span: 16, offset: 4 }} md={{ span: 12, offset: 6 }} lg={{ span: 10, offset: 7 }}>
        <Card
          cover={
            <Image
              preview={false}
              alt="yoda"
              src="https://www.macleans.ca/wp-content/uploads/2019/11/BABY-YODA-MANDALORIAN-NOV19-810x445.jpg"
            />
          }
        >
          Hey&#x1F44B;, It's Hakan. Currently working as Software Engineer at <a rel="noopener" target="_blank" style={{ color: "#452170" }} href="https://innovance.com.tr/">Innovance</a>.
          Here you can learn more about me and my ideas.</Card>
      </Col>
    </Row>
  </Card>
  );
};

export default Page404;
