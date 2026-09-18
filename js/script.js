// ===============================
// PROFILE BUTTON
// ===============================

const profileButton = document.querySelector(".profile-button");

if (profileButton) {
    profileButton.addEventListener("click", () => {
        alert("Thanks for visiting StayFinder!");
    });
}


// ===============================
// CAROUSELS
// ===============================

const carousels = document.querySelectorAll(".carousel");

carousels.forEach((carousel) => {

    const track = carousel.querySelector(".carousel-track");
    const nextButton = carousel.querySelector(".next");
    const previousButton = carousel.querySelector(".previous");

    if (!track || !nextButton || !previousButton) {
        return;
    }

    let currentIndex = 0;

    function getCardsPerView() {

        if (window.innerWidth <= 700) {
            return 1;
        }

        if (window.innheerWidth <= 900) {
            return 2;
        }

        return 3;
    }


    function moveSlider() {

        const cards = track.querySelectorAll(".place-card");

        if (cards.length === 0) {
            return;
        }

        const cardsPerView = getCardsPerView();

        const maxIndex = Math.max(
            0,
            cards.length - cardsPerView
        );

        // Prevent index from going too far
        currentIndex = Math.min(
            currentIndex,
            maxIndex
        );

        const cardWidth = cards[0].offsetWidth;

        const gap = 20;

        const moveAmount =
            (cardWidth + gap) * currentIndex;

        track.style.transform =
            `translateX(-${moveAmount}px)`;


        // Disable previous button at beginning
        previousButton.disabled =
            currentIndex === 0;

        // Disable next button at end
        nextButton.disabled =
            currentIndex >= maxIndex;
    }


    // NEXT
    nextButton.addEventListener("click", () => {

        const cards = track.querySelectorAll(".place-card");

        const cardsPerView = getCardsPerView();

        const maxIndex = Math.max(
            0,
            cards.length - cardsPerView
        );

        if (currentIndex < maxIndex) {
            currentIndex++;
            moveSlider();
        }
    });


    // PREVIOUS
    previousButton.addEventListener("click", () => {

        if (currentIndex > 0) {
            currentIndex--;
            moveSlider();
        }
    });


    // RESET carousel when screen size changes
    window.addEventListener("resize", () => {

        currentIndex = 0;

        track.style.transform = "translateX(0)";

        moveSlider();
    });


    // Initial position
    moveSlider();

});


// ===============================
// FOOTER CATEGORY SWITCHER
// ===============================


const popular = [
    {
        name: "Wireless Headphones",
        p: "StayFinder"
    },

    {
        name: "Bluetooth Speaker",
        p: "StayFinder"
    },
    {
        name: "Smart TV",
        p: "StayFinder"
    },
    {
        name: "Wireless Headphones",
        p: "StayFinder"
    },

    {
        name: "Bluetooth Speaker",
        p: "StayFinder"
    },
    {
        name: "Smart TV",
        p: "StayFinder"
    }
]


const artCulture = [
    {
        name: "Denim Jacket",
        p: "StayFInder"
    },
    {
        name: "Designer Shirt",
        p: "StayFinder"
    },
    {
        name: "Cargo Trousers",
        p: "StayFInder"
    },
    {
        name: "Denim Jacket",
        p: "StayFInder"
    },
    {
        name: "Designer Shirt",
        p: "StayFinder"
    },
    {
        name: "Cargo Trousers",
        p: "StayFInder"
    }
]

const beach = [
    {
        name: "Nike Sneakers",
        p: "StayFinder"
    },
    {
        name: "Running Shoes",
        p: "StayFInder"
    },
    {
        name: "Classic Sneakers",
        p: "StayFinder"
    },
    {
        name: "Nike Sneakers",
        p: "StayFinder"
    },
    {
        name: "Running Shoes",
        p: "StayFInder"
    },
    {
        name: "Classic Sneakers",
        p: "StayFinder"
    }
]

