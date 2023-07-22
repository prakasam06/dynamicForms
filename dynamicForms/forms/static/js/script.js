//getting elements from static
const canvasBody = document.getElementById("canvasBody");

const openCanvas = document.getElementById("openCanvas");
const close = document.getElementById("closeCanvas");

//created elements
//divs

//btns
const createQuestion = document.createElement("button");
// const getsectionHeader = document.createElement("button");
const getValues = document.createElement("button");

//inputs

//innerhtmls
createQuestion.innerHTML = "create this question";

//placeholders

//classlists added for elements

openCanvas.addEventListener("click", () => {
  const formData = document.createElement("div");

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
  const addmultiple = document.createElement("button");
  addInput.innerHTML = "add a input";
  addmultiple.innerHTML = "add a multiple choice ques";
  addInput.classList.add("btn");
  addInput.classList.add("btn-dark");
  addmultiple.classList.add("btn");
  addmultiple.classList.add("btn-dark");
  const allinputsDivs = document.createElement("div");

  getsectionHeader.addEventListener("click", () => {
    if (sectionHeader.value == "") {
      alert("add some heading to the section");
    } else {
      body.appendChild(addInput);
      body.appendChild(addmultiple);
      section.sectionName = sectionHeader.value;

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
    body.removeChild(addmultiple);
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
        body.appendChild(addmultiple);
        inputOPtions.removeChild(createthisQuestion);
        thisInputdiv.removeChild(checkRequired);
        console.log(questions);
        section.questions.push(questions);
        console.log(section);

        if (section.questions.length >= 0) {
          const submitSection = document.createElement("button");
          submitSection.innerHTML = "submit section";
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
              updateDom();
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
              close.click();
              updateDom();
            }
          });
        }
      }
    });
  });

  addmultiple.addEventListener("click", () => {
    const multipleSection = {
      id: Date.now(),
      type: "",
      question: "",
      choices: [],
    };
    deleteChilds(submitSectiondiv);
    body.appendChild(submitSectiondiv);

    const multiInputdiv = document.createElement("div");
    deleteChilds(multiInputdiv);
    const multiinputOPtions = document.createElement("div");
    deleteChilds(multiinputOPtions);
    const createMultiquestion = document.createElement("button");
    createMultiquestion.innerHTML = "create question";
    const deleteDiv = document.createElement("button");
    deleteDiv.innerHTML = "delete";
    allinputsDivs.appendChild(multiInputdiv);

    const multiQuestion = document.createElement("input");
    multiQuestion.placeholder = "question";
    const addChoice = document.createElement("button");
    addChoice.innerHTML = "add a choice";

    multiInputdiv.appendChild(multiQuestion);
    multiInputdiv.appendChild(multiinputOPtions);
    multiinputOPtions.appendChild(addChoice);
    multiinputOPtions.appendChild(deleteDiv);
    multiinputOPtions.appendChild(createMultiquestion);

    addChoice.addEventListener("click", () => {
      multiInputdiv.removeChild(multiinputOPtions);

      const newChoice = document.createElement("input");
      const confirmnewChoice = document.createElement("button");
      newChoice.placeholder = "add a option/choice";
      multiInputdiv.appendChild(newChoice);

      confirmnewChoice.innerHTML = "done";
      multiInputdiv.appendChild(confirmnewChoice);
    });
    confirmnewChoice.addEventListener("click", () => {
      multiInputdiv.removeChild(confirmnewChoice);
      multiInputdiv.appendChild(multiinputOPtions);
      multipleSection.choices.push(newChoice.value);
      console.log(multipleSection);
    });
    createMultiquestion.addEventListener("click", () => {
      multipleSection.type = "multi";
      multipleSection.question = multiQuestion.value;
      if (localStorage.getItem("forms") !== null) {
        const mulformsArr = JSON.parse(localStorage.getItem("forms"));
        console.log(mulformsArr);
        mulformsArr.push(multipleSection);
        console.log(mulformsArr);
        deleteChilds(body);
        deleteChilds(formData);
        deleteChilds(sectionHeaderDiv);
        deleteChilds(allinputsDivs);
        deleteChilds(submitSectiondiv);

        deleteChilds(multiinputOPtions);
        close.click();
        console.log(mulformsArr);
        localStorage.setItem("forms", JSON.stringify(mulformsArr));
        updateDom();
      } else {
        const mulformsArr = [];
        mulformsArr.splice(0, mulformsArr.length);
        mulformsArr.push(multipleSection);
        localStorage.setItem("forms", JSON.stringify(mulformsArr));
        deleteChilds(body);
        deleteChilds(formData);
        deleteChilds(sectionHeaderDiv);
        deleteChilds(allinputsDivs);
        deleteChilds(submitSectiondiv);
        deleteChilds(multiinputOPtions);
        close.click();
        updateDom();
      }
    });
  });
});

function deleteChilds(divName) {
  while (divName.hasChildNodes()) {
    divName.removeChild(divName.children[0]);
  }
}

function updateDom() {}
