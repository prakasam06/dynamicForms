//getting elements from static
const canvasBody = document.getElementById("canvasBody");
const openCanvas = document.getElementById("openCanvas");
const close = document.getElementById("closeCanvas");

//created elements
//divs
const formData = document.createElement("div");
const sectionHeaderDiv = document.createElement("div");
const allinputsDivs = document.createElement("div");
const submitSectiondiv = document.createElement("div");

//btns
const createQuestion = document.createElement("button");
const getsectionHeader = document.createElement("button");
const getValues = document.createElement("button");
const addInput = document.createElement("button");
const submitSection = document.createElement("button");

//inputs
const sectionHeader = document.createElement("input");

//innerhtmls
createQuestion.innerHTML = "create this question";
getsectionHeader.innerHTML = "ok";
addInput.innerHTML = "add a input";
addInput.classList.add("btn");
addInput.classList.add("btn-dark");
submitSection.innerHTML = "submit section";

//placeholders
sectionHeader.placeholder = "sectionHeader";

//classlists added for elements
formData.classList.add("container");
formData.classList.add("bg-dark");
sectionHeader.classList.add("form-control");
sectionHeader.classList.add("mb-2");
sectionHeaderDiv.classList.add("mb");
sectionHeaderDiv.classList.add("form-check");
getsectionHeader.classList.add("btn");
getsectionHeader.classList.add("btn-primary");

const forms = [];
openCanvas.addEventListener("click", () => {
  const section = {
    id: Date.now(),
    sectionName: "",
    questions: [],
  };

  const formData = document.createElement("div");
  canvasBody.appendChild(formData);

  formData.appendChild(sectionHeaderDiv);

  sectionHeaderDiv.appendChild(sectionHeader);
  sectionHeaderDiv.appendChild(getsectionHeader);

  getsectionHeader.addEventListener("click", () => {
    if (sectionHeader.value == "") {
      alert("add some heading to the section");
    } else {
      formData.appendChild(addInput);
      section.sectionName = sectionHeader.value;
      sectionHeaderDiv.removeChild(getsectionHeader);
      formData.appendChild(allinputsDivs);
      formData.appendChild(submitSectiondiv);
    }
  });

  addInput.addEventListener("click", () => {
    while (submitSectiondiv.hasChildNodes()) {
      submitSectiondiv.removeChild(submitSectiondiv.children[0]);
    }
    //created elements

    const thisInputdiv = document.createElement("div");
    const inputOPtions = document.createElement("div");
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
    submitSection.innerHTML = "submit section";

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
    formData.removeChild(addInput);
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
        questions.name = nameInput.value;
        questions.required = req;
        questions.label = labelInput.value;
        questions.type = selectType.value;
        formData.appendChild(addInput);
        inputOPtions.removeChild(createthisQuestion);
        thisInputdiv.removeChild(checkRequired);
        console.log(questions);
        section.questions.push(questions);
        console.log(section);
        if (section.questions.length >= 0) {
          submitSectiondiv.appendChild(submitSection);
        }
      }
    });
  });
  submitSection.addEventListener("click", () => {
    forms.push(section);
    close.click();
    console.log(forms);
  });
});
