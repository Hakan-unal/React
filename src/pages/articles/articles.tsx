import React from 'react';
import { Button, Card, Col, Divider, Row } from 'antd';

type Element = {
    title: string;
    link: string;
}

const Articles: React.FC = () => {
    const articles: Array<Element> = [
        { title: "What is Single Page Application", link: "https://spa-gamma-woad.vercel.app/" },
        { title: "Using the File System Module in Node.js", link: "https://file-system-module.vercel.app/" },
        { title: "Math, Date, String and Number Classes in JavaScript", link: "https://javascript-class.vercel.app/" },
        { title: "Class vs Functional Component", link: "https://class-vs-functional.vercel.app/" },

    ]
    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {articles.map((obj, index) => {
                return (
                    <Col key={index} xs={24} sm={12} lg={8} xl={6} xxl={4} >
                        <Card
                            bordered={false}
                            style={{ margin: 10, padding: 5 }}
                            hoverable
                            cover={
                                <img alt="vercel" src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" />
                            }
                        >
                            {obj.title}

                            <Divider />
                            {obj.link && <Button rel="noopener" target='_blank' href={obj.link}>Read</Button>}
                        </Card>
                    </Col>
                )
            })}
        </Row>
    </Card>

    )
}
export default Articles;