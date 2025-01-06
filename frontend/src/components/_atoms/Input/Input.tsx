import styles from './Input.module.css';

interface InputProps {
  name: string;
  type: string;
}

export default function Input({ name, type }: InputProps) {
  return (
    <>
      <label htmlFor={name} className={styles.label}>{name}</label>
      <input name={name} type={type} className={styles.input}/>
    </>
  );
}
