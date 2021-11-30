
import Card from './card';

export default function CardList({countries}) {
    return (
        countries && countries.length > 0
        ?
            <div className="wrapper">
            {
                countries.map((country) => <Card className="card" country={country} />)
            }
            </div>
        :
        <>
            <h1>Data not found</h1>
        </>
    )
}