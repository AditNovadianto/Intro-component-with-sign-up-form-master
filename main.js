const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const register = document.querySelector(".content .register");

const inputs = document.querySelectorAll(".register .input");

register.addEventListener("submit", (e) => {
  e.preventDefault();

  let amang = true;

  inputs.forEach((input) => {
    let isError = false;

    register.classList.remove("error");

    input.classList.remove("error");

    if (!input.value) {
      isError = true;
    }
    if (input.id == "email") {
      const isEmailValid = validateEmail(input.value);

      if (!isEmailValid) {
        isError = true;
      }
    }

    if (isError) {
      setTimeout(() => {
        register.classList.add("error");
      }, 0);

      input.classList.add("error");

      amang = false;
    }
  });

  if (amang) {
    alert("Your free trial has been claimed");

    inputs.forEach((input) => {
      input.value = "";
    });
  }
});
