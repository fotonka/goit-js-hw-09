const formRef = document.querySelector('.form');
const btnRef = document.querySelector('button');

const delay = formRef.firstElementChild;
const stepRef = formRef.children[1];
const position = formRef.children[2];

btnRef.addEventListener('submit', createPromise);

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      }
      reject(`❌ Rejected promise ${position} in ${delay}ms`);
    }, delay);
  });
}

createPromise()
  .then(result => console.log(result))
  .catch(error => console.log(error));
