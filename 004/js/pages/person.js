export let person = {
  firstname: "",
  lastname: "",
  emailUser: "scapingana@gmail.com",
  telefone: 939172046,
  tecnico: true,
  hobbies: ["ler livros", "ouvir músicas", "praticar desporto", "assistir tv"],
  fullname: () => {
    if (person.firstname == "") {
      person.firstname = Response.bo;
    }
    if (person.lastname == "") {
      person.lastname = "teresa";
    }
    return person.firstname + " " + person.lastname;
  },
};
