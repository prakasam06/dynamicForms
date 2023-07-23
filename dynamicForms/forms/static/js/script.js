//getting elements from static
const canvasBody = document.getElementById("canvasBody");
const leftbody = document.getElementById("leftcanvas");
const openleftcanvas = document.getElementById("openleftcanvas");
const openCanvas = document.getElementById("openCanvas");
const close = document.getElementById("closeCanvas");
const closeMulti = document.getElementById("closemulti");
const Form = document.getElementById("myForm");

//btns
const createQuestion = document.createElement("button");

const getValues = document.createElement("button");

//inputs

//innerhtmls
createQuestion.innerHTML = "create this question";

//placeholders

//classlists added for elements

openCanvas.addEventListener("click", () => {
  const formData = document.createElement("div");
  close.addEventListener("click", () => {
    deleteChilds(formData);
  });

  const body = document.createElement("div");
  const submitSectiondiv = document.createElement("div");

  formData.classList.add("container");
  formData.classList.add("bg-dark");
  const section = {
    type: "",
    id: Date.now(),
    sectionName: "",
    questions: [],
  };

  canvasBody.appendChild(formData);

  formData.appendChild(body);
  const sectionHeaderDiv = document.createElement("div");
  sectionHeaderDiv.classList.add("mb");
  sectionHeaderDiv.classList.add("form-check");

  body.appendChild(sectionHeaderDiv);

  const sectionHeader = document.createElement("input");
  const getsectionHeader = document.createElement("button");
  getsectionHeader.classList.add("btn");
  getsectionHeader.classList.add("btn-primary");

  getsectionHeader.innerHTML = "ok";
  sectionHeader.classList.add("form-control");
  sectionHeader.classList.add("mb-2");
  sectionHeader.placeholder = "sectionHeader";
  sectionHeaderDiv.appendChild(sectionHeader);
  sectionHeaderDiv.appendChild(getsectionHeader);
  const addInput = document.createElement("button");

  addInput.innerHTML = "add a input";

  addInput.classList.add("btn");
  addInput.classList.add("btn-warning");
  addInput.classList.add("m-2");

  const allinputsDivs = document.createElement("div");

  getsectionHeader.addEventListener("click", () => {
    if (sectionHeader.value == "") {
      alert("add some heading to the section");
    } else {
      body.appendChild(addInput);

      section.sectionName = sectionHeader.value;
      section.type = "non-multiple";

      body.appendChild(allinputsDivs);
      while (allinputsDivs.hasChildNodes()) {
        allinputsDivs.removeChild(allinputsDivs.children[0]);
      }

      sectionHeaderDiv.removeChild(getsectionHeader);
    }
  });

  addInput.addEventListener("click", () => {
    //created elements

    deleteChilds(submitSectiondiv);
    body.appendChild(submitSectiondiv);

    const thisInputdiv = document.createElement("div");
    deleteChilds(thisInputdiv);
    const inputOPtions = document.createElement("div");
    deleteChilds(inputOPtions);
    const createthisQuestion = document.createElement("button");
    const deleteDiv = document.createElement("button");
    const checkRequired = document.createElement("button");
    checkRequired.innerHTML = "required";
    const nameInput = document.createElement("input");
    const labelInput = document.createElement("input");

    createthisQuestion.innerHTML = "create this question";
    deleteDiv.innerHTML = "delete";
    nameInput.placeholder = "name of the input";
    labelInput.placeholder = "label of the input";

    //select and options
    const selectType = document.createElement("select");

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

    allinputsDivs.appendChild(thisInputdiv);

    thisInputdiv.appendChild(selectType);
    thisInputdiv.appendChild(nameInput);
    thisInputdiv.appendChild(labelInput);

    thisInputdiv.appendChild(checkRequired);

    thisInputdiv.appendChild(inputOPtions);
    inputOPtions.appendChild(deleteDiv);

    inputOPtions.appendChild(createthisQuestion);
    body.removeChild(addInput);

    //select over

    //classlists
    thisInputdiv.classList.add("card");
    selectType.classList.add("form-select");
    thisInputdiv.classList.add("w-60");
    thisInputdiv.classList.add("card-body");
    thisInputdiv.classList.add("bg-light");
    thisInputdiv.classList.add("mt-4");
    inputOPtions.classList.add("d-flex");
    inputOPtions.classList.add("justify-content-evenly");
    thisInputdiv.classList.add("d-grid");
    thisInputdiv.classList.add("gap-4");

    nameInput.classList.add("form-control");
    labelInput.classList.add("form-control");
    selectType.classList.add("form-control");
    checkRequired.classList.add("btn");
    checkRequired.classList.add("w-20");
    checkRequired.classList.add("btn-sm");
    checkRequired.classList.add("btn-danger");
    deleteDiv.classList.add("btn");
    deleteDiv.classList.add("btn-danger");
    createthisQuestion.classList.add("btn");
    createthisQuestion.classList.add("btn-primary");

    checkRequired.addEventListener("click", () => {
      if (checkRequired.innerHTML == "required") {
        checkRequired.innerHTML = "not required";
        checkRequired.classList.remove("btn-danger");
        checkRequired.classList.add("btn-primary");
      } else {
        checkRequired.innerHTML = "required";
        checkRequired.classList.remove("btn-primary");
        checkRequired.classList.add("btn-danger");
      }
    });
    createthisQuestion.addEventListener("click", () => {
      const questions = {
        id: Date.now(),
        name: "",
        required: "",
        label: "",
        type: "",
      };

      if (selectType.value == "select a input type") {
        alert("select a input type first");
      } else if (nameInput.value == "") {
        alert("enter name for the input");
      } else if (labelInput.value == "") {
        alert("enter the label value");
      } else {
        let req;
        if (checkRequired.innerHTML == "required") {
          req = "true";
        } else {
          req = false;
        }
        questions.type = "nonMulti";
        questions.name = nameInput.value;
        questions.required = req;
        questions.label = labelInput.value;
        questions.type = selectType.value;
        body.appendChild(addInput);

        inputOPtions.removeChild(createthisQuestion);
        thisInputdiv.removeChild(checkRequired);
        console.log(questions);
        section.questions.push(questions);
        console.log(section);

        if (section.questions.length >= 0) {
          const submitSection = document.createElement("button");
          submitSection.innerHTML = "submit section";
          submitSection.classList.add("btn");
          submitSection.classList.add("btn-secondary");
          submitSection.classList.add("m-4");
          submitSectiondiv.appendChild(submitSection);

          submitSection.addEventListener("click", () => {
            if (localStorage.getItem("forms") !== null) {
              const formsArr = JSON.parse(localStorage.getItem("forms"));
              console.log(formsArr);
              formsArr.push(section);
              console.log(formsArr);
              deleteChilds(body);
              deleteChilds(formData);
              deleteChilds(sectionHeaderDiv);
              deleteChilds(allinputsDivs);
              deleteChilds(submitSectiondiv);
              deleteChilds(inputOPtions);
              close.click();
              console.log(formsArr);
              localStorage.setItem("forms", JSON.stringify(formsArr));
            } else {
              const forms = [];
              forms.splice(0, forms.length);
              forms.push(section);
              localStorage.setItem("forms", JSON.stringify(forms));
              deleteChilds(body);
              deleteChilds(formData);
              deleteChilds(sectionHeaderDiv);
              deleteChilds(allinputsDivs);
              deleteChilds(submitSectiondiv);
              deleteChilds(inputOPtions);
              close.click();
            }
          });
        }
      }
    });
  });
});

