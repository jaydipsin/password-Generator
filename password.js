const input = document.getElementById("input");
const copyBtn = document.querySelector(".copy-btn");
const generatePasswordBtn = document.querySelector(".generateBtn");
const randomPasswords = () => {
  const passVal = "abcdefghijkmlnopqrstuvwxyz123456789+-*/.,;'@!#$%^&*";
  let password = "";
  for (let i = 0; i < 9; i++) {
   password += passVal[Math.floor(Math.random() * 51)];
  }
  return password
};

generatePasswordBtn.addEventListener("click", () => {
    input.value = randomPasswords();
});

copyBtn.addEventListener("click",()=>{
    navigator.clipboard.writeText(input.value);
    alert(`your passworde is ${input.value} is copied`)
})