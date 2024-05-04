import "@styles/components/inputs.css";
import { SelectFieldProps } from "types/inputs";

const SelectField: React.FC<SelectFieldProps> = ({ name, options, onChange }) => {
  return (
    <select className="key-input" name={name} onChange={onChange}>
      <option value="">None</option>
      {options.map(item => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    </select>
  );
};

export default SelectField;
