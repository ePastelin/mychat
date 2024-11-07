interface Props {
  parentMethod: () => void;
  label: String;
}

export const RemoveButton = ({ parentMethod, label }: Props) => {
  return (
    <div className="remove-button__container">
      <button className="remove-button" onClick={parentMethod}>
        {label} 
      </button>
    </div>
  );
};
