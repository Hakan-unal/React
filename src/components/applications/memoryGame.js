import React from "react";
import { Row, Col, Card } from "react-bootstrap";

class MemoryGame extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
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
                <Col className="mt-2" sm={{ span: 3 }} md={{ span: 3 }} lg={{ span: 3 }} xl={{ span: 3 }} key={index}>
                    <Card className={this.state["card" + index] ? "bg-dark" : "bg-light"} style={{ width: 100, height: 100 }} onMouseEnter={() => this.mouseEnterCard(index)} onMouseLeave={() => this.mouseExitCard(index)}>
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