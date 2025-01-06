import { ChangeEvent } from "react";
import styles from './Input.module.css';

interface InputProps {
  name: string;
  type: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ name, type, value, onChange }: InputProps) {
  return (
    <>
      <label htmlFor={name} className={styles.label}>{name}</label>
      <input 
        name={name} 
        type={type} 
        className={styles.input} 
        value={value} 
        onChange={onChange} 
      />
    </>
  );
}