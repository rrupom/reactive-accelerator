const PracticeForm = ({ status = "empty" }) => {
  if (status === "success") {
    return (
      <>
        <h1>That's right!</h1>
        <hr />
      </>
    );
  }

  return (
    <>
      <h2>City quiz</h2>
      <p>
        In which city there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={status === "submitting"} />
        <br />
        <button
          type="submit"
          disabled={status === "empty" || status === "submitting"}
        >
          Submit
        </button>
        {status === "submitting" ? <p>Loading...</p> : <></>}
        {status === "error" ? (
          <p className="error">Good guess. But not correct answer</p>
        ) : (
          <></>
        )}
      </form>
      <hr />
    </>
  );
};

export default PracticeForm;
