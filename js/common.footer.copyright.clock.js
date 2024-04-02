//volodymyr-kurylin
const clockElement = document.querySelector('.footer__copyright-clock');

const updateClock = () => {
  const options = {
    timeZone: 'Europe/Kiev',
    hour12: false,
  };
  clockElement.innerText = new Date().toLocaleString('uk-UA', options);
};

setInterval(updateClock, 1000);
