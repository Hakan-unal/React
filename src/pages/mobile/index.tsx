import React from "react";
import { Button, Card, Col, Divider, Popover, Row, Space,Image } from "antd";
import { mobile } from "../../staticData/data";

const Mobile: React.FC = () => {
   return (
      <Card style={{ textAlign: "center" }}>
         <Row>
            {mobile.map((obj, index) => {
               return (
                  <Col key={index} xs={24} sm={8} xl={6} xxl={4}>
                     <Card
                        bordered={false}
                        style={{ margin: 10, padding: 5 }}
                        hoverable
                        title={
                           <Popover content={obj.title}>{obj.title}</Popover>
                        }
                        cover={<Image  preview={false} alt="vercel" src={obj.image} />}
                     >
                        {obj.description}

                        <Divider />
                        <Space align="center">
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
                                 href={obj.code}
                              >
                                 Code
                              </Button>
                           )}
                        </Space>
                     </Card>
                  </Col>
               );
            })}
         </Row>
      </Card>
   );
};
export default Mobile;