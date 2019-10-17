const likeButtons = document.querySelectorAll("#likes")
const item = document.querySelectorAll("#box")

for (const button of likeButtons) {
    const plus = button.querySelector("#like-butt");
    plus.addEventListener('click', () => {
        const url = "/entries/entry.likes/like"
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const number = data.querySelector("#count")
                number.textContent = Number(number.textContent) + 1;
            })
    })
}
