// =================== progress
let progressDiv = document.querySelector(".progress-div");

let progressBar = document.querySelectorAll(".progress-bar");

let counterDev = document.querySelector(".counter-dev");

let counterTag = document.querySelectorAll(".counter-dev h3");


ScrollOut({
    targets: ".progress-div , .counter-dev",
});


window.addEventListener("scroll", () => {

    if (progressDiv.dataset.scroll == "in") {
        progressBar.forEach(el => {

            let valueNow = el.getAttribute("aria-valuenow");

            el.style.width = valueNow + "%";

            let counterSpan = el.parentElement.parentElement.querySelector(".progress-value span");

            let timer = setInterval(() => {

                if (Number(counterSpan.textContent) < valueNow) {

                    counterSpan.textContent = Number(counterSpan.textContent) + 1;

                } else {
                    clearInterval(timer);
                }
            }, 500);
        });
    } else {
        progressBar.forEach(el => {
            el.style.width = 0 + "%";
            el.parentElement.parentElement.querySelector(".progress-value span").textContent = 0;
            // console.log(valueNow);
        });
    };

    // Counter
    if (counterDev.dataset.scroll == "in") {

        counterTag.forEach(el => {

            let time = setInterval(() => {

                if (Number(el.innerText) < el.dataset.counter) {

                    el.innerText = Number(el.innerText) + 1;

                } else {

                    clearInterval(time);

                }

            }, 1000);

        });
    } else {

        counterTag.forEach(el => {

            el.innerText = 0;
        });
    };
});

// filter
let filterListItems = document.querySelectorAll(".list-group li");

let filterItems = document.querySelectorAll(".filter-item a");

filterListItems.forEach((list) => {

    list.addEventListener("click", () => {

        document.querySelector(".list-group li.active").classList.remove("active");

        list.classList.add("active");

        let filterValue = list.dataset.filter;

        filterItems.forEach((item) => {

            if (item.classList.contains(filterValue)) {

                item.classList.remove("hidden");

                item.classList.add("active");

            } else {

                item.classList.remove("active");

                item.classList.add("hidden");
            }
        });
    });
});
// filter