(() => {
    // Type Aliases or Custom Types
    type Role = 'admin' | 'guess' | 'teacher' | 'student';

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role;
        permission: string[];
    };

    // User data
    let user: User = {
        name: "Russel",
        age: 20,
        role: 'student',
        permission: ['create', 'read', 'upadte', 'delete']
    };

    let userRole: Role = user.role;

    function access(role: Role) {
        console.log(`Accessing role: ${role}`);
    }

    console.log(user);
    access(userRole);
})();