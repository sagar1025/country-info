import Layout from '../components/layout'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { GetCountryInfo } from '../apis/countryInfo';
import Borders from '../components/borders';

export default function CountryInfo(){
    const router = useRouter();
    const params = router.query;

    const [cca2, setCCA2] = useState(params && params.cca2 ? params.cca2 : '');
    const [apiResponse, setAPIresponse] = useState({});
    const [haveData, setHaveData] = useState(false);

    async function fetchCountryInfo() {
        try {
            if (cca2 && cca2.length > 0) {
                const resp = await GetCountryInfo(cca2);
                if (resp && resp !== null && resp.length > 0) {
                    setAPIresponse(resp[0]);
                    setHaveData(true);
                }
            }
        }
        catch(e){ console.log(e); setHaveData(false); }
    }

    useEffect(() => {
        cca2 && fetchCountryInfo();
    }, []);
    

    return (
        haveData
        ?
        <Layout>
            <Head>
                <title>{apiResponse.name}</title>
            </Head>
            <div className="flex country-flex">
                <div className="img-wrapper">
                    <img
                        src={apiResponse.flag}
                        alt={apiResponse.name}
                        className="country-img"
                    />
                </div>
                <div className="country-info">
                    <h2>{apiResponse.name}</h2>
                    <div className="flex list-info">
                        <ul className="nolist">
                            <li><span className="bold">Native Name: </span>{apiResponse.nativeName}</li>
                            <li><span className="bold">Population: </span>{apiResponse.population}</li>
                            <li><span className="bold">Region: </span>{apiResponse.region}</li>
                            <li><span className="bold">Sub Region: </span>{apiResponse.subregion}</li>
                            <li><span className="bold">Capital: </span>{apiResponse.capital}</li>
                        </ul>
                        <ul className="nolist">
                            <li><span className="bold">Currencies: </span>
                            { apiResponse.currencies && apiResponse.currencies.length > 1 ? apiResponse.currencies.join(', ') : apiResponse.currencies }
                            </li>
                            <li><span className="bold">Languages: </span>
                            { apiResponse.languages && apiResponse.languages.length > 1 ? apiResponse.languages.join(', ') : apiResponse.languages }
                            </li>
                        </ul>
                    </div>

                    <div className="border">
                        <span className="bold">Border Countries: </span>
                        {
                            apiResponse.borders && apiResponse.borders.length > 0  ?
                            <Borders cca3List={apiResponse.borders} />
                            : 'None'
                        }
                        
                    </div>
                </div>
            </div>
        </Layout>
        :
        <Layout>
            <div>
                <h1>No data found</h1>
            </div>
        </Layout>

    )
}
