import React from 'react';
import { Card, Row, Col, Rate } from 'antd';

const Portfolio: React.FC = () => {

    const skills = [
        { name: "Software Development", rate: 4.5 },
        { name: "JavaScript", rate: 4.5 },
        { name: "React.js", rate: 4.5 },
        { name: "React Hooks", rate: 4.5 },
        { name: "TypeScript", rate: 4 },
        { name: "Firebase", rate: 3.5 },
        { name: "Material-UI", rate: 4 },
        { name: "Tailwind CSS", rate: 3 },
        { name: "Antd", rate: 5 },
        { name: "Redux.js", rate: 4 },
        { name: "REST APIs", rate: 4.5 },
        { name: "Cloud Firestore", rate: 3.5 },
        { name: "Next.js", rate: 4 },
        { name: "HTML5", rate: 4.5 },
        { name: "CSS", rate: 4 },
        { name: "React Native", rate: 3.5 },
        { name: "Node.js", rate: 4 },
        { name: "User Interface Design", rate: 4.5 },
        { name: "User Experience", rate: 4.5 },
        { name: "Agile Methodologies", rate: 4 },
        { name: "Object-Oriented Programming", rate: 5 },
        { name: "Search Engine Optimization (SEO)", rate: 4 },
        { name: "Bootstrap", rate: 4 },
        { name: "Docker", rate: 3.5 },
        { name: "JQuery", rate: 3.5 },
        { name: "MongoDB", rate: 4 },
        { name: "Electron.js", rate: 4 },
        { name: "Semantic UI", rate: 4 },
        { name: "Express.js", rate: 4 },
        { name: "Linux", rate: 4 },
        { name: "MetaMask", rate: 4 },
        { name: "web3.js", rate: 4 },
        { name: "Python", rate: 3 },
        { name: "Single Page Application", rate: 4.5 },
    ]

    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {skills.map((obj, index) => {
                return (
                    <Col key={index} xs={24} md={12} lg={8} xl={6} xxl={4} >
                        <h4>{obj.name}</h4>
                        <Rate disabled allowHalf value={obj.rate} />
                    </Col>
                )
            })}
        </Row>
    </Card>
    )
};

export default Portfolio;