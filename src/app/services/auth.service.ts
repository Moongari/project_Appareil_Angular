import set = Reflect.set;

export class AuthService{

  isAuth= false;


  // tslint:disable-next-line:typedef
  signIn(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
          this.isAuth = true;
          resolve(true);
        }, 4000);
    });

  }
signOut(){
    this.isAuth = false;
}


}
