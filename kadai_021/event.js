const afterString = "ボタンをクリックしました";
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
    setTimeout(() => {
        document.getElementById("text").textContent = afterString
    }, 2000);
});
