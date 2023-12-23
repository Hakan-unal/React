import { Row, Col, Card, Image, Statistic } from "antd";
import { statistic } from "../../staticData/data";
import yoda from "../../assets/yoda.webp";

const Home = (props: any) => {
   const StatisticComponent = () => {
      return statistic.map((obj, index) => {
         return (
            <Col key={index} xs={24} sm={12} md={8}  xl={6}>
               <Card bordered={false} hoverable>
                  <Statistic
                     title={obj.name}
                     value={obj.length}
                     valueStyle={{ color: "#3f8600" }}
                  />
               </Card>
            </Col>
         );
      });
   };
   return (
      <Card style={{ textAlign: "center", fontSize: "4.3vh" }}>
         <Row justify={"center"} gutter={[12, 36]}>
            <Col>
               <Card cover={<Image preview={false} alt="yoda" src={yoda} />}>
                  Hey&#x1F44B;, It's Hakan. Currently working as Senior Frontend
                  Developer. Here you can learn more about me and my ideas.
                  <Row>{StatisticComponent()}</Row>
               </Card>
            </Col>
         </Row>
      </Card>
   );
};

export default Home;
