import { Row, Col, Card, Image, Statistic } from "antd";
import { statistic } from "../../staticData/data"
import yoda from "../../assets/yoda.webp"

const Home = (props: any) => {

  const StatisticComponent = () => {
    return statistic.map((obj, index) => {
      return (
        <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
          <Card bordered={false} hoverable>
            <Statistic
              title={obj.name}
              value={obj.length}
              valueStyle={{ color: '#3f8600' }}
            />
          </Card>
        </Col>
      )
    })
  }
  return (
    <Card style={{ textAlign: "center", fontSize: "4.3vh" }} >


      <Row>
        {StatisticComponent()}
      </Row>
      <Row justify={"center"}>

        <Col >
          <Card
            cover={
              <Image
                preview={false}
                alt="yoda"
                src={yoda}
              />
            }
          >
            Hey&#x1F44B;, It's Hakan. Currently working as Senior Frontend Developer at <a rel="noopener" target="_blank" style={{ color: "#02072f" }} href="https://radity.com">Radity</a>.
            Here you can learn more about me and my ideas.</Card>
        </Col>
      </Row>
    </Card >
  );
};

export default Home;
