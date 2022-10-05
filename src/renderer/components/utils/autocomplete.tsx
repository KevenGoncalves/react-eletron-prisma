/* eslint-disable react/button-has-type */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable prefer-template */
/* eslint-disable object-shorthand */
import { useState } from 'react';
import AutoSuggest from 'react-autosuggest';

const companies = [
  { id: 1, name: 'Hamburguer' },
  { id: 2, name: 'Cafe' },
  { id: 3, name: 'Tosta' },
  { id: 4, name: 'Coca-Cola' },
  { id: 5, name: 'Frango' },
  { id: 6, name: 'Batata' },
  { id: 7, name: 'Hamburguer Completo' },
];

const lowerCasedCompanies = companies.map((company) => {
  return {
    id: company.id,
    name: company.name.toLowerCase(),
  };
});

const Autocomplete = () => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions]: any = useState([]);

  function getSuggestions(newValue: any) {
    return lowerCasedCompanies.filter((company) =>
      company.name.includes(newValue.trim().toLowerCase())
    );
  }

  return (
    <div className="flex w-full gap-4">
      <AutoSuggest
        suggestions={suggestions}
        onSuggestionsClearRequested={() => setSuggestions([])}
        onSuggestionsFetchRequested={({ value }: any) => {
          console.log(value);
          setValue(value);
          setSuggestions(getSuggestions(value));
        }}
        onSuggestionSelected={(_, { suggestionValue }) =>
          console.log('Selected: ' + suggestionValue)
        }
        getSuggestionValue={(suggestion: any) => suggestion.name}
        renderSuggestion={(suggestion: any) => <span>{suggestion.name}</span>}
        inputProps={{
          placeholder: 'Digite o Produto',
          className:
            'block w-full p-3 text-zinc-900 bg-white border-zinc-300  border rounded-md dark:bg-black dark:text-zinc-300 dark:border-zinc-600 focus:border-meisy dark:focus:border-meisy-secondary focus:ring-meisy focus:outline-none focus:ring dark:focus:ring-meisy-secondary focus:ring-opacity-40',
          value: value,
          onChange: (_, { newValue, method }) => {
            setValue(newValue);
          },
        }}
        highlightFirstSuggestion
      />
      <button className="flex bg-orange-400 text-white py-3 px-4 rounded-lg">
        Adicionar
        <i className="bi bi-plus-lg ml-1" />
      </button>
    </div>
  );
};

export default Autocomplete;
