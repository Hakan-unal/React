import React from 'react';
import { Button, Card, Col, Divider, Popover, Row } from 'antd';
import vercel from "../../assets/vercel.jpg"
import { demos } from '../../staticData/data';

const Demos: React.FC = () => {

    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {demos.map((obj, index) => {
                return (
                    <Col key={index} xs={24} sm={12} lg={8} xl={6} xxl={4} >
                        <Card
                            bordered={false}
                            style={{ margin: 10, padding: 5 }}
                            hoverable
                            title={<Popover content={obj.title}>
                                {obj.title}
                            </Popover>}
                            cover={
                                <img alt="vercel" src={vercel} />
                            }
                        >

                            {obj.description}

                            <Divider />
                            {obj.link && <Button rel="noopener" target='_blank' href={obj.link}>Live</Button>}
                            {obj.code && <Button rel="noopener" target='_blank' style={{ marginLeft: 10 }} href={obj.code}>Code</Button>}
                        </Card>
                    </Col>
                )
            })}
        </Row>
    </Card>

    )
}
export default Demos;