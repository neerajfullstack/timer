const duration = document.querySelector('#duration');
const start = document.querySelector('#start');
const pause = document.querySelector('#pause');

const timer = new Timer(duration, start, pause, {
  onStart() {
    console.log('timer started');
  },
  onTick() {
    console.log('Timer just ticked down');
  },
  onComplete() {
    console.log('Timer is completed');
  },
});
