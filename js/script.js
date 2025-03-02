document.getElementById("discover-btn").addEventListener('click' , function(event){
window.location.href="./blog.html";
})

function changeBG(){
    const randomColors=['#FCE4EC', '#F8BBD0', '#E1BEE7', '#D1C4E9', '#C5CAE9', '#BBDEFB', '#B2EBF2', '#C8E6C9', '#DCEDC8', '#FFF9C4', '#FFECB3', '#FFE0B2', '#FFCCBC', '#D7CCC8'];
    document.body.style.backgroundColor = randomColors[Math.floor(Math.random()*randomColors.length)];
}
let buttonOne = document.querySelectorAll(".btn-1");
const taskCount = document.getElementById("taskCount");
const taskDone = document.getElementById("taskDone");
buttonOne.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board updated successfully");
        this.disabled = true;
        let Count = parseInt(taskCount.textContent);
         taskCount.textContent = Count - 1;
           let done = parseInt(taskDone.textContent);
        taskDone.textContent = done + 1;
            const completeNotification = document.querySelector(".notification-full");
        const taskTitleOne = document.getElementById("title-1").textContent;
       
        const time = new Date();
         const hour = time.getHours();
          const minute = time.getMinutes();
        const second = time.getSeconds();
         const amPm = hour >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hour % 12 || 12}:${minute < 10 ? '0' + minute  : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
        const activityMessage = `You have completed the task ${taskTitleOne} at ${formattedTime}`;
          const notification = document.createElement("p");
        notification.classList.add("bg-[#F4F7FF]", "py-3", "px-3", "rounded-lg", "mt-5", "mb-5");
        notification.textContent = activityMessage;

        completeNotification.appendChild(notification);

    });
});
document.getElementById('currentDate&Time').textContent = formatDateTime();
        function formatDateTime() {
            const date = new Date();
          const currentDate = { weekday: 'short', month: 'short', day:    'numeric', year: 'numeric' };
            return date.toLocaleDateString('en-US', currentDate);
        }
