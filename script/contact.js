const submitBtn = document.querySelector("#submitBtn");
const error = document.querySelector(".error");
const success = document.querySelector(".success");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name");
  const subject = document.querySelector("#subject");
  const messgae = document.querySelector("#message");



  if (name.value.trim() === "") {
    error.textContent = "Name is Required";
  } else if (subject.value.trim() === "") {
    error.textContent = "Subject is Required";
  } else if (messgae.value.trim() === "") {
    error.textContent = "Message is Required";
  } else {
    success.textContent = "Thank you for Contacting we will reach you soon";
    name.value = "";
    subject.value = "";
    messgae.value = "";

    const data = {
        name : name.value,
        subject : subject.value,
        messgae : messgae.value

    }

    localStorage.setItem("Contact-Message" , data)}
});
