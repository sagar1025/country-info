
export async function GetCountryInfo(codes) {
    if (codes && codes.length > 0) {
        const response = await fetch(`https://restcountries.com/v3.1/alpha?codes=${codes}`);
        const data = await response.json();
        if (data && Array.isArray(data) && data.length > 0) {
            const res = [];
            data.forEach((el) => {
                res.push(
                    {
                        name: el.name.common ? el.name.common : '',
                        flag: el.flags && el.flags.svg ? el.flags.svg : '',
                        nativeName: el.name.nativeName && el.name.nativeName[Object.keys(el.name.nativeName)[0]] && el.name.nativeName[Object.keys(el.name.nativeName)[0]].common ?  
                                    el.name.nativeName[Object.keys(el.name.nativeName)[0]].common 
                                    : '',
                        population:  el.population ? el.population.toLocaleString() : '',
                        region: el.region ? el.region : '',
                        subregion: el.subregion ? el.subregion : '',
                        capital: el.capital && el.capital.length > 0 ? el.capital[0] : '',
                        currencies:  el.currencies ? (() => {
                                       const x = []
                                       Object.keys(el.currencies).map((key) => {
                                           x.push(el.currencies[key].name)
                                       });
                                       return x;
                                     })() : [],
                        languages: el.languages ?  (() => {
                                     const x = []
                                     Object.keys(el.languages).map((key) => {
                                         x.push(el.languages[key])
                                     });
                                     return x;
                                   })() : [],
                        borders: el.borders && el.borders.length > 0 ? el.borders : []
                    }
                )
            });
            return res;
        }
    }
    return null;
}