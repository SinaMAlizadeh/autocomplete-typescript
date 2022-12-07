import Countries from '../components/countries';
import CountryDetails from '../components/countryDetails';
import UseSearchCountry from '../hooks/useSearchCountry';
import styles from '../styles/Home.module.scss';
export default function Home() {
  const {
    countries,
    setSearch,
    search,
    selectedCountry,
    setSelectedCountry,
    loading,
  } = UseSearchCountry();
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
