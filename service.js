/*
 * Retorna una Promise:
 * 
 * fetchApi().then(data => {
 *   console.log(data);
 * });
*/

export const fetchApi = () => (
  window
    .fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => new Promise((resolve, reject) => (
      setTimeout(() => resolve(response.json()), 1000)
    )))
)
