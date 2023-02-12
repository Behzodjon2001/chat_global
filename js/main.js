const userNameEl = document.getElementById("username");
const passwordEl = document.getElementById("password");
let fileChoose = document.getElementById("file_choose").src;

const form = document.getElementById("form");

const isRequired = (value) => {
    //   if (value === "") return true;
    //   return false;
    let res = value === "" ? true : false;
    return res;
};

const showError = (input, message) => {
    const formInput = input.parentElement;
    formInput.classList.add("error");
    formInput.querySelector("small").innerText = message;
};

const showSuccess = (input) => {
    const formInput = input.parentElement;
    formInput.classList.remove("error");
    formInput.querySelector("small").innerText = "";
};

const checkUserName = () => {
    let isValid = false;
    const username = userNameEl.value.trim();
    if (isRequired(username)) {
        showError(userNameEl, "To'ldirilishi majburiy bo'lgan maydon");
    } else {
        showSuccess(userNameEl);
        isValid = true;
    }
    return isValid;
};

const checkPassword = () => {
    let isValid = false;
    const password = passwordEl.value.trim();
    if (isRequired(password)) {
        showError(passwordEl, "To'ldirilishi majburiy bo'lgan maydon");
    } else if (!isPasswordSecure(password)) {
        console.log(1212);
        showError(passwordEl, "Password must has at least 8 characters that include at least 1 lowercase character, 1 uppercase characters, 1 number, and 1 special character in (!@#$%^&*)");
    } else {
        showSuccess(passwordEl);
        isValid = true;
    }
    return isValid;
}

const isPasswordSecure = (password) => {
    const re = new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    return re.test(password);
};


form.addEventListener("submit", (e) => {
    e.preventDefault();

    let isUserName = checkUserName();
    let isPassword = checkPassword();
    //   let isPassword = checkPassword()

    if (isUserName && isPassword) {
        document.getElementById("wrapper").style.display = "none";
        document.getElementById("pseudo_name").innerText = userNameEl.value;
        document.getElementById("grade_lastname").innerText = passwordEl.value;
        document.getElementById("image_user").innerHTML = fileChoose.value;
    }
});

form.addEventListener("input", (e) => {
    //   console.log("e", e.target.value);
    e.preventDefault();
    switch (e.target.id) {
        case "username":
            checkUserName();
            break;
        case "password":
            checkPassword();
        default:
            break;
    }
});