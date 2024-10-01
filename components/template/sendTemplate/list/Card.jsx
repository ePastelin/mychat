import { formatName } from '@/utils/nameFormat'
import StatusBadge from './StatusBadge'
import Preview from './Preview'
import Send from './Send'

export default function Card({ template, setId, setName }) {
    const { language_name, id, name, category_name, status_name, header, body, footer, buttons} = template
    return (
    <li key={id} className="rounded-md h-auto shadow-dropshadow-message flex-col items-center justify-center gap-12 py-8 px-8 animate-slideUp">
        <div className="flex justify-between">
        <h3 className="text-title text-lg">{formatName(name)}</h3>
        <StatusBadge status={status_name}/>
        </div>
        <div className="flex flex-col">
            <p className=' text-text-100'>{language_name}</p>
            <p className=' text-text-50'>{category_name}</p>
        </div>
        <Preview headerText={header} bodyText={body} footerText={footer} buttons={buttons}/>
        <Send status={status_name} setId={setId} id={id} setName={setName} name={name}/>
    </li>

    )
}