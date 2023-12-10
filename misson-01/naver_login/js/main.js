const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

const email = document.querySelector(".user-email-input");
const password = document.querySelector(".user-password-input");
const loginButton = document.querySelector(".btn-login");

/*

1. email 정규표현식을 사용한 validation (o)
2. pw 정규표현식을 사용한 validation (o)
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

const emailValidation = loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userEmail = email.value;

  if (
    userEmail !== "" &&
    userEmail.includes("@") === true &&
    emailReg(userEmail) === true
  ) {
    email.classList.add("is--invalid");
  } else {
    email.classList.remove("is--invalid");
  }
});

const passwordValidation = loginButton.addEventListener("click", (e) => {
  e.preventDefault();
  const userPassword = password.value;

  if (
    userPassword !== "" &&
    userPassword.length > 4 &&
    pwReg(userPassword) === true
  ) {
    password.classList.add("is--invalid");
  } else {
    password.classList.remove("is--invalid");
  }
});

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(text).toLowerCase());
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}

function loginValue(userInfo) {
  return loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const emailValue = email.value;
    const passWordValue = password.value;

    if (emailValue === userInfo.id && passWordValue === userInfo.pw) {
      window.location.href = "welcome.html";
    }
  });
}

loginValue(user);
