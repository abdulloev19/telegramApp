let cls = document.getElementById("close");
let username = document.querySelector(".username");
let toggle = document.querySelector(".toggle");
let tg = window.Telegram.WebApp;
tg.expand();
cls.addEventListener('click', () => {
    tg.close()
})
username.innerHTML = tg.initDataUnsafe?.user?.username;
username.innerHTML += JSON.stringify(tg)






tg.showPopup()