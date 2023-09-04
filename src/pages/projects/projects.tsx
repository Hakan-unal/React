import React, { useState } from 'react';
import { Button, Card, Col, Divider, Drawer, Popover, Row, Typography } from 'antd';


type Element = {
    title: string;
    description: string;
    link: string | null;
}

const projects: Array<Element> = [
    { title: "Mobilet", description: "The project where tickets to cinema, theater, sports competitions and events can be sold ticket. GraphQL, Next.js, React.js were use this project", link: "https://mobilet.com/tr", },
    { title: "Oyak Pratik Öneri", description: "Project that includes technical indicators of buying or selling funds on the stock market. Next.js, React.js were use this project", link: "https://pratikoneri.com", },
    { title: "Oyak Pratik Analiz", description: "İt's a fintech project. Project to track and analyze funds in the stock market on charts. Next.js, React.js were use this project", link: "https://pratikanaliz.com" },
    { title: "Oyak Müşteri Edinim", description: "It's a fintech project that will ensure the management of web application created to attract more users to oyak investment. Next.js, React.js were use this project", link: "https://hesap.oyakyatirim.com.tr" },
    { title: "HDS", description: "HDS is a tourism project. The have B2B and B2C panel. Tourism agent personnel were use B2B' panel and customer were use B2C panel. Web based project React.js, used", link: "https://hds.devtagon.com/" },
    { title: "Promodex", description: "Promodex is a blockchain project. I developed PROMO token launchpad. Web3.js, React.js and PostgreSQL were use this project.", link: "https://app.promodex.io/" },
    { title: "Duyuroom", description: "Duyuroom is a HR management project. The have web, mobil and desktop platform. Project mission employee documents, images, audios and videos share and tracker. React.js, React Native, Electron.js and Firebase were use this project.", link: "https://demo.duyuroom.com/" },
    { title: "OdeonBeds (OTI Holding Outsource Project)", description: "Consultancy service to OTI holding software team for tourism", link: null },
    { title: "KFC GIDA", description: "FC is agriculture project. The have B2B and B2C panel. Kfc personnel used B2B panel and farmer used B2C panel. Web and mobile based project. React.js, React Native were use this project", link: "https://apps.apple.com/tr/app/kfc-%C3%BCretici-bilgi-takip/id1586120006?l=tr" },
]

const Projects: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [current, setCurrent] = useState<Element | null>(null);



    const handleDrawer = (obj: Element | null) => {
        setCurrent(obj)

        setOpen(!open)
    }
    return (<Card style={{ textAlign: "center" }} >
        <Row>
            {projects.map((obj, index) => {
                return (
                    <Col key={index} xs={24} sm={12} lg={8} xl={6} xxl={4} >
                        <Card
                            style={{ margin: 10, padding: 5 }}
                            hoverable
                            title={
                                <Popover content={obj.title}>
                                    {obj.title}
                                </Popover>}
                        >
                            <Typography.Paragraph ellipsis>
                                {obj.description}
                            </Typography.Paragraph>
                            <Divider />
                            {obj.link && <Button rel="noopener" target='_blank' href={obj.link}>Live</Button>}
                            <Button style={{ marginLeft: 10 }} onClick={() => handleDrawer(obj)}>Description</Button>
                        </Card>
                    </Col>
                )
            })}
        </Row>

        <Drawer title={current?.title} placement="right" onClose={() => handleDrawer(null)} open={open}>
            <Typography.Title level={4} copyable italic >{current?.description}</Typography.Title>
        </Drawer>

    </Card>

    )
}
export default Projects;