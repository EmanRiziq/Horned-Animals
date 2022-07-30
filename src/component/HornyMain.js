import react from 'react';
import HornedBeast from './HornedBeast';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form'


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
    filterData =(e)=>
    {
        this.props.filterBeast(e);
    }
    render() {

        return (
            <>

                <Form.Group className="mb-3">
                    <Form.Label htmlFor="HornsNum">Choose a number</Form.Label>
                    <Form.Select id="HornsNum" onChange={this.filterData}>
                        <option value="">All</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>100 </option>
                    </Form.Select>
                </Form.Group>
                <Row xs={1} md={3} className="g-4">
                    {
                        this.props.allBeast.map(item =>
                            <Col>
                                <HornedBeast title={item.title} image_url={item.image_url} description={item.description} displayModal={this.props.displayModal} data={item} />
                            </Col>

                        )}
                </Row>
            </>
        )
    }
}
export default HornyMain;