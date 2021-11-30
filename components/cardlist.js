
import Card from './card';

export default function CardList({countries}) {
    return (
        countries && countries.length > 0
        ?
            <div className="wrapper">
            {
                countries.map((country, idx) => <Card className="card" country={country} key={idx} />)
            }
            </div>
        :
        <>
            <h1>Data not found</h1>
        </>
    )
}