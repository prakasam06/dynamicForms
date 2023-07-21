//event listeners
const canvas = document.getElementById("canvas_body");
const instruction = document.getElementById("instruction");
const create = document.getElementById("createQuestion");
const form = document.getElementById("myForm");
const data = document.createElement("div");
const sectionNamediv = document.createElement("div");
const addinputsDiv = document.createElement("div");
const addInput = document.createElement("button");
const allInputs = document.createElement("section");
const countDiv = document.createElement("div");
const labelsDiv = document.createElement("div");
const submitLabels = document.createElement("button");
const getQuestion = document.createElement("div");
const questionInput = document.createElement("input");
const createQuestionsection = document.createElement("button");
const closeButton = document.querySelector(".btn-close");
const submitDiv = document.createElement("button");

//after changes

// window.onload = () => {
//   updateDom();
// };
//---------in canvas------------//
const forms = [];
create.addEventListener("click", () => {
  const obj = {
    id: Date.now(),
    sectionName: "",
    questions: [],
  };
  const questionsObj = {
    name: "",
    required: "",
    label: "",
    type: "",
    index: "",
  };

  canvas.appendChild(data);
  addInput.innerHTML = "addInput";
  data.appendChild(sectionNamediv);
  data.appendChild(allInputs);
  const sectionName = document.createElement("input");
  sectionNamediv.appendChild(sectionName);
  const sectionNamebutton = document.createElement("button");
  sectionNamebutton.innerHTML = "ok";
  sectionNamediv.appendChild(sectionNamebutton);

  sectionNamebutton.addEventListener("click", () => {
    obj.sectionName = sectionName.value;
    data.appendChild(addInput);
    sectionNamediv.removeChild(sectionNamebutton);
  });

  addInput.addEventListener("click", () => {
    data.appendChild(addinputsDiv);
    const selectType = document.createElement("select");
    addinputsDiv.appendChild(selectType);

    const labelTextcontent = document.createElement("input");
    labelTextcontent.placeholder = "label content";
    addinputsDiv.appendChild(labelTextcontent);

    const isRequired = document.createElement("button");
    isRequired.innerHTML = "required";
    addinputsDiv.appendChild(isRequired);

    const thisInputName = document.createElement("input");
    thisInputName.placeholder = "inputName";
    addinputsDiv.appendChild(thisInputName);

    const deleteDIV = document.createElement("button");
    deleteDIV.innerHTML = "Delete";
    addinputsDiv.appendChild(deleteDIV);

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

    isRequired.addEventListener("click", () => {
      if (isRequired.innerHTML == "required") {
        isRequired.innerHTML = "notRequired";
      } else {
        isRequired.innerHTML = "required";
      }
    });

    createThisInp.addEventListener("click", () => {
      if (selectType.value == "select a input type") {
        alert("select the input type vro");
      }
      if (labelTextcontent.value == "") {
        alert("add some text content for the label vro");
      } else {
        if (localStorage.getItem("count") !== null) {
          const count = localStorage.getItem("count");
          const toadd = Number(count);
          const newCount = toadd + 1;
          console.log(newCount);
          localStorage.setItem("count", newCount);

          const index = [...allInputs.parentElement.children].indexOf(
            allInputs
          );

          console.log(index);

          addinputsDiv.removeChild(isRequired);
          addinputsDiv.removeChild(createThisInp);
          addinputsDiv.removeChild(isRequired);
          addinputsDiv.removeChild(thisInputName);
          data.appendChild(addInput);
        } else {
          const count = 0;
          localStorage.setItem("count", count);

          addinputsDiv.removeChild(createThisInp);
          addinputsDiv.removeChild(isRequired);
          addinputsDiv.removeChild(thisInputName);
          data.appendChild(addInput);
        }

        if (obj.inputTypes.length !== 0) {
          canvas.appendChild(createQuestionsection);
          createQuestionsection.innerHTML = "create this section";
        }
      }
    });
    createQuestionsection.addEventListener("click", () => {
      console.log(obj);
      forms.push(obj);
      console.log(forms);
      localStorage.clear("count");
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
