async function getAllUsers(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        console.log(response);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error.cause.errno);
    }
}

getAllUsers();