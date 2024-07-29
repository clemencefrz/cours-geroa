import { FormInputs } from "./FormContact";

export const EmailTemplate = (inputs: FormInputs) => (
  <div>
    {Object.entries(inputs).map(([key, value]) => (
      <div key={key}>
        <strong>{key}:</strong> {value ? value.toString() : "N/A"}
      </div>
    ))}
  </div>
);
