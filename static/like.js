const list = document.querySelector("#list")
const items = list.querySelectorAll("#box")

for (const item of items) {
    const id = item.querySelector("#id");
    const plus = item.querySelector("#like-butt")
    const number = plus.querySelector("#count")
    plus.addEventListener("click", () => {
        const url = `/entries/${id.textContent.trim()}/like`
        fetch(url, { method: 'post' })
            .then(response => response.json())
            .then((response) => {
                number.textContent = response.likes;
            })
    })
}
