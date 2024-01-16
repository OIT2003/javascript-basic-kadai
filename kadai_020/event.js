const afterString = "ボタンをクリックしました";
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    document.getElementById("text").textContent = afterString
});
