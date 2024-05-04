import FormProvider from "@components/formContext";
import Controls from "@components/ui/controls";
import Footer from "@components/ui/footer";
import Form from "@components/ui/form";
import Header from "@components/ui/header";
import Preview from "@components/ui/preview";
import "@styles/global.css";
import "@styles/pages/configuration.css";

const Configuration: React.FC = () => {
  return (
    <FormProvider>
      <Header>
        <Controls />
      </Header>
      <div className="wrapper">
        <Form />
        <Preview />
      </div>
      <Footer />
    </FormProvider>
  );
};

export default Configuration;
