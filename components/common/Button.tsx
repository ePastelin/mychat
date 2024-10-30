import { Dispatch } from "react";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button type="submit" value="Submit" className="buttonLogin">
      {children}
    </button>
  );
}

export function UpdateButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="buttonLogin">
      actualizar
    </button>
  );
}

export function CreateButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick} className="buttonLogin">
      crear
    </button>
  );
}

export function ButtonNav({setScreen, children, screen}: {setScreen: Dispatch<React.SetStateAction<Number>>, children: React.ReactNode, screen: Number}) {
  return (
    <button onClick={() => setScreen(screen)} className="button-nav">
        {children}
    </button>
  );
}
