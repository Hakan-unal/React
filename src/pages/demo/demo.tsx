import React from 'react';
import { Button, Card, Col, Divider, Row } from 'antd';
const Demos: React.FC = () => {
    const projects = [
        { title: "Flowers", description: "React.js, Canvas, Antd, TypeScript", link: "https://flowers-tau.vercel.app/", code: "https://github.com/Hakan-unal/flowers" },
        { title: "Push Notification", description: "React.js, Antd, TypeScript", link: "https://chat-push-notification-one.vercel.app/", code: "https://github.com/Hakan-unal/chatPushNotification" },
        { title: "Sound Box", description: "React.js, Antd, TypeScript", link: "https://soundbox-puce.vercel.app/", code: "https://github.com/Hakan-unal/soundbox" },
        { title: "Stefan Zweig Books", description: "React.js, Antd, TypeScript", link: "https://zweig-books.vercel.app/", code: "https://github.com/Hakan-unal/zweig-books" },
        { title: "Valentine", description: "React.js, Antd, JavaScript", link: "https://valentine-nu.vercel.app/", code: "https://github.com/Hakan-unal/valentine" },
        { title: "Morphosium Library Demo", description: "React.js, Antd, JavaScript", link: "https://morphosium-library-demo.vercel.app/login", code: "https://github.com/Hakan-unal/morphosium-library-demo" },
        { title: "No 21 Case", description: "React.js, Antd, JavaScript", link: "https://no-21-case.vercel.app/", code: "https://github.com/Hakan-unal/no-21-case" },
        { title: "CRU'D Services", description: "Firebase, React.js, Antd, JavaScript", link: "https://firebase-cru-d-git-main-hakan-unal.vercel.app/", code: "https://github.com/Hakan-unal/firebase-CRU-D" },
        { title: "Ask IP", description: "React.js, Antd, JavaScript", link: "https://ask-4yywbkzds-hakan-unal.vercel.app/", code: "https://github.com/Hakan-unal/ask-ip" },
        { title: "Exchange Rates", description: "React.js, Antd, JavaScript", link: "https://exchange-rate-amber.vercel.app/", code: "https://github.com/Hakan-unal/Exchange-Rate" },
        { title: "Invent Analytics Frontend Developer Case", description: "React.js, Antd, JavaScript", link: "https://invent-demo.vercel.app/", code: "https://github.com/Hakan-unal/invent-demo" },
        { title: "WEG Frontend Case Study", description: "Next.js, React.js, GraphQL, Antd, JavaScript", link: "https://weg-demo.vercel.app/", code: null },
        { title: "My Website", description: "React.js, Antd, TypeScript", link: "https://hakanunal.vercel.app/", code: "https://github.com/Hakan-unal/WEG-demo" },
        { title: "Crud Services", description: "Next.js, React.js", link: "https://nextjs-chat-lovat-mu.vercel.app/", code: "https://github.com/Hakan-unal/nextjs-chat" },
        { title: "Basic Portfolio", description: "Gatsby.js, JavaScript", link: "https://gatsbytestportfolio.vercel.app/", code: "https://github.com/Hakan-unal/gatsby-portfolio" },
        { title: "Demo Socket", description: "Node.js, Socket.io, JavaScript", link: "https://socket-pink.vercel.app/", code: "https://github.com/Hakan-unal/socket" },
        { title: "Arçelik Demo Case", description: "Node.js, Express.js, React.js, JavaScript", link: "https://arcelik-be.vercel.app/", code: "https://github.com/Hakan-unal/arcelik_be" },
        { title: "Winterfell", description: "Next.js, React.js, MongoDB, JavaScript", link: "https://winterfell-be.vercel.app/", code: "https://github.com/Hakan-unal/winterfell-be" },

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
export default Demos;