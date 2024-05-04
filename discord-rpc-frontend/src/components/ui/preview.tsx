import "@styles/components/preview.css";
import { useContext } from "react";
import { FormContext } from "../formContext";

const Preview: React.FC = () => {
  const { formData } = useContext(FormContext);

  const getImageUrl = (imgKey: string | null) => {
    if (!imgKey) return "null";
    return `https://cdn.discordapp.com/app-assets/${formData.appId}/${imgKey}`;
  };

  return (
    <div className="preview">
      <div className="images">
        <img className="lg" src={getImageUrl(formData.lgImgKey)} />
        {formData.smImgKey && formData.lgImgKey ? <img className="sm" src={getImageUrl(formData.smImgKey)} /> : null}
      </div>
      <div className="text-details">
        <div className="app">{formData.appName || "app name"}</div>
        <div className="state">{formData.state || "state"}</div>
        <div className="details">{formData.details || "details"}</div>
        <div className="timestamp">{formData.timestamp || "timestamp"}</div>
      </div>
      <div className="buttons">
        {formData.btn1Name ? <div className="btn">{formData.btn1Name}</div> : null}
        {formData.btn1Name && formData.btn2Name ? <div className="btn">{formData.btn2Name}</div> : null}
      </div>
    </div>
  );
};

export default Preview;