const mountains = [
    {
        name: "Rolex Style Watch",
        p: "StayFinder"
    },
    {
        name: "Smart Watch",
        p: "StayFInder"
    },
    {
        name: "Classic Leather Watch",
        p: "StayFinder"
    },
    {
        name: "Rolex Style Watch",
        p: "StayFinder"
    },
    {
        name: "Smart Watch",
        p: "StayFInder"
    },
    {
        name: "Classic Leather Watch",
        p: "StayFinder"
    }
]

const outdoors = [
    {
        name: "iPhone",
        p: "StayFinder"
    },
    {

        name: "Samsung Galaxy",
        p: "StayFinder"
    },
    {
        name: "Google Pixel",
        p: "StayFinder"
    },
    {
        name: "iPhone",
        p: "StayFinder"
    },
    {

        name: "Samsung Galaxy",
        p: "StayFinder"
    },
    {
        name: "Google Pixel",
        p: "StayFinder"
    }

]


const things = [
    {
        name: "MackBook",
        p: "StayFinder"
    },
    {
        name: "HP Laptop",
        p: "StayFinder"
    },
    {
        name: "Dell Laptop",
        p: "StayFinder"
    },
    {
        name: "MackBook",
        p: "StayFinder"
    },
    {
        name: "HP Laptop",
        p: "StayFinder"
    },
    {
        name: "Dell Laptop",
        p: "StayFinder"
    }
]

const travel = [
    {
        name: "PlayStation 5",
        p: "StayFinder"
    },
    {
        name: "Xbox",
        p: "StayFinder"
    },
    {
        name: "Gaming Controller",
        p: "StayFinder"
    },
    {
        name: "PlayStation 5",
        p: "StayFinder"
    },
    {
        name: "Xbox",
        p: "StayFinder"
    },
    {
        name: "Gaming Controller",
        p: "StayFinder"
    }

]

const stayFinder = [
    {
        name: "Backpack",
        p: "StayFinder"
    },
    {
        name: "Sunglasses",
        p: "StayFinder"
    },
    {
        name: "Wallet",
        p: "StayFinder"
    },
    {
        name: "Backpack",
        p: "StayFinder"
    },
    {
        name: "Sunglasses",
        p: "StayFinder"
    },
    {
        name: "Wallet",
        p: "StayFinder"
    }
]

const categories = {
    popular: popular,
    artCulture: artCulture,
    beach: beach,
    mountains: mountains,
    outdoors: outdoors,
    things: things,
    travel: travel,
    stayFinder: stayFinder,
}


function displayProducts(products) {
    const productHTML = products.map(product => {
        return `
        <div class="product">
        <h2>${product.name}</h2>
        <p>${product.price}</p>
        </div>
        `;
    });

    categoryDisplay.innerHTML = productHTML.join("");
}

const swithcerBtn = document.querySelectorAll(".switcher-btn");
const categoryDisplay = document.getElementById("footerDisplay");

swithcerBtn.forEach(button => {

    button.addEventListener("click", () => {
        const name = button.dataset.name;
        const selectedProduct = categories[name];

        displayProducts(selectedProduct);

        swithcerBtn.forEach(BTN => {
            BTN.classList.remove("active");
        });

        btn.classList.add("active");
    })
});


displayProducts(popular)



// ===============================
// Selected Place
// ===============================
const selectedPlace = document.getElementById("selectedPlace");
const selectedImage = document.getElementById("selectedImage");
const selectedLocation = document.getElementById("selectedLocation");
const closeSelected = document.getElementById("closeSelected");
const galleryButtons = document.querySelectorAll(".gallery-btn");

galleryButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = button.closest(".place-card");

        const image = card.querySelector("img");
        const location = card.querySelector("p");

        selectedImage.src = image.src;
        selectedLocation.textContent = location.textContent;

        selectedPlace.style.display = "block";

    });

});

closeSelected.addEventListener("click", () => {
    selectedPlace.style.display = "none";
})

// ===============================
// BACK TO TOP BUTTON
// ===============================

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 100) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}



