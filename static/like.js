const likeButtons = document.querySelectorAll("#likes")
console.log(likeButtons)

for (const button of likeButtons) {
    const plus = button.querySelector("#like-butt");
    console.log(plus)
    plus.addEventListener('click', function () {
        const url = `/entries/${plus}:id/like`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const number = data.querySelector("#count")
                console.log(number)
                number.textContent = Number(number.textContent) + 1;
            })
    })
}
