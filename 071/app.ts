interface Role71 {
  name: string;
}

interface User71 {
  name: string;
  roles: Role71[];
}

const user71: User71 = {
  name: "Petr First",
  roles: [
    { name: 'admin' },
    { name: 'editor' },
    { name: 'user' },
  ]
};


const userName = user71['name'];
type roleType = User71['roles'];


