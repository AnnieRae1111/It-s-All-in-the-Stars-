    import {
    Col,
    CardColumns,
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    } from 'reactstrap';

    const HoroscopeCard = ({
    sign,
    image,
    description,
    date_range,
    current_date,
    compatibility,
    }) => {
    return (
        <Col>
        <CardColumns>
            <Card className="horoscope-card">
            <CardImg alt="Card image cap" src={image} top width="100%" />
            <CardBody>
                <CardTitle tag="h5">
                <strong>Sign:</strong> {sign}
                </CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                <strong>Current Date:</strong> {current_date}
                </CardSubtitle>
                <CardText>
                <strong>Date Range:</strong> {date_range}
                </CardText>
                <CardText>
                <strong>Compatibility:</strong> {compatibility}
                </CardText>
                <CardText>
                <strong>Description:</strong> {description}
                </CardText>
            </CardBody>
            </Card>
        </CardColumns>
        </Col>
    );
    };

    export default HoroscopeCard;
