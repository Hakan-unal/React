import React from "react";
import { Button, Card, Col, Divider, Row ,Image} from "antd";
import vercel from "../../assets/vercel.jpg";
import { certificates } from "../../staticData/data";

const Certificate: React.FC = () => {
   return (
      <Card style={{ textAlign: "center" }}>
         <Row>
            {certificates.map((obj, index) => {
               return (
                  <Col key={index} xs={24} sm={12} xl={8} xxl={6}>
                     <Card
                        bordered={false}
                        style={{ margin: 10, padding: 5 }}
                        hoverable
                        cover={<Image preview={false} alt="vercel" src={vercel} />}
                     >
                        {obj.title}

                        <Divider />
                        {obj.link && (
                           <Button
                              rel="noopener"
                              target="_blank"
                              href={obj.link}
                           >
                              Show
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
export default Certificate;
