import { render } from '@testing-library/react';
import react from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
class HornedBeast extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            favorited: 0
        }
    }
    Handlclick = () => {
        this.setState({
            favorited: this.state.favorited + 1
        });
    }
    render() {
        return (

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={this.props.imgUrl } onClick={this.Handlclick} />
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.description} </Card.Text>
                    <Button  variant="primary">{this.state.favorited}</Button>
                </Card.Body>
            </Card>
        )
    }
}
export default HornedBeast;