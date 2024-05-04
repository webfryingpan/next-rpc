import "@styles/components/inputs.css";
import { InputFieldProps } from "types/inputs";

const InputField: React.FC<InputFieldProps> = ({ name, type, value, onChange }) => {
  return <input className="text-input" name={name} onChange={onChange} placeholder={name} type={type} value={value} />;
};

export default InputField;
