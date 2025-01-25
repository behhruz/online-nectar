import React, { useState } from "react";


const Carousel = () => {
    const slides = [
        "/public/img2.svg",
        "https://fruit-time.ua/images/cache/blog/yx-img-1112-1110x833r.jpg",
        " https://api.itab.pro/storage/93/bf/93bf6f24-5c3b-46b6-b07d-2f1ec216b011.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlfbyHzEr4Vn74qAQDR2fUB4SPvmocHP5d7Q&s",
        "https://happyroni.com/wp-content/uploads/2022/08/bobovi-1.jpg",
        "https://bbtr.siberianhealth.com/upload/iblock/2bf/Depositphotos_321627986_L_1273.jpg",
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full">

            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        <img
                            src={slide}
                            alt={`Slide ${index + 1}`}
                            className="block w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>


            <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"
                            }`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>


            <button
                type="button"
                className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={prevSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 1 1 5l4 4"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>


            <button
                type="button"
                className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                onClick={nextSlide}
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white">
                    <svg
                        className="w-4 h-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 9 4-4-4-4"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>
    );
};

// Компонент Home
const Home = () => {
    return (
        <div className="p-5 text-center">
            {/* Первое изображение */}
            <div className="flex justify-center mb-5">
                <img
                    src="./public/img1.png"
                    alt="Fresh Vegetables"
                    className="rounded-lg"
                />
            </div>      {/* Секция местоположения */}
            <div className="mb-5 flex items-center justify-center space-x-2 text-lg">
                <img
                    src="./public/img3.png"
                    alt="Location Icon"
                    className="rounded-lg"
                />
                <span>Dhaka, Banassre</span>
            </div>

            {/* Поле для поиска */}
            <input
                type="text"
                placeholder="Search Store"
                className="w-4/5 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
            />


            <div className="mt-5">
                <Carousel />
            </div>
        </div>
    );
};

export default Home;