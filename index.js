const iconBG = document.getElementById('iconBG')
const body = document.body

iconBG.addEventListener('click', function () {
    body.classList.toggle('dark-mode') // Alterna a classe "dark-mode", meio que ele liga e desliga esse dark-mode

    const isDark = body.classList.contains('dark-mode') //Aqui eu apenas estou conferindo se o body tem essa class "dark-mode"

    iconBG.innerHTML = isDark ? '<img src="icons/solPreto.png" alt="icon do sol">': '<img src="icons/luaPreta.png" alt="icon da lua">'
})
