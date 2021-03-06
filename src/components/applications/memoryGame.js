import React from "react";
import { Row, Col, Card } from "react-bootstrap";

class MemoryGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [1, 2, 3, 4, 5, 6, 7, 8, 9]
        };
    }
    mouseExitCard = (cardIndex) => {
        this.setState({ ["card" + cardIndex]: false })
    }
    mouseEnterCard = (cardIndex) => {
        this.setState({ ["card" + cardIndex]: true })
    }
    render() {
        const cards = this.state.cards.map((card, index) => {
            return (
                <Col className="mt-2 d-flex justify-content-center" xs={{ span: 4 }} sm={{ span: 4 }} md={{ span: 4 }} lg={{ span: 4 }} xl={{ span: 4 }} key={index}>
                    <Card className={this.state["card" + index] ? "bg-dark" : "bg-light"} style={{ width: 85, height: 85 }} onMouseEnter={() => this.mouseEnterCard(index)} onMouseLeave={() => this.mouseExitCard(index)}>
                        <Card.Body>
                            <Card.Title className="text-center"></Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            )
        })

        return (
            <>
                <Row className="mt-3">
                    {cards}
                </Row>

            </>
        );
    }
}

export default MemoryGame;