// ========================
// HAMBURGER MENU TOGGLE
// ========================


const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
    menuBtn.classList.toggle("active");
});


const unitBUttons = document.querySelectorAll(".unit");
const weatherForm = document.getElementById("weatherForm");

let currentUnit = "imperic";
const unitSymbol = { metric: "°C", imperial: "°F", standard: "K" };

// UNIT BUTTONS
unitBUttons.forEach(btn => {
    btn.addEventListener("click", () => {
        currentUnit = btn.dataset.unit;
    })
});


// GET WEATHER

async function getWeather(event) {

    event.preventDefault();

    const apikey = document.getElementById("apikey").value.trim();
    const city = document.getElementById("city").value.trim();
    const btn = document.getElementById("getWeatherBtn");

    if (!apikey) {
        alert("Please input apikey");
    }

    if (!city) {
        alert("Please input a city");
    }

    // Create api parameters

    const params = new URLSearchParams({
        q: city,
        appid: apikey,
        units: currentUnit
    });

    const url = `https://api.openweathermap.org/data/2.5/weather?${params.toString()}`;

    btn.disabled = true;
    btn.textContent = "Fetching ...";

    try {
        const response = await fetch(url);

        const data = await response.json();

        //Check if API returned an error
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong.")
        }
        renderWeather(data)
    } catch (error) {

        const card = document.getElementById("weatherCard");
        card.innerHTML = `
        <p class="error">${error.message}</p>`
    } finally {
        btn.disabled = false;
        btn.textContent = "Get Weather";
    }

}

function renderWeather(data) {

    const card = document.getElementById("weatherCard");

    const iconCode = data.weather?.[0]?.icon;

    const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : "";

  card.innerHTML = `

        <p class="city">
            ${data.name}, ${data.sys?.country ?? ""}
        </p>

        <p class="sub">
            Updated ${new Date().toLocaleTimeString()}
        </p>


        <div class="temp-row">

            <div class="temp">
                ${Math.round(data.main.temp)}
                ${unitSymbol[currentUnit]}
            </div>


            ${
                iconUrl
                    ? `<img 
                        class="icon"
                        src="${iconUrl}"
                        alt="${data.weather?.[0]?.description ?? "Weather icon"}"
                    >`
                    : ""
            }


            <div class="cond">
                ${data.weather?.[0]?.description ?? ""}
            </div>

        </div>


        <div class="stat-row">

            <div class="stat">
                <span class="label">
                    Feels like
                </span>

                <span class="val">
                    ${Math.round(data.main.feels_like)}
                    ${unitSymbol[currentUnit]}
                </span>
            </div>


            <div class="stat">
                <span class="label">
                    Humidity
                </span>

                <span class="val">
                    ${data.main.humidity}%
                </span>
            </div>


            <div class="stat">

                <span class="label">
                    Wind
                </span>

                <span class="val">
                    ${data.wind.speed}
                    ${currentUnit === "imperial" ? "mph" : "m/s"}
                </span>

            </div>


            <div class="stat">

                <span class="label">
                    Pressure
                </span>

                <span class="val">
                    ${data.main.pressure} hPa
                </span>

            </div>

        

        </div>
    `;


}

const closeBtn  = document.getElementById("closeBtn").addEventListener("click", () => {
    document.querySelector(".weather-container").classList.remove("show")
})


weatherForm.addEventListener("submit", getWeather);



const weatherBtn = document.getElementById("getWeather");
const weatherCard = document.querySelector(".weather-container")
weatherBtn.addEventListener("click", () => {
weatherCard.classList.add("show")
})




// const apikey = document.getElementById("apikey");
// const city = document.getElementById("city");

// const errorBox = document.getElementById("errorBox");


// const unitBtn = document.querySelectorAll(".unit");
// const getWeatherBtn = document.getElementById("getWeatherBtn");

// unitBtn.forEach(btn => {
//     btn.addEventListener("click", () => {
//         const unitButton = data.dataset.unit;
//     })
// });


// function name(params) {
    
// }

