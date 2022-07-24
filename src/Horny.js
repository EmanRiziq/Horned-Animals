import react from 'react';
import hornedBeast from './hornedBeast';

class Horny extends react.Component {
    render() {
        return (
            <>
                {
                    console.log("this is Horny")}
                <div className='animaldiv'>
                    <hornedBeast value={"title1"} srcimg={'./assets/animal1.jpg'} name={"Animal1"} disc=" this is animal 1" />
                </div>
                <div className='animaldiv'>
                    <hornedBeast value={"title2"} srcimg={'./assets/animal2.jpg'} name={"Animal2"} disc=" this is animal 2" />
                </div>
            </>)

    }
}

export default Horny;