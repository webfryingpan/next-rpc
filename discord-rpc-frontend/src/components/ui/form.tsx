import "@styles/components/form.css";
import { useContext } from "react";
import { ActivityTypes } from "types/form";
import { FormContext } from "../formContext";
import ActivitySelectField from "./inputs/activitySelectField";
import InputField from "./inputs/inputField";
import SelectField from "./inputs/selectField";

const activityTypes: ActivityTypes = {
  "0": "Playing",
  "1": "Streaming",
  "2": "Listening",
  "3": "Watching",
};

const Form: React.FC = () => {
  const { formData, handleSubmit, handleChange, options } = useContext(FormContext);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <InputField name="appId" onChange={handleChange} type="number" value={formData.appId} />
      <ActivitySelectField onChange={handleChange} options={activityTypes} />
      <InputField name="state" onChange={handleChange} type="text" value={formData.state} />
      <InputField name="details" onChange={handleChange} type="text" value={formData.details} />
      <div className="double-input">
        <SelectField name="lgImgKey" onChange={handleChange} options={options} />
        <InputField name="lgImgText" onChange={handleChange} type="text" value={formData.lgImgText} />
      </div>
      <div className="double-input">
        <SelectField name="smImgKey" onChange={handleChange} options={options} />
        <InputField name="smImgText" onChange={handleChange} type="text" value={formData.smImgText} />
      </div>
      <div className="double-input">
        <InputField name="btn1Name" onChange={handleChange} type="text" value={formData.btn1Name} />
        <InputField name="btn1Url" onChange={handleChange} type="text" value={formData.btn1Url} />
      </div>
      <div className="double-input">
        <InputField name="btn2Name" onChange={handleChange} type="text" value={formData.btn2Name} />
        <InputField name="btn2Url" onChange={handleChange} type="text" value={formData.btn2Url} />
      </div>
      <button className="submit" type="submit">
        Save
      </button>
    </form>
  );
};

export default Form;
