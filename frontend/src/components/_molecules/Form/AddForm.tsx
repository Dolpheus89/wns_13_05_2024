import Input from '@/components/_atoms/Input/Input';
import styles from './AddForm.module.css'
import { ADD_COUNTRY } from '@/graphql/mutations/country';
import { useMutation } from '@apollo/client';
import { useState } from 'react';

export interface NewCountryInput {
  name: string;
  emoji: string;
  code: string;
  continent?: ''
}

export default function SearchForm() {
  
  const [formData, setFormData] = useState<NewCountryInput>({
    name: '',
    emoji: '',
    code: '',
    continent: ''
  });

  const [addCountry, { loading, error, data }] = useMutation(ADD_COUNTRY);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await addCountry({
        variables: {
          data: {
            name: formData.name,
            emoji: formData.emoji,
            code: formData.code,
            continent: formData.continent, 
          },
        },
      });

      setFormData({ name: '', emoji: '', code: '', continent: '' });
      window.location.reload();
    } catch (err) {
      console.error("Error adding country: ", err);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
<Input 
        name="name" 
        type="text" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <Input 
        name="emoji" 
        type="text" 
        value={formData.emoji} 
        onChange={handleChange} 
      />
      <Input 
        name="code" 
        type="text" 
        value={formData.code} 
        onChange={handleChange} 
      />
      <select 
        name="continent" 
        value={formData.continent} 
        onChange={handleSelectChange}
      >
        <option value="">Select a continent</option>
        <option value="1">Europe</option>
        <option value="2">Asia</option>
        <option value="3">Oceania</option>
        <option value="4">Africa</option>
        <option value="5">North America</option>
        <option value="6">South America</option>
      </select>
        <button className={styles.button} type="submit" disabled={loading}>Add</button>
        {error && <p>Error: {error.message}</p>}
        {data && <p>Country Added: {data.addCountry.name}</p>}
    </form>
  );
}
