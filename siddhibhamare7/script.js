const goal1 = document.querySelector("#goal-1");
const goal2 = document.querySelector("#goal-2");
const goal3 = document.querySelector("#goal-3");
const reflection = document.querySelector("#reflection");
const littleWin = document.querySelector("#little-win");
const saveButton = document.querySelector("#save-button");
const clearButton = document.querySelector("#clear-button");
const message = document.querySelector("#message");
function getDataKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return year + "-" + month + "-" + day;
}
const complete1 = document.querySelector("#complete-1");
const complete2 = document.querySelector("#complete-2");
const complete3 = document.querySelector("#complete-3");

//Check whether we saved the progress earlier
function loadProgress(date) {
    const savedProgress = localStorage.getItem(
        "littleByLittle-" + getDataKey(date)
    );

    const progress = savedProgress
        ? JSON.parse(savedProgress)
        : {};

    goal1.value = progress.goal1 || "";
    goal2.value = progress.goal2 || "";
    goal3.value = progress.goal3 || "";

    reflection.value = progress.reflection || "";
    littleWin.value = progress.littleWin || "";

    complete1.checked = progress.complete1 || false;
    complete2.checked = progress.complete2 || false;
    complete3.checked = progress.complete3 || false;

    message.textContent = "";

    updateProgress();
}

//Save the student's progress when then button is clicked
saveButton.addEventListener("click", function () {
 const progress = {
    goal1: goal1.value,
    goal2: goal2.value,
    goal3: goal3.value,
    reflection: reflection.value,
    littleWin: littleWin.value,
    complete1: complete1.checked,
    complete2: complete2.checked,
    complete3: complete3.checked
  };

    localStorage.setItem("littleByLittle-" + getDataKey(selectedDate), JSON.stringify(progress)
  ); 
  message.textContent = "Your progress has been saved!💗";
  updateMonthlyProgress();
  saveButton.classList.remove("saved");
  void saveButton.offsetWidth;
  saveButton.classList.add("saved");
});

function updateProgress()  {
  let completed = 0;
  if (complete1.checked) {
    completed = completed + 1;
  }
  if (complete2.checked) {
    completed = completed + 1;
  }
  if (complete3.checked) {
    completed = completed + 1;
  }
  complete1.closest(".goal-item").classList.toggle("completed", complete1.checked);
  complete2.closest(".goal-item").classList.toggle("completed", complete2.checked);
  complete3.closest(".goal-item").classList.toggle("completed", complete3.checked);
  document.querySelector("#progress-text").textContent = completed + " of 3 goals completed";
  const progressText = document.querySelector("#progress-text");
  if (completed == 3) {
    progressText.textContent = "All 3 goals complete! Look at you go! 🎉";
  }
}

complete1.addEventListener("change", updateProgress);
complete2.addEventListener("change", updateProgress);
complete3.addEventListener("change", updateProgress);
updateProgress();

const calendar = document.querySelector("#calendar");
const monthYear = document.querySelector("#month-year");
const selectedDateText = document.querySelector("#selected-date");

let displayedMonth = new Date();
let selectedDate = new Date();

function renderCalendar() {
    calendar.innerHTML = "";

    const year = displayedMonth.getFullYear();
    const month = displayedMonth.getMonth();

    monthYear.textContent = displayedMonth.toLocaleDateString(
        "en-IN",
        { month: "long", year: "numeric" }
    );

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    weekdays.forEach(function (day) {
        const heading = document.createElement("div");
        heading.textContent = day;
        heading.style.textAlign = "center";
        heading.style.fontWeight = "bold";
        calendar.appendChild(heading);
    });

    for (let i = 0; i < firstDay; i++) {
        calendar.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dateButton = document.createElement("button");
        dateButton.className = "calendar-day";
        dateButton.textContent = day;

        const dateKey = "littleByLittle-" + getDataKey(new Date(year, month, day));

        if (localStorage.getItem(dateKey)) {
            dateButton.classList.add("has-entry");
        }

        dateButton.addEventListener("click", function () {
          selectedDate = new Date(year, month, day);

          selectedDateText.textContent = "Selected date: " + selectedDate.toLocaleDateString("en-IN");
          loadProgress(selectedDate);
          renderCalendar();
        });

        if (
            selectedDate.getFullYear() === year &&
            selectedDate.getMonth() === month &&
            selectedDate.getDate() === day
        ) {
            dateButton.classList.add("selected");
        }

        calendar.appendChild(dateButton);
    }
    updateMonthlyProgress();
}
document.querySelector("#prev-month").addEventListener("click", function () {
    displayedMonth.setMonth(displayedMonth.getMonth() - 1);
    renderCalendar();
});

document.querySelector("#next-month").addEventListener("click", function () {
    displayedMonth.setMonth(displayedMonth.getMonth() + 1);
    renderCalendar();
});

function updateMonthlyProgress() {
    const year = displayedMonth.getFullYear();
    const month = displayedMonth.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let journaledDays = 0;

    for (let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, month, day);
        const key = "littleByLittle-" + getDataKey(date);

        if (localStorage.getItem(key)) {
            journaledDays++;
        }
    }

    document.querySelector("#monthly-progress").textContent =
        "You've journaled on " + journaledDays +
        (journaledDays === 1 ? " day" : " days") +
        " this month 🌱";
}
loadProgress(selectedDate);
renderCalendar();

clearButton.addEventListener("click", function () {
  const confirmClear = confirm(
    "Are you sure you want to clear this day's entry?"
  );

  if (!confirmClear) {
    return;
  }

  localStorage.removeItem(
    "littleByLittle-" + getDataKey(selectedDate)
  );

  loadProgress(selectedDate);
  renderCalendar();
});