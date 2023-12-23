import React from "react";
import { Button, Card, Col, Popover, Row, Space } from "antd";
import npm from "../../assets/npm.png";

import { npmPackages } from "../../staticData/data";

const Npm: React.FC = () => {
   return (
      <Card style={{ textAlign: "center" }}>
         <Row>
            {npmPackages.map((obj, index) => {
               return (
                  <Col key={index} xs={24} sm={12} xl={8} xxl={6}>
                     <Card
                        bordered={false}
                        style={{ margin: 10, padding: 50 }}
                        hoverable
                        title={
                           <Popover content={obj.title}>{obj.title}</Popover>
                        }
                        cover={<img alt="npm" src={npm} />}
                     >

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
export default Npm;