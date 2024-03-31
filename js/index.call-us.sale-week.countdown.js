//volodymyr-kurylin
const countdownElement = document.querySelector(
  '.call-us__sale-week-countdown'
);

const saleWeekEndDate = new Date('2024-12-12T23:59:59');

const MILISECONDS_IN_A_DAY = 1000 * 60 * 60 * 24;
const MILISECONDS_IN_AN_HOUR = 1000 * 60 * 60;
const MILISECONDS_IN_A_MINUTE = 1000 * 60;
const MILISECONDS_IN_A_SECOND = 1000;

const updateCountdown = () => {
  const timeDifference = saleWeekEndDate.getTime() - Date.now();

  if (timeDifference <= 0) {
    countdownElement.innerText = 'ended';
  } else {
    const daysRemaining = Math.floor(timeDifference / MILISECONDS_IN_A_DAY);
    const hoursRemaining = Math.floor(
      (timeDifference % MILISECONDS_IN_A_DAY) / MILISECONDS_IN_AN_HOUR
    );
    const minutesRemaining = Math.floor(
      (timeDifference % MILISECONDS_IN_AN_HOUR) / MILISECONDS_IN_A_MINUTE
    );
    const secondsRemaining = Math.floor(
      (timeDifference % MILISECONDS_IN_A_MINUTE) / MILISECONDS_IN_A_SECOND
    );

    countdownElement.innerText = `ends in ${daysRemaining} d ${hoursRemaining} h ${minutesRemaining} m ${secondsRemaining} s`;
  }
};

setInterval(updateCountdown, 1000);
