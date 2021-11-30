
export default function Regions({handleRegionChange}) {

    return (
        <div className="select-wrapper">
            <select className="select-field" onChange={(e) => handleRegionChange(e)}>
                <option value="">Filter by Region</option>
                <option value="africa">Africa</option>
                <option value="america">America</option>
                <option value="asia">Asia</option>
                <option value="europe">Europe</option>
                <option value="oceania">Oceania</option>
            </select>
        </div>
    )
}