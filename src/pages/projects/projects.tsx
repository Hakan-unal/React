import React from 'react';
import { Button, Card, Col, Divider, Row } from 'antd';
const Projects: React.FC = () => {
    const projects = [
        { title: "Oyak Sigorta", description: "It is a software project that will ensure the management of web application created to attract more users to oyak investment. Next.js, React.js, TypeScript, Chakra UI were used in software development", link: null, },
        { title: "Oyak Pratik Analiz", description: "It is a software project that will ensure the management of web application created to attract more users to oyak investment. Next.js, React.js, TypeScript, Chakra UI were used in software development", link: null },
        { title: "Oyak Müşteri Edinim", description: "It is a software project that will ensure the management of web application created to attract more users to oyak investment. Next.js, React.js, TypeScript, Chakra UI were used in software development", link: null },
        { title: "HDS", description: "It is a software project that will ensure the management of end-to-end procurement, operation, sales and finance processes of a large-scale tourism operator's hotel, tour, cruise, plane and transfer products together with product providers and agencies. React.js, Redux, JavaScript, Antd were used in software development", link: "https://hds.devtagon.com/" },
        { title: "PROMODEX", description: "Promodex is decentralized Programmatic Promotion Marketplace. Any project, brand or company owner can create a campaign, filter the promoters who can participate, stake the budget and launch the campaign. React.js, JavaScript, Antd, web3.js, MetaMask were used in software development", link: "https://app.promodex.io/" },
        { title: "DUYUROOM", description: "Developed with cloud and on-prime setup options. A software that is committed to communicating with your employees. React.js, React Native, Electron.js Redux.js, Firebase were used in software development", link: "https://demo.duyuroom.com/" },
        { title: "OdeonBeds (OTI Holding outsource)", description: "It is a software project that will ensure the management of end-to-end procurement, operation, sales and finance processes of a large-scale tourism operator's hotel, tour, cruise, plane and transfer products together with product providers and agencies. React.js, Redux, JavaScript, TypeScript, Antd were used in software development", link: null },
        { title: "KFC GIDA", description: "Software that provides communication with the agricultural producer and the company that purchases the product with a mobile application. It is integrated with Canias ERP and can access all information in the Müstahsil system via the Web App and Mobile App. React.js, React Native ,Redux.js ,JavaScript were used in software development", link: "https://apps.apple.com/tr/app/kfc-%C3%BCretici-bilgi-takip/id1586120006?l=tr" },
        { title: "IN-LINE", description: "It is a software project that will ensure the management of end-to-end procurement, operation, sales and finance processes of a large-scale tourism operator's hotel, tour, cruise, plane and transfer products together with product providers and agencies. React.js, Redux, JavaScript, Antd were used in software development", link: "https://inline.devtagon.com/authentication/login" },
        { title: "EXTRANET", description: "It is a software project that will ensure the management of end-to-end procurement, operation, sales and finance processes of a large-scale tourism operator's hotel, tour, cruise, plane and transfer products together with product providers and agencies. React.js, Redux, JavaScript, Antd were used in software development", link: "https://inline-extranet.devtagon.com/" },
    ]
    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {projects.map((obj, index) => {
                return (
                    <Col key={index} xs={24} sm={12} lg={8} xl={6} xxl={2} >
                        <Card
                            style={{ margin: 10, padding: 5 }}
                            hoverable
                            title={obj.title}
                        >

                            {obj.description}

                            <Divider />
                            {obj.link && <Button target='_blank' href={obj.link}>Live</Button>}
                        </Card>
                    </Col>
                )
            })}
        </Row>
    </Card>

    )
}
export default Projects;