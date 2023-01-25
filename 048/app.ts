class UserBuilder47 {
  name: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  isAdmin(): this is AdminBuilder47 {
    return this instanceof AdminBuilder47;
  }
}

class AdminBuilder47 extends UserBuilder47 {
  roles: string[];
}

const u47 = new UserBuilder47().setName('Sergei');
const adm47 = new AdminBuilder47().setName('Viktor');
console.log(u47);

const user477: UserBuilder47 | AdminBuilder47 = new UserBuilder47();

if (user477.isAdmin()) {
  user477.roles;
} else {
  user477.isAdmin()
}