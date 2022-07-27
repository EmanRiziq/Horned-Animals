import react from 'react';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HornyMain extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            arr: []
        }
    }
    setarr = () => {
        this.setState({
            arr: this.props.allBeast.filter(horn => horn == 1)
        });
        console.log(this.props.allBeast);
        console.log(this.state.arr);

    }
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