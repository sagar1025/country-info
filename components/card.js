
//import Image from 'next/image'

export default function Card({ country }) {
    return (
        <div className="card">
            <div className="img-banner">
                <img
                    src={country.flags.svg}
                    alt={country.name.common}
                    className="country-img"
                    />
            </div>
            <div className="info">
                <h3>{country.name.common}</h3>

                <ul className="nolist">
                    <li><span className="bold">Population</span> {country.population.toLocaleString()}</li>
                    <li><span className="bold">Region</span> {country.region}</li>
                    <li><span className="bold">Capital</span> {country.capital}</li>
                </ul>
            </div>
        </div>
    )
}