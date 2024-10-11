    import { formatName } from "./nameFormat";

    export default function templateFilter(templates, selectedStatus, selectedLanguage, selectedCategory, searchName) {
    return templates.filter((template) => {
      return (
        (!selectedStatus || template.status_name === selectedStatus) &&
        (!selectedLanguage || template.language_name === selectedLanguage) &&
        (!selectedCategory || template.category_name === selectedCategory) &&
        (!searchName || formatName(template.name).toLowerCase().includes(searchName.toLowerCase())) // Filtrado por nombre
      );
    });
  }