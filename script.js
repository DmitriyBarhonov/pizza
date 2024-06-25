document.addEventListener("DOMContentLoaded", function () {
  // Wow.js
  new WOW().init();

  //   POPUP
  const closeMenu = document.querySelector(".popup__close");
  const popup = document.querySelector(".popup");
  const popupClose = document.querySelector("#popup-close");
  closeMenu.addEventListener("click", () => {
    nav.classList.remove("active");
  });
  popupClose.addEventListener("click", () => {
    popup.style.display = "none";
  });

  //   LIGHTBOX
  lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    fitImagesInViewport: false,
    disableScrolling: true,
  });

  //   BURGER
  const burgerMenu = document.querySelector(".burger-menu");
  const nav = document.querySelector(".nav");
  burgerMenu.addEventListener("click", () => {
    nav.classList.toggle("active");
  });

  //   VALIDATION
  document.querySelector("#name").addEventListener("input", function () {
    this.value = this.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
  });

  document.querySelector('#phone').addEventListener('input', function(event) {
    this.value = this.value.replace(/[^\d\s\+\-()]/g, '');
});


  // SUMBIT
  document
    .querySelector(".order-form__form")
    .addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      const fakeFetch = new Promise((res, rej) => {
        res("done");
      });

      fakeFetch
        .then((data) => {
          popup.style.display = "flex";
        })
        .catch((data) => {
          new Error(data);
        });

      //   Если нужен прям запрос на сервер

      //   fetch("/submit-order", {
      //     method: "POST",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify(data),
      //   })
      //     .then((data) => {
      //       popup.style.display = "flex";
      //     })
      //     .catch((error) => {
      //       console.error("Ошибка:");
      //       alert("Произошла ошибка при оформлении заказа.");
      //     });
    });
});
