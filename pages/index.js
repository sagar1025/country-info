import { useState } from 'react'
import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import Search from '../components/search'
import Regions from '../components/regions'
import CardList from '../components/cardlist'
import {Filter, DoSearch} from '../apis/filter'

function Home({ countries }) {
  const [region, setRegion] = useState('');
  const [currentCountries, setCountries] = useState(countries);
  const allCountries = countries;//store all countries on page load

  const handleRegionChange = async (v) => {
    if(v && v.target && v.target.value) {
      setRegion(v.target.value);
      const filteredCountries = await Filter(v.target.value);
      setCountries(filteredCountries && filteredCountries.length > 0 ? filteredCountries : allCountries);
    }
    else {
      setCountries(allCountries);//no option selected
    }
  }

  const handleSearch = async (term) => {
    if (term && term.length >= 3) {
      //only look for terms > 3
      const countries = await DoSearch(term.toLowerCase());
      setCountries(countries && countries.length > 0 ? countries : allCountries);
    }
    else {
      setCountries(allCountries);//no option selected
    }
  }

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section style={{marginTop: '35px'}}>
        <div className="flex topbar">
          <Search handleSearch={handleSearch} />
          <Regions handleRegionChange={handleRegionChange}  />
        </div>
      </section>
      <section>
        <CardList countries={currentCountries} />
      </section>
    </Layout>
  )
}

//load all countries on loage load
export async function getStaticProps(){
  const data = await fetch('https://restcountries.com/v3.1/all');
  const countries = await data.json();

  return {
    props: {
      countries
    }
  }
}

export default Home