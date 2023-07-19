//event listeners
const canvas = document.getElementById("canvas_body");
const instruction = document.getElementById("instruction");
const create = document.getElementById("createQuestion");
const form = document.getElementById("myForm");
const data = document.createElement("div");
const selectdiv = document.createElement("div");
const countdiv = document.createElement("div");
const labels_div = document.createElement("div");

const forms = [];
// localStorage.setItem(JSON.stringify(forms));
create.addEventListener("click", () => {
  const obj = {
    id: Date.now(),
    question: "",
    input_type: "",
    count: "",
    labels: [],
  };

  while (data.hasChildNodes()) {
    data.removeChild(data.children[0]);
  }

  instruction.innerHTML = "enter the question";

  canvas.appendChild(data);

  const get_question = document.createElement("div");
  data.appendChild(get_question);

  const question_input = document.createElement("input");
  get_question.appendChild(question_input);

  const submit_question = document.createElement("button");
  submit_question.innerHTML = "submit_question";
  get_question.appendChild(submit_question);

  submit_question.addEventListener("click", () => {
    obj.question = question_input.value;
    data.appendChild(selectdiv);

    console.log(obj);
  });

  const select = document.createElement("select");
  selectdiv.appendChild(select);

  const selectinputview = document.createElement("option");
  selectinputview.innerHTML = "select a input type";
  select.appendChild(selectinputview);

  const multiple_option = document.createElement("option");
  multiple_option.innerHTML = "multiple choice";
  select.appendChild(multiple_option);

  const text_option = document.createElement("option");
  text_option.innerHTML = "text";
  select.appendChild(text_option);

  const number_option = document.createElement("option");
  number_option.innerHTML = "number";
  select.appendChild(number_option);

  const email_option = document.createElement("option");
  email_option.innerHTML = "email";
  select.appendChild(email_option);

  const password_option = document.createElement("option");
  password_option.innerHTML = "password";
  select.appendChild(password_option);

  const file_option = document.createElement("option");
  file_option.innerHTML = "file";
  select.appendChild(file_option);

  const date_option = document.createElement("option");
  date_option.innerHTML = "date";
  select.appendChild(date_option);

  const textarea_option = document.createElement("option");
  textarea_option.innerHTML = "message";
  select.appendChild(textarea_option);

  const checkbox_option = document.createElement("option");
  checkbox_option.innerHTML = "checkbox";
  select.appendChild(checkbox_option);

  select.onchange = () => {
    obj.input_type = select.value;
    data.appendChild(countdiv);
  };

  const count = document.createElement("input");
  count.type = "number";
  countdiv.appendChild(count);
  count.onclick = () => {
    const get_count = document.createElement("button");
    get_count.innerHTML = "save inp count";
    countdiv.appendChild(get_count);

    get_count.onclick = () => {
      obj.count = count.value;
      countdiv.removeChild(get_count);
      console.log(obj);
      data.appendChild(labels_div);

      for (i = 0; i < obj.count; i++) {
        const labelnum = i;
        const name = "label${labelnum}";
      }
    };
  };

  const submit_div = document.createElement("button");
  submit_div.innerHTML = "create-question";
  data.appendChild(submit_div);
});
