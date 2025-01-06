import Link from "next/link";
import styles from './CountryButton.module.css'

interface CountryButtonProps {
    countryFlag: string
    name: string
    id: string
}

export default function CountryButton({countryFlag, name, id}: CountryButtonProps) {
  return (
    <Link href={`/country/${id}`} className={styles.countryButton}>
      <span className="label">{name}</span>
      <span>{countryFlag}</span>
    </Link>
  );
}
