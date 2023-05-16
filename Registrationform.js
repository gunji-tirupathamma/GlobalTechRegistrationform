let firstNameEl = document.getElementById("firstname");
let firstNameErrorEl = document.getElementById("firstnameerror");

let lastNameEl = document.getElementById("lastname");
let lastNameErrorEl = document.getElementById("lastnameerror");

let collegeNameEl = document.getElementById("collegename");
let collegeNameErrorEl = document.getElementById("collegeenameerror");

let emailEl = document.getElementById("email");
let emailErrorEl = document.getElementById("emailerror");

let phonenumEl = document.getElementById("phonenumber");
let phoneNumErrorEl = document.getElementById("pnonenumerror");

let areaCodeEl = document.getElementById("areacode");
let areaCodeErrorEl = document.getElementById("areacodeerror");

let maleEl = document.getElementById("male");
let femaleEl = document.getElementById("female");

let subjectEl = document.getElementById("subjects");

let myFormEl = document.getElementById("myform");

let showContainerEl = document.getElementById("show-container");
let showDetailsBtn = document.getElementById("showdetailsbtn");

let detailsContainerEl = document.getElementById("detailscontainer");

//for show details

let displayName = document.getElementById("display-name");
let displayGender = document.getElementById("display-gender");
let displayCollege = document.getElementById("display-college");
let displayEmail = document.getElementById("display-email");
let displayPhoneNum = document.getElementById("display-phonenum");
let displaySubject = document.getElementById("display-subject");



let formData = {
    firstname: "",
    lastname: '',
    collegename: '',
    gender: "Male",
    email: '',
    areacode: '',
    phonenum: '',
    subject: 'Choose Option'
}

firstNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        firstNameErrorEl.textContent = "Require *";
    } else {
        firstNameErrorEl.textContent = "";
    }
    formData.firstname = event.target.value;
})

lastNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        lastNameErrorEl.textContent = "Require *";
    } else {
        lastNameErrorEl.textContent = "";
    }
    formData.lastname = event.target.value;
})

collegeNameEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        collegeNameErrorEl.textContent = "Require *";
    } else {
        collegeNameErrorEl.textContent = "";
    }
    formData.collegename = event.target.value;
})

emailEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        emailErrorEl.textContent = "Require *";
    } else {
        emailErrorEl.textContent = "";
    }
    formData.email = event.target.value;
})

areaCodeEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        areaCodeErrorEl.textContent = "Require *";
    } else {
        areaCodeErrorEl.textContent = "";
    }
    formData.areacode = event.target.value;
})

phonenumEl.addEventListener("blur", function(event) {
    if (event.target.value === "") {
        phoneNumErrorEl.textContent = "Require *";
    } else {
        phoneNumErrorEl.textContent = "";
    }
    formData.phonenum = event.target.value;
})

maleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
})

femaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
})

subjectEl.addEventListener("change", function(event) {
    formData.subject = event.target.value;
})

function validFormData(formdata) {
    let {
        firstname,
        lastname,
        collegename,
        email,
        areacode,
        phonenum
    } = formData;

    if (firstname === "") {
        firstNameErrorEl.textContent = "Require *";
    }
    if (lastname === "") {
        lastNameErrorEl.textContent = "Require *";
    }
    if (collegename === "") {
        collegeNameErrorEl.textContent = "Require *";
    }
    if (email === "") {
        emailErrorEl.textContent = "Require *";
    }
    if (areacode === "") {
        areaCodeErrorEl.textContent = "Require *";
    }
    if (phonenum === "") {
        phoneNumErrorEl.textContent = "Require *";
    }
}

function showDetails() {
    let {
        firstname,
        lastname,
        collegename,
        email,
        areacode,
        phonenum
    } = formData;
    if (firstname !== "" && lastname !== "" && collegename !== "" && email !== "" && areacode !== "" && phonenum !== "") {
        
        let formContainerEl = document.getElementById("formcontainere");
        formContainerEl.style.display = "none";
        
        showContainerEl.style.display = "flex";

        showDetailsBtn.onclick = function() {
            detailsContainerEl.style.display = "flex";
            displayName.innerHTML = formData.firstname + ' ' + formData.lastname;
            displayGender.innerHTML = formData.gender;
            displayCollege.innerHTML = formData.collegename;
            displayEmail.innerHTML = formData.email;
            displayPhoneNum.innerHTML = formData.phonenum;
            displaySubject.innerHTML = formData.subject;
        }
    } else {
        alert("Fill all the Details")
    }

}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validFormData(formData);
    showDetails(formData);
})