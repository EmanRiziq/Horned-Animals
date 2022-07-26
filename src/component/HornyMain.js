import react from 'react';
import HornedBeast from './HornedBeast';
import data from './data.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HornyMain extends react.Component {
    render() {
        return (
            <Row xs={1} md={3} className="g-4">
                {
                    data.map(item =>
                        <Col>
                            <HornedBeast title={item.title} imgUrl={item.image_url} description={item.description} />
                        </Col>
                    )
                }
            </Row>
        )
    }
}
export default HornyMain;