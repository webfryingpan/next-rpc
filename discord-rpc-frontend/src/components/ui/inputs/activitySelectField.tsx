import { ActivitySelectFieldsProps } from "types/inputs";

const ActivitySelectField: React.FC<ActivitySelectFieldsProps> = ({ options, onChange }) => {
  return (
    <select className="key-input" name="activityType" onChange={onChange} required>
      {Object.values(options).map((option, index) => (
        <option key={index} value={index}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default ActivitySelectField;
