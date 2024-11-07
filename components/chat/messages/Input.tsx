import { IoMdAttach, IoMdSend } from "react-icons/io";
import Sender from "./Sender";
import { InputProps } from "@/types/common/chat";

export default function Input({
  message,
  setMessage,
  handleSendMessage,
  adjustTextareaHeight,
  textareaRef,
  handleSendMultimedia,
  isActive,
}: InputProps) {
  const handleFileUpload = async (e: any) => {
    console.log("Entrando a file Ipload");
    const file = e.target.files[0]; // Obtener el archivo seleccionado

    if (file) {
      console.log(file);

      const res = await handleSendMultimedia(file);
      console.log(res);
      e.target.value = null;
    }
  };

  return (
    <div className="flex items-center p-2 relative">
      <Sender
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
        adjustTextareaHeight={adjustTextareaHeight}
        textareaRef={textareaRef}
        isActive={isActive}
      />
      <label htmlFor="fileInput">
        <IoMdAttach className="attach hover:cursor-pointer" />
      </label>
      <input
        type="file"
        id="fileInput"
        style={{ display: "none" }}
        className="hover:cursor-pointer"
        onChange={handleFileUpload}
        disabled={!isActive && true}
      />
      <div className="circle">
        <IoMdSend className="text-white text-xl" onClick={handleSendMessage} />
      </div>
    </div>
  );
}
