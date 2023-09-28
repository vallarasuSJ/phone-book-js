let book = [
  { id: 1, contactName: "kv", num: 894 },
  { id: 2, contactName: "chaitanya", num: 4894 },
  { id: 3, contactName: "vishwa", num: 8948384 },
];

let editId = 0;
// get id from html
const phoneref = document.getElementById("name1");
const numberref = document.getElementById("number1");
const phonebtn = document.getElementById("addContact");
const savedContacts = document.getElementById("saved");

//generate random number for new contacts use getRandomNUmber func

const getRandomNumber = (max = 1000) => {
  return Math.floor(Math.random() * max);
};

//render process is used to display the html
const render = () => {
  let result = "";
  //forloop is used to store the array details in result
  for (let name of book) {
    result += `
    <div class="d-flex align-items-center justify-content-between p-2 border-bottom border-primary">
    <p class="fs-5 m-0">${name.contactName}</p>  
    <p class="fs-5 m-0">${name.num}</p>  

    <div>
    <button onclick="editName(${name.id})" class="btn">Edit</button>
    <button onclick="deleteName(${name.id})" class="btn text-danger">Delete</button>
  </div>
  </div>`;
  }

  //innerhtml is used to set or change elements in html
  savedContacts.innerHTML = result;
};

render();

//add name,contact

phonebtn.addEventListener("click", () => {
  if (phoneref.value !== "" && numberref !== "") {
    if (editId === 0) {
      book.push({
        id: getRandomNumber(),
        contactName: phoneref.value,
        num: numberref.value,
      });
    } else {
      book = book.map((x) => {
        if (x.id == editId) {
          return {
            ...x,
            contactName: phoneref.value,
            num: numberref.value,
          };
        } else {
          return x;
        }
      });
    }
    editId = 0;
    phoneref.value = "";
    numberref.value = "";
    phonebtn.innerText = "Add";
    render();
  } else {
    phoneref.classList.replace("border-info","is-invalid");
  }
});

//delete the contact

const deleteName = (id) => {
  book = book.filter((x) => {
    if (x.id !== id) {
      return x;
    }
  });
  render();
};

//edit the contact
const editName = (id) => {
  editId = id;
  const clickedContact = book.find((x) => x.id === id);
  phonebtn.innerText = "Edit";
  phoneref.value = clickedContact.contactName;
  numberref.value = clickedContact.num;
};

//scr
//
