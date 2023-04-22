import React from 'react';
import { Button, Card, Col, Divider, Row } from 'antd';
const Components: React.FC = () => {
    const projects = [
        { title: "Custom Table", description: "React.js, Antd, TypeScript", link: "https://custom-table-three.vercel.app/", code: "https://github.com/Hakan-unal/Custom-Table" },

    ]
    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {projects.map((obj, index) => {
                return (
                    <Col key={index} xs={24} sm={12} lg={8} xl={6} xxl={2} >
                        <Card
                            bordered={false}
                            style={{ margin: 10, padding: 5 }}
                            hoverable
                            title={obj.title}
                            cover={
                                <img alt="vercel" src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" />
                            }
                        >

                            {obj.description}

                            <Divider />
                            {obj.link && <Button target='_blank' href={obj.link}>Live</Button>}
                            {obj.code && <Button target='_blank' style={{ marginLeft: 10 }} href={obj.code}>Code</Button>}
                        </Card>
                    </Col>
                )
            })}
        </Row>
    </Card>

    )
}
export default Components;