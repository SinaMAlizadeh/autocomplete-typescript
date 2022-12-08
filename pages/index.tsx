import {GetServerSideProps} from 'next';
import Countries from '../components/countries';
import CountryDetails from '../components/countryDetails';
import UseSearchCountry from '../hooks/useSearchCountry';
import styles from '../styles/Home.module.scss';
import {getIpInformation} from '../sevices/getIp';
export default function Home({location}: {location: ILocation}) {
  debugger;
  const {
    countries,
    setSearch,
    search,
    selectedCountry,
    setSelectedCountry,
    loading,
  } = UseSearchCountry(location);
  return (
    <>
      <div className={styles.home}>
        <Countries
          countries={countries}
          setSearch={setSearch}
          search={search}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          loading={loading}
        />
        {selectedCountry && (
          <CountryDetails selectedCountry={selectedCountry} />
        )}
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const info = await getIpInformation();
  const location: ILocation = {
    lat: info.lat,
    lng: info.lon,
  };
  return {props: {location: location}};
};
