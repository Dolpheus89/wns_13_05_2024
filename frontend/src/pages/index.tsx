import CountryButton from "@/components/_atoms/CountryButton/CountryButton";
import SearchForm from "@/components/_molecules/Form/SearchForm";
import { useQuery } from '@apollo/client';
import { GET_ALL_COUNTRIES } from "@/graphql/queries/countries";

export interface Country {
  id: string;
  name: string;
  emoji: string;
  code: string;
}

export default function Home() {
  const { loading, error, data } = useQuery<{ countries: Country[] }>(GET_ALL_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);

  if (!data || !data.countries || data.countries.length === 0) {
    return <p>No countries found.</p>;
  }

  return (
    <>
      <SearchForm/>
      <div className="countriesContainer">
        {data.countries.map((country:Country) => (
            <CountryButton key={country.id} id={country.id} name={country.name} countryFlag={country.emoji}/>
        ))}
      </div>
    </>
  );
}
