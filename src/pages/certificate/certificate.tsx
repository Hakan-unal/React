import React, { useState } from 'react';
import { Button, Card, Col, Divider, Row, Modal } from 'antd';
import certificate from "../../assets/sertifika.pdf";


type Element = {
    title: string;
    link: string;
}

const Certificate: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false)
    const [current, setCurrent] = useState<string | undefined>(undefined)
    const certificates: Array<Element> = [
        { title: "Cenga Project Competition", link: certificate },
    ]

    const handleModal = (obj: any) => {
        setOpen(!open)
        setCurrent(obj)
    }
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
                                <img alt="vercel" src="https://mms.businesswire.com/media/20211123005573/en/929867/23/vercel-logo-freelogovectors.net.jpg" />
                            }
                        >
                            {obj.title}

                            <Divider />
                            {obj.link && <Button onClick={() => handleModal(obj.link)}>Show</Button>}
                        </Card>
                    </Col>
                )
            })}
        </Row>

        <Modal bodyStyle={{ height: "65vh" }}
            width={"80%"} footer={null} onCancel={handleModal} open={open} >
            <object data={current} type="application/pdf" width="100%" height="100%" />
        </Modal>
    </Card>

    )
}
export default Certificate;