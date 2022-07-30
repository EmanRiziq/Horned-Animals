import { render } from '@testing-library/react'
import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Formc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            HornsNum :0
           
        }}
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            HornsNum: parseInt(e.target.HornsNum.value,10),
        });
        // console.log(e.target.HornsNum.value , "    ",this.state.HornsNum);
        this.props.getHornsNum(this.state.HornsNum);
    }
    render() {
        return (
            <>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="HornsNum">Choose a number</Form.Label>
                        <Form.Select id="HornsNum">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>

                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </>
        )
    }
}
export default Formc