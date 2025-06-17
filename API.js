const apiKey = "524c4a9ec26e66c1b312ae5d37ca5bc3";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("cityName").innerText = data.name;
      document.getElementById("temperature").innerText = `Temperature: ${data.main.temp} °C`;
      document.getElementById("description").innerText = `Weather: ${data.weather[0].description}`;
      document.getElementById("pressure").innerText = `Pressure: ${data.main.pressure} hPa`;
      document.getElementById("humidity").innerText = `Humidity: ${data.main.humidity} %`;
      document.getElementById("wind").innerText = `Windspeed: ${data.wind.speed} m/s`;

      generateQuiz(city);
    })
    .catch(() => alert("City not found"));
}

function generateQuiz(city) {
  const quizData = {
    Bengaluru: { q: "What is the capital of Karnataka?", a: "B", options: ["Hyderabad", "Bengaluru", "Chennai", "Mumbai"] },
    Delhi: { q: "What is the capital of India?", a: "A", options: ["New Delhi", "Mumbai", "Chennai", "Kolkata"] },
    Chennai: { q: "What is the capital of Tamil Nadu?", a: "C", options: ["Bengaluru", "Mumbai", "Chennai", "Kochi"] },
    Hyderabad: { q: "What is the capital of Telangana?", a: "D", options: ["Chennai", "Pune", "Nagpur", "Hyderabad"] },
       London: { q: "What is the capital of the United Kingdom?", a: "A", options: ["London", "Birmingham", "Manchester", "Leeds"] },
  };

  const cityImages = {
    Delhi: "https://static.toiimg.com/photo/msid-24245804,width-96,height-65.cms",
    London: "https://images.pexels.com/photos/269128/pexels-photo-269128.jpeg?cs=srgb&dl=pexels-jdominici-269128.jpg&fm=jpg",
    Bengaluru: "https://i.ytimg.com/vi/qaIlWuNmKug/sddefault.jpg",
    Hyderabad: "https://www.nobroker.in/blog/wp-content/uploads/2021/09/posh-areas-in-Hyderabad.jpg",
    Chennai: "https://vj-prod-website-cms.s3.ap-southeast-1.amazonaws.com/1765681589chennai-1696645169332.jpg"
  };

  const data = quizData[city] || {
    q: `What is the capital of ${city}?`,
    a: "A",
    options: ["No data", "Option 2", "Option 3", "Option 4"]
  };

  document.getElementById("quizQuestion").innerText = data.q;
  const opts = document.querySelectorAll(".options label");
  opts.forEach((opt, i) => {
    opt.innerHTML = `<input type="radio" name="option" value="${String.fromCharCode(65 + i)}" /> ${String.fromCharCode(65 + i)}. ${data.options[i]}`;
  });

  document.getElementById("quiz-title").innerText = `${city} Quiz`;
  document.getElementById("quizImage").src = cityImages[city] || `https://source.unsplash.com/300x150/?${city}`;
  document.getElementById("quizImage").setAttribute("data-answer", data.a);
  document.getElementById("result").innerText = "";
}

function checkAnswer() {
  const answer = document.querySelector("input[name='option']:checked")?.value;
  const correct = document.getElementById("quizImage").getAttribute("data-answer");
  const result = document.getElementById("result");
  if (!answer) return alert("Please select an option");
  result.innerText = answer === correct ? "Correct Answer!" : `Wrong Answer. Correct is ${correct}`;
  result.className = answer === correct ? "correct" : "incorrect";
}




