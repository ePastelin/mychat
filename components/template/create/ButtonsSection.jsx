import { RemoveButton } from "./RemoveButton";

export default function ButtonsSection({ buttons, handleAddButton, handleButtonChange, removeButton }) {
  return (
    <section>
      <h3 className="component">Agregar botón</h3>
      {buttons.map((button, index) => (
        <div key={index} className="mt-2 flex flex-col">
          <input
            type="text"
            placeholder="Texto del botón"
            value={button.text}
            onChange={(e) => handleButtonChange(index, "text", e.target.value)}
            className="template_input"
            disabled={index === 0 && true}
          />
          <select
            value={button.type}
            onChange={(e) => handleButtonChange(index, "type", e.target.value)}
            className="template_input"
            disabled={index === 0 && true}
          >
            <option value="">Seleccionar tipo de botón</option>
            <option value="PHONE_NUMBER">Llamar</option> {/* Cambiado a PHONE_NUMBER */}
            <option value="URL">Abrir URL</option> {/* Cambiado a URL */}
            <option value="QUICK_REPLY">Respuesta rápida</option>
          </select>
          {button.type === "PHONE_NUMBER" /* Cambiado para que coincida con PHONE_NUMBER */ && (
            <input
              type="tel"
              placeholder="Número de teléfono"
              value={button.phoneNumber}
              onChange={(e) => handleButtonChange(index, "phoneNumber", e.target.value)}
              className="template_input"
            />
          )}
          {button.type === "URL" /* Cambiado para que coincida con URL */ && (
            <input
              type="url"
              placeholder="URL"
              value={button.url}
              onChange={(e) => handleButtonChange(index, "url", e.target.value)}
              className="template_input"
            />
          )}
          {index > 0 && <RemoveButton label="Eliminar botón" parentMethod={() => removeButton(index)} />}
        </div>
      ))}
      <button className="add_variable" onClick={handleAddButton}>
        +
      </button>
    </section>
  );
}
