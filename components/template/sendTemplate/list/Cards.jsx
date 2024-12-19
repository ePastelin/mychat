import Card from './Card'
import templateFilter from '@/utils/templateFilter'

export default function Cards({ templates, setId, setName, selectedStatus, selectedLanguage, selectedCategory, searchName }) {
  const filteredTemplates = templateFilter(templates, selectedStatus, selectedLanguage, selectedCategory, searchName)

  return (
    <ul className='sendTemplate__list-cards scrollbar-hidden scroll-smooth'>
      {filteredTemplates.map((template) => (
        <Card template={template} key={template.id} setId={setId} setName={setName} />
      ))}
    </ul>
  )
}
