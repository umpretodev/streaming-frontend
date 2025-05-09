import { Card, Col, Container, Row } from "react-bootstrap"
import styles from './SubscriptionContainerComponent.module.css'

function SubscriptionContainerComponent({ children }) {
    return (
            <Container className='d-flex align-items-center justify-content-center vh-100'>
                <Card className={`${styles.shadowMargin}`}>
                    <Row>
                        <Col className='p-5 mx-5'>
                            {children}
                        </Col>

                        <Col className={styles.background}></Col>a
                    </Row>
                </Card>
            </Container>
    )

}

export default SubscriptionContainerComponent
