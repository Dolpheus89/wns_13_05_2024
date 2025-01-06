import Input from '@/components/_atoms/Input/Input';
import styles from './SearchForm.module.css'

export default function SearchForm() {
  return (
    <form className={styles.form}>
        <Input name='Name' type='text' />
        <Input name='Emoji' type='text' />
        <Input name='Code' type='text' />
        <button className={styles.button}>Add</button>
    </form>
  );
}
