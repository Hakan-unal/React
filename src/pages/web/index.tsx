import React from "react";
import { Button, Card, Col, Divider, Popover, Row, Space ,Image} from "antd";
import vercel from "../../assets/vercel.jpg";
import { web } from "../../staticData/data";

const Web: React.FC = () => {
   return (
      <Card style={{ textAlign: "center" }}>
         <Row>
            {web.map((obj, index) => {
               return (
                  <Col key={index} xs={24} sm={12} xl={8} xxl={6}>
                     <Card
                        bordered={false}
                        style={{ margin: 10, padding: 5 }}
                        hoverable
                        title={
                           <Popover content={obj.title}>{obj.title}</Popover>
                        }
                        cover={<Image preview={false} alt="vercel" src={vercel} />}
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
export default Web;
