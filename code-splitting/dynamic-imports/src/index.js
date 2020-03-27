function buildHelloElement() {
  return import(/* webpackChunkName: "lodash" */ 'lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'via', 'lodash'], ' ');

      return element;
    })
    .catch((err) =>
      console.error('An error occured while loading the message', err)
    );
}

document.querySelector('.btn').addEventListener('click', () => {
  buildHelloElement().then((element) => {
    document.body.appendChild(element);
  });
});
