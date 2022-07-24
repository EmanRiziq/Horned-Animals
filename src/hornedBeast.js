import { render } from '@testing-library/react';
import react from 'react';
class hornedBeast extends react.Component {
    render() {
        return (
            <div className='HornedBeast'>
                {this.props.value}
            <h2> {this.props.name}</h2>
            <img  src={'this.props.srcimg'}></img>
            <p> {this.props.disc}</p>
            </div>
        )
    }
}
export default hornedBeast;