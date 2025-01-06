import Link from "next/link";
import styles from './CountryButton.module.css'

interface CountryButtonProps {
    countryFlag: string
    name: string
    code: string
}

export default function CountryButton({countryFlag, name, code}: CountryButtonProps) {
  return (
    <Link href={`/country/${code}`} className={styles.countryButton}>
      <span className="label">{name}</span>
      <span>{countryFlag}</span>
    </Link>
  );
}
