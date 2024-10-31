import { useState } from "react";

const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer"));
      }
    }, 1500);
  });
};

const Form = () => {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  };

  const handleTextareaChange = (e) => {
    setAnswer(e.target.value);
  };

  if (status === "success") {
    return <h1>That's right!</h1>;
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextareaChange}
          disabled={status === "submitting"}
        />
        <button disabled={status === "submitting" || answer.length === 0}>
          Submit
        </button>
        {error !== null && <p className="Error">{error.message}</p>}
      </form>
    </>
  );
};

export default Form;
