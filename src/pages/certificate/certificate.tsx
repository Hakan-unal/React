import React from 'react';
import { Button, Card, Col, Divider, Row, Modal } from 'antd';
import vercel from "../../assets/vercel.jpg"

type Element = {
    title: string;
    link: string;
}

const Certificate: React.FC = () => {
    const certificates: Array<Element> = [
        { title: "Cenga Project Competition", link: "https://cenga.vercel.app/" },
    ]


    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {certificates.map((obj, index) => {
                return (
                    <Col key={index} xs={24} sm={12} lg={8} xl={6} xxl={4} >
                        <Card
                            bordered={false}
                            style={{ margin: 10, padding: 5 }}
                            hoverable
                            cover={
                                <img alt="vercel" src={vercel} />
                            }
                        >
                            {obj.title}

                            <Divider />
                            {obj.link && <Button rel="noopener" target='_blank' href={obj.link}>Show</Button>}
                        </Card>
                    </Col>
                )
            })}
        </Row>


    </Card>

    )
}
export default Certificate;