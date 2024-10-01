export default function Preview({
    headerText,
    headerExamples,
    bodyText,
    bodyExamples,
    footerText,
    footerExamples,
    buttons,
  }) {
    const replaceVariables = (text, examples) => {
      let result = text;
  
      if (examples && typeof examples === "object") {
        Object.keys(examples).forEach((key) => {
          const regex = `{{${key}}}`;
          result = result.replace(regex, examples[key] || `{{${key}}}`);
        });
      }
  
      return result;
    };
  
    return (
      <section className="bg-chatBackground h-auto mt-6 py-6 rounded-2xl flex justify-center items-center">
        <div className=" w-64 bg-blue-500 h-auto py-5 px-3 rounded-3xl shadow-dropshadow-message">
          <p className="text-white text-sm mb-4">
            {replaceVariables(headerText, headerExamples)}
          </p>
  
          <p className="text-white text-sm mb-4">
            {replaceVariables(bodyText, bodyExamples)}
          </p>
  
          <p className="text-white text-sm mb-4">
            {replaceVariables(footerText, footerExamples)}
          </p>
  
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