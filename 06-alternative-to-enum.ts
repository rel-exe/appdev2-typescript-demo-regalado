(() => {
    // Literal Types (Alternative to Enum)
    let userRole: 'admin' | 'guest' | 'teacher' | 'student' = 'admin';

    userRole = 'student';
    // userRole = 'superadmin';

    function access(role: 'admin' | 'guest' | 'teacher' | 'student') {
        console.log("Accessing role:", role);
    }

    access(userRole);
})();