const show = (el) => {
  el.style.display = "";
};
const hide = (el) => {
  el.style.display = "none";
};
const enable = (el) => {
  el.disabled = false;
};
const disable = (el) => {
  el.disabled = true;
};

const handleTextareaChange = () => {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
};

const handleFormSubmit = async (e) => {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (error) {
    show(errorMessage);
    errorMessage.textContent = error.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
};

const submitForm = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 1500);
  });
};

const form = document.getElementById("form");
const textarea = document.getElementById("textarea");
const button = document.getElementById("button");
const loadingMessage = document.getElementById("loading");
const errorMessage = document.getElementById("error");
const successMessage = document.getElementById("success");

form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;
