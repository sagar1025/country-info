import { useState, useEffect } from 'react';
import { GetCountryInfo } from "../apis/countryInfo";

export default function Borders({cca3List}) {
    const [borders, setBorders] = useState(cca3List || []);

    async function fetchCountryInfo() {
        try {
            if (cca3List && Array.isArray(cca3List) && cca3List.length > 0) {
                const resp = await GetCountryInfo(borders.join(','));
                if (resp && resp !== null && resp.length > 0) {
                    setBorders(resp);
                }
            }
        }
        catch(e){ console.log(e); }
    }

    useEffect(() => {
        fetchCountryInfo()
    }, []);

    return(
        <ul className="nolist inline-list">
            {
                borders && borders.length > 0 ?
                borders.map((el, ix) => {
                    return <li className="border-c" key={ix}>{el.name}</li>;
                })
                :
                ''
            }
        </ul>
    )
}