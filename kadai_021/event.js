const textId = document.getElementById("text");
const afterString = "ボタンをクリックしました";
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    setTimeout(() => {
        textId.textContent = afterString
    }, 2000);
});
