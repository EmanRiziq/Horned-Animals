import { render } from '@testing-library/react';
import react from 'react';
import Button from 'react-bootstrap/Button';
import MyCard from './Card';
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
            <div>
                <MyCard { Body : {
                    Title: { this.props.title } 
                         Text: { this.props.description } 

                    }}
               
                    
                    />
                />
            </div>
        )
    }
}
export default HornedBeast;