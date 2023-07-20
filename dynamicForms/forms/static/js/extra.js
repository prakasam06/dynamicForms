// import update from extra.js

// //event listeners
// const canvas = document.getElementById("canvas_body");
// const instruction = document.getElementById("instruction");
// const create = document.getElementById("createQuestion");
// const form = document.getElementById("myForm");
// const data = document.createElement("div");
// const selectdiv = document.createElement("div");
// const countdiv = document.createElement("div");
// const labels_div = document.createElement("div");
// const submit_labels = document.createElement("button");
// const get_question = document.createElement("div");
// const question_input = document.createElement("input");
// const submit_question = document.createElement("button");
// const closeButon = document.querySelector(".btn-close");
// const submit_div = document.createElement("button");

// const forms = [];
// // window.onload = () => {
// //   updateDom();
// // };
// //---------in canvas------------//
// create.addEventListener("click", () => {
//   const obj = {
//     id: Date.now(),
//     question: "",
//     input_type: "",
//     count: "",
//     labels: [],
//   };

//   while (data.hasChildNodes()) {
//     data.removeChild(data.children[0]);
//   }

//   while (selectdiv.hasChildNodes()) {
//     selectdiv.removeChild(selectdiv.children[0]);
//   }

//   while (countdiv.hasChildNodes()) {
//     countdiv.removeChild(countdiv.children[0]);
//   }

//   while (labels_div.hasChildNodes()) {
//     labels_div.removeChild(labels_div.children[0]);
//   }

//   // while (submit_div.hasChildNodes()) {
//   //   submit_div.removeChild(submit_div.children[0]);
//   // }

//   instruction.innerHTML = "enter the question";

//   canvas.appendChild(data);

//   data.appendChild(get_question);

//   get_question.appendChild(question_input);

//   submit_question.innerHTML = "submit_question";
//   get_question.appendChild(submit_question);

//   submit_question.addEventListener("click", () => {
//     obj.question = question_input.value;
//     data.appendChild(selectdiv);

//     console.log(obj);
//   });

//   const select = document.createElement("select");
//   selectdiv.appendChild(select);

//   const selectinputview = document.createElement("option");
//   selectinputview.innerHTML = "select a input type";
//   select.appendChild(selectinputview);

//   const multiple_option = document.createElement("option");
//   multiple_option.innerHTML = "multiple choice";
//   select.appendChild(multiple_option);

//   const text_option = document.createElement("option");
//   text_option.innerHTML = "text";
//   select.appendChild(text_option);

//   const number_option = document.createElement("option");
//   number_option.innerHTML = "number";
//   select.appendChild(number_option);

//   const email_option = document.createElement("option");
//   email_option.innerHTML = "email";
//   select.appendChild(email_option);

//   const password_option = document.createElement("option");
//   password_option.innerHTML = "password";
//   select.appendChild(password_option);

//   const file_option = document.createElement("option");
//   file_option.innerHTML = "file";
//   select.appendChild(file_option);

//   const date_option = document.createElement("option");
//   date_option.innerHTML = "date";
//   select.appendChild(date_option);

//   const textarea_option = document.createElement("option");
//   textarea_option.innerHTML = "message";
//   select.appendChild(textarea_option);

//   const checkbox_option = document.createElement("option");
//   checkbox_option.innerHTML = "checkbox";
//   select.appendChild(checkbox_option);

//   select.onchange = () => {
//     obj.input_type = select.value;
//     data.appendChild(countdiv);
//   };

//   const count = document.createElement("input");
//   count.type = "number";
//   countdiv.appendChild(count);
//   count.onclick = () => {
//     const get_count = document.createElement("button");
//     get_count.innerHTML = "save inp count";
//     countdiv.appendChild(get_count);

//     get_count.onclick = () => {
//       obj.count = count.value;
//       countdiv.removeChild(get_count);
//       console.log(obj);
//       data.appendChild(labels_div);

//       for (i = 1; i <= obj.count; i++) {
//         const label_input = document.createElement("input");
//         label_input.name = `label`;
//         labels_div.appendChild(label_input);
//       }

//       const alllabels = document.getElementsByName(`label`);
//       const final_label = alllabels[obj.count - 1];

//       final_label.onclick = () => {
//         submit_labels.innerHTML = "submit labels";
//         labels_div.appendChild(submit_labels);
//       };

//       submit_labels.onclick = () => {
//         const alllabels = document.getElementsByName(`label`);
//         console.log(alllabels);
//         for (i = 1; i <= obj.count; i++) {
//           obj.labels.push(alllabels[i - 1].value);
//           console.log(obj);
//         }
//         labels_div.removeChild(submit_labels);

//         submit_div.innerHTML = "create-question";
//         data.appendChild(submit_div);
//       };
//     };
//   };

//   submit_div.addEventListener("click", () => {
//     forms.push(obj);
//     console.log(forms);
//     closeButon.click();
//     updateDom();
//   });
// });

// //--------inside form------------//

// function updateDom() {
//   while (form.hasChildNodes()) {
//     form.removeChild(form.children[0]);
//   }
//   forms.forEach((ques) => {
//     const question = document.createElement("div");
//     question.setAttribute("id", ques.id);
//     form.appendChild(question);

//     const quesTag = document.createElement("h2");
//     quesTag.innerHTML = ques.question;
//     question.appendChild(quesTag);

//     const inputsContainer = document.createElement("div");
//     question.appendChild(inputsContainer);

//     const label = document.createElement("label");
//     const input = document.createElement("input");
//     input.type = ques.input_type;
//     // label.innerHTML = ques.labels[];
//     label.name = `label${ques.id}`;
//     input.name = `input${ques.id}`;
//     ques.labels.forEach((label) => {
//       // label.innerHTML = label;
//       console.log(label);
//     });
//     inputsContainer.appendChild(label);
//     inputsContainer.appendChild(input);
//   });
// }

function update() {
  alert("hello da");
}
