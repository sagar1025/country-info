
export async function Filter(region) {
    if (region && region.length > 0) {
        const data = await fetch(`https://restcountries.com/v3.1/region/${region}`);
        return await data.json();
    }
    return {};
}

export async function DoSearch(term) {
    if (term && term.length > 0) {
        const data = await fetch(`https://restcountries.com/v3.1/name/${term}?fullText=false`);
        return await data.json();
    }
    return {};
}