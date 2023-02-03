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
type rolesType = User71['roles'];


type roleType = User71['roles'][number];


const roles71 = ['admin', 'user', 'editor'] as const;
type rolesTypeNew = typeof roles71[number];