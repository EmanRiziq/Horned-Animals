import react from 'react';
import HornedBeast from './HornedBeast';

class HornyMain extends react.Component {
    constructor(props) {
        super(props);
        this.ReadJson();
    }

    ReadJson() {
        const jData = require('../Data/Data.json');
        const Jsonarr = [];

        jData.forEach((element, index) => {
            Jsonarr.push(<HornedBeast title={element.title} imageUrl={element.image_url} description={element.description}
                key={index} />);
        });
    }


    render() {
        return (
            <>
              
                <div className='animaldiv'>
                    <p> test</p>
                    <HornedBeast title={"title1"} srcimg={'src/assets/animal1.jpg'} name={"Animal1"} disc=" this is animal 1" />
                </div>
                <div className='animaldiv'>
                    <HornedBeast title={"title2"} srcimg={'src/assets/animal1.jpg'} name={"Animal2"} disc=" this is animal 2" />
                </div>
            </>)

    }
}



export default HornyMain;