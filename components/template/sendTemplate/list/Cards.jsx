import Card from './Card'
import templateFilter from '@/utils/TemplateFilter'

export default function Cards ({ templates, setId, setName, selectedStatus, selectedLanguage, selectedCategory, searchName }) {

    const filteredTemplates = templateFilter(templates, selectedStatus, selectedLanguage, selectedCategory, searchName);

    return (
        <ul className="grid grid-cols-3 gap-10">
            {filteredTemplates.map((template) => (
               <Card template={template} key={template.id} setId={setId} setName={setName}/> 
            ))}
        </ul>
    )
}