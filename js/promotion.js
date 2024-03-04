document.addEventListener("DOMContentLoaded", function ()
{
  const endDate = new Date("2024-12-31T23:59:59").getTime();

  const timerInterval = setInterval(updateTimer, 1000);

  function updateTimer()
  {
    const currentDate = new Date().getTime();
    const timeDifference = endDate - currentDate;

    if (timeDifference > 0)
    {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const timerElement = document.getElementById("promotion__timer");
      timerElement.innerHTML = `${days}Days ${hours}Hours ${minutes}Minutes ${seconds}Seconds`;
    }
    else
    {
      clearInterval(timerInterval);
      document.getElementById("promotion__timer").innerHTML = "Timer End!";
    }
  } 
});
