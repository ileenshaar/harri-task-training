import { useState } from "react";

function FormValidation() {
  let [step, setStep] = useState(1);
  let [error, setError] = useState({});
  let [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  ///^[^\s@]+@[^\s@]+\.[^\s@]+$/
  function validateDate() {
    let tempErrors = {};
    if (!formData.name) tempErrors.name = "name is not valid";
    if (!formData.email) tempErrors.email = "email is not valid";
    else if (!/^[^/s@]+@[^/s@]\.[^/s@]$/.test(formData.email))
      tempErrors.email = "email form is not valid";

    setError(tempErrors);
    return Object.keys(tempErrors).length === 0;
  }

  function handleNext() {
    if (validateDate()) {
      setStep((prev) => prev + 1);
      console.log("proceed");
    }
    console.log("stay");
  }

  function handlePrev() {
    setStep((prev) => prev - 1);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (validateDate()) {
      alert("Form submitted: " + JSON.stringify(formData, null, 2));
      setStep(1);
      setFormData({ name: "", email: "", city: "", zip: "" });
      setError({});
    }
  }

  function handleChange(e) {
    let { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      {step === 1 && (
        <div>
          <label for="name">Name:</label>
          <input type="text" name="name" onChange={handleChange} />
          {error.name && <p>{error.name}</p>}
          <label for="email">Email:</label>
          <input type="email" name="email" />
          {error.email && <p>{error.email}</p>}
        </div>
      )}
      {step < 2 && <button onClick={handleNext}>next</button>}
      {step > 1 && <button onClick={handlePrev}>prev</button>}
      {step === 2 && <button type="submit">Submit</button>}
    </form>
  );
}

export default FormValidation;
