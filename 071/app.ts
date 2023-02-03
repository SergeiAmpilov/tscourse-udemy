interface Role71 {
  name: string;
}

interface Permission {
  endDate: Date;
}

interface User71 {
  name: string;
  roles: Role71[];
  permission: Permission;
}

const user71: User71 = {
  name: "Petr First",
  roles: [
    { name: 'admin' },
    { name: 'editor' },
    { name: 'user' },
  ],
  permission: {
    endDate: new Date()
  }
};


const userName = user71['name'];
type rolesType = User71['roles'];


type roleType = User71['roles'][number];
type DateType = User71['permission']['endDate'];


const roles71 = ['admin', 'user', 'editor'] as const;
type rolesTypeNew = typeof roles71[number];