let buttonTwo = document.querySelectorAll(".btn-2");
buttonTwo.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board updated successfully");
        this.disabled = true;

        let Count = parseInt(taskCount.textContent);
        taskCount.textContent = Count - 1;

        let done = parseInt(taskDone.textContent);
        taskDone.textContent = done + 1;

        const completeNotification = document.querySelector(".notification-full");
        const taskTitleTwo = document.getElementById("title-2").textContent;
          const time = new Date();
           const hour = time.getHours();
          const minute = time.getMinutes();
          const second = time.getSeconds();
          const amPm = hour >= 12 ? 'PM' : 'AM';
         const formattedTime = `${hour % 12 || 12}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
        const activityMessage = `You have completed the task ${taskTitleTwo} at ${formattedTime}`;
        const notification = document.createElement("p");
          notification.classList.add("bg-[#F4F7FF]", "py-3", "px-3", "rounded-lg", "mt-5", "mb-5");
        notification.textContent = activityMessage;
        completeNotification.appendChild(notification);
    });
});
let buttonThree = document.querySelectorAll(".btn-3");
buttonThree.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board updated successfully");
        this.disabled = true;

        let Count = parseInt(taskCount.textContent);
        taskCount.textContent = Count - 1;

        let done = parseInt(taskDone.textContent);
        taskDone.textContent = done + 1;

        const completeNotification = document.querySelector(".notification-full");
        const taskTitleThree = document.getElementById("title-3").textContent;
          const time = new Date();
        const hour = time.getHours();
        const minute = time.getMinutes();
          const second = time.getSeconds();
        const amPm = hour >= 12 ? 'PM' : 'AM';
        const formattedTime = `${hour % 12 || 12}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
         const activityMessage = `You have completed the task ${taskTitleThree} at ${formattedTime}`;
        const notification = document.createElement("p");
          notification.classList.add("bg-[#F4F7FF]", "py-3", "px-3", "rounded-lg", "mt-5", "mb-5");
        notification.textContent = activityMessage;
        completeNotification.appendChild(notification);
    });
});
let buttonFour = document.querySelectorAll(".btn-4");
buttonFour.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board updated successfully");
        this.disabled = true;

        let Count = parseInt(taskCount.textContent);
          taskCount.textContent = Count - 1;

        let done = parseInt(taskDone.textContent);
        taskDone.textContent = done + 1;

        const completeNotification = document.querySelector(".notification-full");
        const taskTitleFour = document.getElementById("title-4").textContent;
          const time = new Date();
         const hour = time.getHours();
        const minute = time.getMinutes();
          const second = time.getSeconds();
        const amPm = hour >= 12 ? 'PM' : 'AM';
         const formattedTime = `${hour % 12 || 12}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
         const activityMessage = `You have completed the task ${taskTitleFour} at ${formattedTime}`;
        const notification = document.createElement("p");
         notification.classList.add("bg-[#F4F7FF]", "py-3", "px-3", "rounded-lg", "mt-5", "mb-5");
        notification.textContent = activityMessage;
        completeNotification.appendChild(notification);
    });
});
let buttonFive = document.querySelectorAll(".btn-5");
buttonFive.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board updated successfully");
        this.disabled = true;

        let Count = parseInt(taskCount.textContent);
        taskCount.textContent = Count - 1;

        let done = parseInt(taskDone.textContent);
        taskDone.textContent = done + 1;

        const completeNotification = document.querySelector(".notification-full");
        const taskTitleFive = document.getElementById("title-5").textContent;
         const time = new Date();
        const hour = time.getHours();
         const minute = time.getMinutes();
        const second = time.getSeconds();
         const amPm = hour >= 12 ? 'PM' : 'AM';
          const formattedTime = `${hour % 12 || 12}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
        const activityMessage = `You have completed the task ${taskTitleFive} at ${formattedTime}`;
          const notification = document.createElement("p");
        notification.classList.add("bg-[#F4F7FF]", "py-3", "px-3", "rounded-lg", "mt-5", "mb-5");
        notification.textContent = activityMessage;
        completeNotification.appendChild(notification);
    });
});

let buttonSix = document.querySelectorAll(".btn-6");
buttonSix.forEach((button) => {
    button.addEventListener("click", function () {
        alert("Board updated successfully");
        this.disabled = true;
          let Count = parseInt(taskCount.textContent);
        taskCount.textContent = Count - 1;

        let done = parseInt(taskDone.textContent);
           taskDone.textContent = done + 1;

        const completeNotification = document.querySelector(".notification-full");
        const taskTitleSix = document.getElementById("title-6").textContent;

        const time = new Date();
        const hour = time.getHours();
          const minute = time.getMinutes();
        const second = time.getSeconds();
        const amPm = hour >= 12 ? 'PM' : 'AM';
          const formattedTime = `${hour % 12 || 12}:${minute < 10 ? '0' + minute : minute}:${second < 10 ? '0' + second : second} ${amPm}`;
        const activityMessage = `You have completed the task ${taskTitleSix} at ${formattedTime}`;
        const notification = document.createElement("p");
          notification.classList.add("bg-[#F4F7FF]", "py-3", "px-3", "rounded-lg", "mt-5", "mb-5");
        notification.textContent = activityMessage;
        completeNotification.appendChild(notification);
    });
});
const buttons = document.querySelectorAll(".alert");
let clickedTime = 0;
buttons.forEach(button => {
    button.addEventListener("click", function () {
        clickedTime++;
        if (clickedTime === buttons.length) {
            alert("Congrats!!! You have completed all the current task");
        }
    });
});
document.getElementById("clearHistory").addEventListener("click", function () {
    const completeNotification = document.querySelector(".notification-full");
    completeNotification.innerHTML = '';
});