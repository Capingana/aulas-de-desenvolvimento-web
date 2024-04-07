export class Person {
  constructor(firstname, lastname, email, telefone, loged) {
    this.firstname = this.firstname;
    this.lastname = lastname;
    this.email = email;
    this.telefone = telefone;
    this.loged = loged;
  }
  static logado() {

    console.log("Logado");
  }

  deposito() {
    if (this.loged == true) {
       Person.logado();
    }else{
        return "Não logado";
    }
  }
}
