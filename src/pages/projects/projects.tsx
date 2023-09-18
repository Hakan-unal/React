import React, { useState } from 'react';
import { Button, Card, Col, Divider, Drawer, Popover, Row, Typography } from 'antd';
import { projects } from '../../staticData/data';
import { ProjectObjType } from "../../staticData/types"

const Projects: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [current, setCurrent] = useState<ProjectObjType | null>(null);



    const handleDrawer = (obj: ProjectObjType | null) => {
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