"use client";

import { fetcher } from "@/hooks/api/fetcher.ts";
import { useState } from "react";
import Form from "./form/Form";
import Cards from "./list/Cards";
import useSWR from "swr";
import Select from "react-select";
import { formatName } from "@/utils/nameFormat";
import { Autocomplete, TextField } from "@mui/material";

export default function SendTemplate({ setScreen }) {
  const API = process.env.NEXT_PUBLIC_API_ROUTE;
  const [templates, setTemplates] = useState([]);
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [languages, setLanguages] = useState();
  const [categories, setCategories] = useState();
  const [status, setStatus] = useState();
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchName, setSearchName] = useState("");

  useSWR(`${API}/templates`, fetcher, {
    onSuccess: (data) => {
      setTemplates(data.templates);
      setLanguages(data.languages);
      setCategories(data.categories);
      setStatus(data.status);
    },
  });

  return (
    <>
      <div className="md:col-span-8 justify-center mt-12">
        <div className="flex">
          <Select
            placeholder="Filtrar por estado..."
            options={status}
            onChange={(option) =>
              setSelectedStatus(option ? option.value : null)
            }
            isClearable
            className="template_select mb-4"
          />

          {/* Select para filtrar por idioma */}
          <Select
            placeholder="Filtrar por idioma..."
            options={languages}
            onChange={(option) =>
              setSelectedLanguage(option ? option.value : null)
            }
            isClearable
            className="template_select mb-4"
          />

          {/* Select para filtrar por categoría */}
          <Select
            placeholder="Filtrar por categoría..."
            options={categories}
            onChange={(option) =>
              setSelectedCategory(option ? option.value : null)
            }
            isClearable
            className="template_select mb-4"
          />

          <Autocomplete
            options={templates}
            getOptionLabel={(option) => formatName(option.name)}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Nombre" />}
            onChange={(e, v) => setSearchName(formatName(v ? v.name : ""))}
          />
        </div>
        {/* Select para filtrar por status */}

        <button
          onClick={() => setScreen(4)}
          className=" bg-blue-500 text-white rounded-md p-1 mb-4 text-sm transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
        >
          Crear Plantilla
        </button>

        {/* Pasar los filtros al componente Cards */}
        <Cards
          templates={templates}
          setId={setId}
          setName={setName}
          selectedStatus={selectedStatus}
          selectedLanguage={selectedLanguage}
          selectedCategory={selectedCategory}
          searchName={searchName}
        />
      </div>
      {id && <Form id={id} name={name} />}
    </>
  );
}
