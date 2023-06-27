import FormOne from "./steps/FormOne";
import FormTwo from "./steps/FormTwo";

function JobForm() {
  return (
    <div className="flex flex-wrap justify-evenly gap-6">
      <FormOne />
      <FormTwo />
    </div>
  );
}

export default JobForm;
