import { stockData } from "../Data/Data.json";

export default function App() {
    return (
    <div className="App">
            {stockData.map((data, key) => {
                return <h1 key={key}>{data.company}</h1>;
            })}
        </div>
    );
}