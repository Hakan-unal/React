import React from "react";
import { Card, Row, Col, Rate } from "antd";
import { skills } from "../../staticData/data";
const Portfolio: React.FC = () => {
   return (
      <Card style={{ textAlign: "center" }}>
         <Row>
            {skills.map((obj, index) => {
               return (
                  <Col key={index} xs={24} md={12} lg={8} xl={6} xxl={4}>
                     <h4>{obj.name}</h4>
                     <Rate disabled allowHalf value={obj.rate} />
                  </Col>
               );
            })}
         </Row>
      </Card>
   );
};

export default Portfolio;
