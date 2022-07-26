import react from 'react';
import Nav1 from './navbar';

import { renderIntoDocument } from 'react-dom/test-utils';
class Headerc extends react.Component {
    render() {
        return (
        <>
        <Nav1/>
        <h1> Welcome to my first React project </h1>
        </>)

    }
}



export default Headerc;