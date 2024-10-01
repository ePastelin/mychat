export default function Preview({
    headerText,
    bodyText,
    footerText,
    buttons,
  }) {
  
    return (
      <section className=" h-auto mt-6 py-6 rounded-2xl flex justify-center items-center">
        <div className="w-64 bg-blue-500 h-auto py-5 px-3 rounded-3xl shadow-dropshadow-message">
          {/* HEADER */}
          {headerText && (
            <p className="text-white text-sm mb-4">
              {headerText}
            </p>
          )}
  
          {/* BODY */}
          {bodyText && (
            <p className="text-white text-sm mb-4">
              {bodyText}
            </p>
          )}
  
          {/* FOOTER (Si existe) */}
          {footerText && (
            <p className="text-white text-sm mb-4">
              {footerText}
            </p>
          )}
  
          {/* BUTTONS */}
          {buttons && buttons.length > 0 &&
            buttons.map((button, index) => (
              <button
                key={index}
                className="mt-2 w-full bg-sendTemplate text-slate-100 font-medium px-4 py-2 rounded-full text-sm"
                onClick={() => handleButtonClick(button)}
              >
                {button.text || "Botón"}
              </button>
            ))}
        </div>
      </section>
    );
  }