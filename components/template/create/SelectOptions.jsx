import { useState } from 'react';
import Select from 'react-select';
import { languages, categories } from "@/constants/template";

export default function SelectOptions({ setLanguage, setCategory }) {
  const languageOptions = languages.map(lang => ({
    value: lang.code,
    label: lang.language
  }));

  const categoryOptions = categories.map(cat => ({
    value: cat.value,
    label: cat.name
  }));

  const handleLanguageChange = (selectedOption) => {
    setLanguage(selectedOption ? selectedOption.value : '');
  };

  const handleCategoryChange = (selectedOption) => {
    setCategory(selectedOption ? selectedOption.value : '');
  };

  return (
    <section className="flex mt-4">
      <div className="w-1/2 mr-2">
        <Select
          placeholder="Buscar idioma..."
          options={languageOptions}
          onChange={handleLanguageChange}
          isClearable
          className="template_select"
        />
      </div>

      <div className="w-1/2">
        <Select
          placeholder="Categoría"
          options={categoryOptions}
          onChange={handleCategoryChange}
          isClearable
          className="template_select"
        />
      </div>
    </section>
  );
}

