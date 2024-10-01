function Section({
  text,
  setText,
  examples,
  setExamples,
  handleAddVariable,
  handleRemoveVariable,
  handleExampleChange,
  name,
  allowVariables = true, // Añade la opción por defecto para permitir variables
}) {
  return (
    <section className="h-96 relative overflow-y-auto">
      <h3 className="component">{name}</h3>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="text_area"
      />
      
      {allowVariables && (
        <>
          <p className="variables">Variables</p>

          {Object.keys(examples).map((key) => (
            <div key={key} className="variables_container">
              <input
                type="text"
                placeholder={`Ejemplo para variable {{${key}}}`}
                value={examples[key]}
                onChange={(e) =>
                  handleExampleChange(key, e.target.value, setExamples, examples)
                }
              />
              <button
                onClick={() =>
                  handleRemoveVariable(setText, text, setExamples, examples, key)
                }
              >
                -
              </button>
            </div>
          ))}

          <button
            className="add_variable"
            onClick={() => handleAddVariable(setText, text, setExamples, examples)}
          >
            +
          </button>
        </>
      )}
    </section>
  );
}

export function HeaderSection({
  headerText,
  setHeaderText,
  headerExamples,
  setHeaderExamples,
  handleAddVariable,
  handleRemoveVariable,
  handleExampleChange,
}) {
  return (
    <Section
      text={headerText}
      setText={setHeaderText}
      examples={headerExamples}
      setExamples={setHeaderExamples}
      handleAddVariable={handleAddVariable}
      handleRemoveVariable={handleRemoveVariable}
      handleExampleChange={handleExampleChange}
      name="Agregar encabezado"
    />
  );
}

export function BodySection({
  bodyText,
  setBodyText,
  bodyExamples,
  setBodyExamples,
  handleAddVariable,
  handleRemoveVariable,
  handleExampleChange,
}) {
  return (
    <Section
      text={bodyText}
      setText={setBodyText}
      examples={bodyExamples}
      setExamples={setBodyExamples}
      handleAddVariable={handleAddVariable}
      handleRemoveVariable={handleRemoveVariable}
      handleExampleChange={handleExampleChange}
      name="Agregar cuerpo"
    />
  );
}

export function FooterSection({
  footerText,
  setFooterText,
  footerExamples,
  setFooterExamples,
  handleAddVariable,
  handleRemoveVariable,
  handleExampleChange,
}) {
  return (
    <Section
      text={footerText}
      setText={setFooterText}
      examples={footerExamples}
      setExamples={setFooterExamples}
      handleAddVariable={handleAddVariable}
      handleRemoveVariable={handleRemoveVariable}
      handleExampleChange={handleExampleChange}
      name="Agregar pie de página"
      allowVariables={false}
    />
  );
}
