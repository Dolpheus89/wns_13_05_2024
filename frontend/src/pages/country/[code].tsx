import { useRouter } from "next/router"
import { useQuery } from '@apollo/client';
import { GET_COUNTRY_BY_CODE } from "@/graphql/queries/countries";
import type { Country } from "../index";

export default function CountryDetails (){
    const router = useRouter()
    const { code } = router.query;

    if (!code) return <p>Loading...</p>;

    const { loading, error, data } = useQuery<{ country: Country }>(GET_COUNTRY_BY_CODE, {
        variables: { code: code as string },
      });

      if (loading) return <p>Loading country details...</p>;
      if (error) return <p>Error: {error.message}</p>;
    
      const { country } = data!;

    return (
        <div className="countryContainer">
            <h1>{country.name} {country.emoji}</h1>
            <p><strong>Continent:</strong> {country.continent.name}</p>
            <p><strong>Code:</strong> {country.code}</p>
            <p><strong>Flag:</strong> {country.emoji}</p>
        </div>
    )
}