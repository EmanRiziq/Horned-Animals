import react from 'react';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HornyMain extends react.Component {
    render() {
        return (
            <Row xs={1} md={3} className="g-4">
                {
                    this.props.allBeast.map(item =>
                        <Col>
                            <HornedBeast title={item.title} image_url={item.image_url} description={item.description} displayModal={this.props.displayModal} data={item} />
                        </Col>

                    )}
            </Row>
        )
    }
}
export default HornyMain;