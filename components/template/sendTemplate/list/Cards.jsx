import Card from './Card'

export default function Cards ({ templates, setId, setName }) {

    return (
        <ul className="grid grid-cols-3 gap-10">
            {templates.map((template) => (
               <Card template={template} key={template.id} setId={setId} setName={setName}/> 
            ))}
        </ul>
    )
}