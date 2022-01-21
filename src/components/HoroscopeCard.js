import { 
    Container, 
    Row, 
    Col, 
    CardColumns, 
    Card, 
    CardImg, 
    CardBody, 
    CardTitle, 
    CardSubtitle,
    CardText 

}
from 'reactstrap'

const HoroscopeCard = ({sign, mood, image, description, date_range, current_date, compatibility, color }) => {
    
    return(
        <Container>
        <Row>
        <Col xl="4" > 
        <CardColumns>
            <Card className="horoscope-card">
                <CardImg
                alt="Card image cap"
                src= {image}
                top
                width="100%"
                />
                <CardBody>
                <CardTitle tag="h5">
                    <strong>Sign:</strong> {sign}
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                <strong>Compatibility:</strong> {compatibility}
                </CardSubtitle>
                <CardText>
                    <strong>Date Range:</strong> {date_range}
                </CardText>
                <CardText>
                    <strong>Description:</strong> {description}
                </CardText>
                </CardBody>
        </Card>
        <Card> 
        </Card>
        </CardColumns>
    
        </Col>
        </Row>
        </Container>

    )
}

export default HoroscopeCard