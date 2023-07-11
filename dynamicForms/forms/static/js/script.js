const create = document.getElementById("createQuestion");
const form = document.getElementById("myForm");
const forms = [];
// localStorage.setItem(JSON.stringify(forms));
create.addEventListener("click", () => {
  const obj = {
    id: Date.now(),
    question: "hey britto",
    inputs: [],
    description: [],
  };

  const question = document.createElement("div");
  question.setAttribute("id", obj.id);
  form.appendChild(question);
  question.classList.add("hey");

  question.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});
