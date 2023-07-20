//event listeners
const canvas = document.getElementById("canvas_body");
const instruction = document.getElementById("instruction");
const create = document.getElementById("createQuestion");
const form = document.getElementById("myForm");
const data = document.createElement("div");
const sectionNamediv = document.createElement("div");
const addInput = document.createElement("button");
const addinputsDiv = document.createElement("div");
const countDiv = document.createElement("div");
const labelsDiv = document.createElement("div");
const submitLabels = document.createElement("button");
const getQuestion = document.createElement("div");
const questionInput = document.createElement("input");
const createQuestion = document.createElement("button");
const closeButton = document.querySelector(".btn-close");
const submitDiv = document.createElement("button");

//after changes

const duplicate = [];
// window.onload = () => {
//   updateDom();
// };
//---------in canvas------------//
create.addEventListener("click", () => {
  const forms = [];
  const obj = {
    id: Date.now(),
    question: "",
    inputTypes: [],
    labels: [],
  };

  // if (obj.inputTypes.length !== 0) {
  //   canvas.appendChild(createQuestion);
  //   createQuestion.innerHTML = "create this section";
  //   createQuestion.addEventListener("click", () => {
  //     forms.push(obj);
  //     console.log(forms);
  //   });
  // }

  canvas.appendChild(data);
  addInput.innerHTML = "addInput";
  data.appendChild(sectionNamediv);

  const sectionName = document.createElement("input");
  sectionNamediv.appendChild(sectionName);
  const sectionNamebutton = document.createElement("button");
  sectionNamebutton.innerHTML = "ok";
  sectionNamediv.appendChild(sectionNamebutton);

  sectionNamebutton.addEventListener("click", () => {
    obj.question = sectionName.value;
    data.appendChild(addInput);
    sectionNamediv.removeChild(sectionNamebutton);
  });

  addInput.addEventListener("click", () => {
    data.appendChild(addinputsDiv);
    const selectType = document.createElement("select");
    addinputsDiv.appendChild(selectType);

    const labelTextcontent = document.createElement("input");
    addinputsDiv.appendChild(labelTextcontent);

    const createThisInp = document.createElement("button");
    createThisInp.innerHTML = "done";
    addinputsDiv.appendChild(createThisInp);

    const selectinputview = document.createElement("option");
    selectinputview.innerHTML = "select a input type";
    selectType.appendChild(selectinputview);

    const multiple_option = document.createElement("option");
    multiple_option.innerHTML = "multiple choice";
    selectType.appendChild(multiple_option);

    const text_option = document.createElement("option");
    text_option.innerHTML = "text";
    selectType.appendChild(text_option);

    const number_option = document.createElement("option");
    number_option.innerHTML = "number";
    selectType.appendChild(number_option);

    const email_option = document.createElement("option");
    email_option.innerHTML = "email";
    selectType.appendChild(email_option);

    const password_option = document.createElement("option");
    password_option.innerHTML = "password";
    selectType.appendChild(password_option);

    const file_option = document.createElement("option");
    file_option.innerHTML = "file";
    selectType.appendChild(file_option);

    const date_option = document.createElement("option");
    date_option.innerHTML = "date";
    selectType.appendChild(date_option);

    const textarea_option = document.createElement("option");
    textarea_option.innerHTML = "message";
    selectType.appendChild(textarea_option);

    const checkbox_option = document.createElement("option");
    checkbox_option.innerHTML = "checkbox";
    selectType.appendChild(checkbox_option);

    data.removeChild(addInput);

    createThisInp.addEventListener("click", () => {
      if (selectType.value == "select a input type") {
        alert("select the input type vro");
      }
      if (labelTextcontent.value == "") {
        alert("add some text content for the label vro");
      } else {
        obj.inputTypes.push(selectType.value);
        obj.labels.push(labelTextcontent.value);
        addinputsDiv.removeChild(createThisInp);
        data.appendChild(addInput);
        console.log(obj);

        // const question = {
        //   id: obj.id,
        //   question: JSON.stringify(obj.question),
        //   inputTypes: JSON.stringify(obj.inputTypes),
        //   labels: obj.labels,
        // };

        if (obj.inputTypes.length !== 0) {
          canvas.appendChild(createQuestion);
          createQuestion.innerHTML = "create this section";
          createQuestion.addEventListener("click", () => {
            // duplicate.push(obj);
            // forms.push(duplicate[duplicate.length - 1]);
            // console.log(duplicate[duplicate.length - 1]);
            // forms.push({ ...obj });
            forms.push(obj);
            console.log(forms);
          });
        }
      }
    });
  });
});

//--------inside form------------//

function updateDom() {
  while (form.hasChildNodes()) {
    form.removeChild(form.children[0]);
  }
  forms.forEach((ques) => {
    const question = document.createElement("div");
    question.setAttribute("id", ques.id);
    form.appendChild(question);

    const quesTag = document.createElement("h2");
    quesTag.innerHTML = ques.question;
    question.appendChild(quesTag);

    const inputsContainer = document.createElement("div");
    question.appendChild(inputsContainer);

    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = ques.input_type;
    // label.innerHTML = ques.labels[];
    label.name = `label${ques.id}`;
    input.name = `input${ques.id}`;
    ques.labels.forEach((label) => {
      // label.innerHTML = label;
      console.log(label);
    });
    inputsContainer.appendChild(label);
    inputsContainer.appendChild(input);
  });
}
