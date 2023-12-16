import React from "react";
import { Button, Card, Col, Divider, Row } from "antd";
import vercel from "../../assets/vercel.jpg";
import { components } from "../../staticData/data";

const Components: React.FC = () => {
   return (
      <Card style={{ textAlign: "center" }}>
         <Row>
            {components.map((obj, index) => {
               return (
                  <Col key={index} xs={24} sm={12} xl={8} xxl={6}>
                     <Card
                        bordered={false}
                        style={{ margin: 10, padding: 5 }}
                        hoverable
                        title={obj.title}
                        cover={<img alt="vercel" src={vercel} />}
                     >
                        {obj.description}

                        <Divider />
                        {obj.link && (
                           <Button
                              rel="noopener"
                              target="_blank"
                              href={obj.link}
                           >
                              Live
                           </Button>
                        )}
                        {obj.code && (
                           <Button
                              rel="noopener"
                              target="_blank"
                              style={{ marginLeft: 10 }}
                              href={obj.code}
                           >
                              Code
                           </Button>
                        )}
                     </Card>
                  </Col>
               );
            })}
         </Row>
      </Card>
   );
};
export default Components;
