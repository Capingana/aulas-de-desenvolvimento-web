export const userInfo = (id) => {
    fetch(`https:///jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((erro) => {
        console.log("DEU ERRADO INFELIZMENTE!!!");
      });
  };
console.log(userInfo(9));  