openleftcanvas.addEventListener("click", () => {
  const multipleSection = {
    id: Date.now(),
    type: "",
    question: "",
    choices: [],
  };
  const submitMulti = document.createElement("button");
  submitMulti.innerHTML = "submit ";
  submitMulti.classList.add("btn");
  submitMulti.classList.add("btn-danger");
  const multiData = document.createElement("div");
  multiData.classList.add("container");
  multiData.classList.add("bg-dark");
  multiData.classList.add("p-2");

  leftbody.appendChild(multiData);

  closeMulti.addEventListener("click", () => {
    deleteChilds(multiData);
  });

  const questionDiv = document.createElement("div");
  questionDiv.classList.add("mb");
  questionDiv.classList.add("form-check");

  const mquestionInput = document.createElement("input");
  mquestionInput.classList.add("form-control");
  mquestionInput.classList.add("mb-2");

  mquestionInput.placeholder = "enter the question";
  const getmQuestion = document.createElement("button");
  getmQuestion.classList.add("btn");
  getmQuestion.classList.add("btn-primary");

  getmQuestion.innerHTML = "save question";
  multiData.appendChild(questionDiv);
  questionDiv.appendChild(mquestionInput);
  questionDiv.appendChild(getmQuestion);

  const thisMultidiv = document.createElement("div");
  leftbody.appendChild(thisMultidiv);

  getmQuestion.addEventListener("click", () => {
    if (mquestionInput.value == "") {
      alert("enter the question first!!!");
    } else {
      multipleSection.question = mquestionInput.value;
      multipleSection.type = "multiple";
      const thisMultiInputs = document.createElement("div");
      thisMultiInputs.classList.add("card");
      thisMultiInputs.classList.add("w-60");
      thisMultiInputs.classList.add("card-body");
      thisMultiInputs.classList.add("bg-light");
      thisMultiInputs.classList.add("mt-4");
      thisMultiInputs.classList.add("d-grid");
      thisMultiInputs.classList.add("gap-4");
      multiData.appendChild(thisMultiInputs);

      const addOption = document.createElement("button");
      addOption.innerHTML = "add a option";
      addOption.classList.add("btn");
      addOption.classList.add("btn-warning");
      thisMultiInputs.appendChild(addOption);
      questionDiv.removeChild(getmQuestion);

      addOption.addEventListener("click", () => {
        const optionsdiv = document.createElement("div");
        optionsdiv.classList.add("d-flex");
        optionsdiv.classList.add("justify-content-evenly");
        const newOptioninp = document.createElement("input");
        newOptioninp.classList.add("form-control");
        const confirmInput = document.createElement("button");
        confirmInput.classList.add("btn");
        confirmInput.classList.add("btn-primary");
        newOptioninp.setAttribute("id", "input");

        newOptioninp.placeholder = "add option value";
        confirmInput.innerHTML = "ok";

        thisMultiInputs.appendChild(optionsdiv);
        optionsdiv.appendChild(newOptioninp);
        optionsdiv.appendChild(confirmInput);
        thisMultiInputs.removeChild(addOption);

        confirmInput.addEventListener("click", () => {
          multipleSection.choices.push(newOptioninp.value);
          thisMultiInputs.appendChild(addOption);
          console.log(multipleSection);
          if (multipleSection.choices.length >= 2) {
            multiData.appendChild(submitMulti);
          } else {
          }
          optionsdiv.removeChild(confirmInput);
        });
      });
      submitMulti.addEventListener("click", () => {
        if (localStorage.getItem("forms") !== null) {
          const formsArr = JSON.parse(localStorage.getItem("forms"));
          console.log(formsArr);
          formsArr.push(multipleSection);
          console.log(formsArr);

          deleteChilds(questionDiv);
          deleteChilds(thisMultiInputs);
          deleteChilds(thisMultidiv);
          deleteChilds(multiData);

          closeMulti.click();
          console.log(formsArr);
          localStorage.setItem("forms", JSON.stringify(formsArr));
        } else {
          const forms = [];
          forms.splice(0, forms.length);
          forms.push(multipleSection);
          localStorage.setItem("forms", JSON.stringify(forms));

          deleteChilds(questionDiv);
          deleteChilds(thisMultiInputs);
          deleteChilds(thisMultidiv);
          deleteChilds(multiData);

          closeMulti.click();
        }
      });
    }
  });
});

function deleteChilds(divName) {
  while (divName.hasChildNodes()) {
    divName.removeChild(divName.children[0]);
  }
}

function updateDom() {}
