export default function Preview({
  headerText,
  headerParams,
  bodyText,
  bodyParams,
  footerText,
  buttons,
}) {
  const replaceVariables = (text, params) => {
    let result = text;

    if (params && Array.isArray(params)) {
      params.forEach((param, index) => {
        const placeholder = `{{${index + 1}}}`; // Los placeholders son de la forma {{1}}, {{2}}, etc.
        result = result.replace(placeholder, param || placeholder); // Reemplaza o deja el placeholder si no hay valor
      });
    }

    return result;
  };

  return (
    <section className="bg-chatBackground h-auto mt-6 py-6 rounded-2xl flex justify-center items-center">
      <div className=" w-64 bg-blue-500 h-auto py-5 px-3 rounded-3xl shadow-dropshadow-message">
        {/* Header Preview */}
        {headerText && (
          <p className="text-white text-sm mb-4">
            {replaceVariables(headerText, headerParams)}
          </p>
        )}

        {/* Body Preview */}
        {bodyText && (
          <p className="text-white text-sm mb-4">
            {replaceVariables(bodyText, bodyParams)}
          </p>
        )}

        {/* Footer Preview */}
        {footerText && (
          <p className="text-white text-sm mb-4">{footerText}</p>
        )}

        {/* Buttons */}
        {buttons &&
          buttons.map((button, index) => (
            <button
              key={index}
              className="mt-2 w-full bg-sendTemplate text-slate-100 font-medium px-4 py-2 rounded-full text-sm"
              onClick={() => console.log("Simulación del click del botón")}
            >
              {button.text || "Botón"}
            </button>
          ))}
      </div>
    </section>
  );
}

