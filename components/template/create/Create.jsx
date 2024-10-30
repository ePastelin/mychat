"use client";
import { HeaderSection } from "./Section";
import { BodySection } from "./Section";
import { FooterSection } from "./Section";
import ButtonsSection from "./ButtonsSection";
import Preview from "./Preview";
import useTemplate from "@/hooks/useTemplate";
import SelectOptions from "./SelectOptions";
import { AiOutlineLoading } from "react-icons/ai"; 
import { ButtonNav } from "@/components/common/Button";

export default function Create({ setScreen }) {
  const {
    templateName,
    setTemplateName,
    setLanguage,
    setCategory,
    handleSendTemplate,
    sent,
    isLoading, 
    isSuccess, 
    headerProps,
    bodyProps,
    footerProps,
    buttonsProps,
    language,
    category,
  } = useTemplate();

  const isFormValid = () => {
    return (
      templateName.trim() !== "" &&
      bodyProps.bodyText.trim() !== "" &&
      headerProps.headerText.trim() !== "" &&
      language &&
      category
    );
  };

  return (
    <>
      <div className="md:col-span-7 pl-4 content-center">
        <ButtonNav setScreen={setScreen} screen={2}>
          Regresar
        </ButtonNav>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 gap-y-10">
          <HeaderSection {...headerProps} />
          <BodySection {...bodyProps} />
          <FooterSection {...footerProps} />
          <ButtonsSection {...buttonsProps} />
        </div>

        {sent && (
          <p className="mt-4 text-green-500">¡Plantilla enviada con éxito!</p>
        )}
      </div>

      <section className="md:col-span-4 flex-col items-center px-6 mt-4">
        <SelectOptions setLanguage={setLanguage} setCategory={setCategory} />

        <Preview
          {...headerProps}
          {...bodyProps}
          {...footerProps}
          buttons={buttonsProps.buttons}
        />

        <input
          type="text"
          placeholder="Nombre de la plantilla"
          value={templateName}
          onChange={(e) => setTemplateName(e.target.value)}
          className="template_input mt-6"
        />

        {/* Botón con estado dinámico */}
        <button
          className={`mt-12 text-white px-4 py-2 rounded justify-self-end transition ease-in-out delay-150 duration-300
            ${
              isLoading
                ? "bg-gray-400 cursor-not-allowed"
                : isSuccess
                  ? "bg-green-500 hover:bg-green-600"
                  : !isFormValid()
                    ? "bg-blue-500 opacity-50 cursor-not-allowed"
                    : "bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
            }
          `}
          onClick={handleSendTemplate}
          disabled={isLoading || !isFormValid()} // Deshabilitar si está cargando o si el formulario no es válido
        >
          {isLoading ? (
            <AiOutlineLoading className="animate-spin h-5 w-5 mr-3 text-white" />
          ) : isSuccess ? (
            <span>&#x2714; Enviado</span>
          ) : (
            "Crear plantilla"
          )}
        </button>
      </section>
    </>
  );
}
