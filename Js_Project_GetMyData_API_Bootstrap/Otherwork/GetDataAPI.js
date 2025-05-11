//Example: Get Data from a Public API (Using JSONPlaceholder)
async function getDatFromAPI() {
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error(`Unable to fatch data from API ${response.status}`);
    }
    const user = await response.json();
    console.log("The data is ",user);
    console.log("*******************************************");
    //console.log(user[0]);
    console.log("*******************************************");

}
catch(error){
    console.log("Error msg from Throw "+error.message);
}
}
async function getUserById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch user. Status: ${response.status}`);
        }

        const user = await response.json(); // 👈 This is a single user object
        console.log("User object:", user);

        // Store specific fields
        const userInfo = {
            id: user.id,
            name: user.name,
            email: user.email,
            Address:user.Address,
            company:user.company
        };

        console.log("Stored object:", userInfo);

    } catch (error) {
        console.error("Error:", error.message);
    }
}

//getUserById(4); // Fetch user with id=4


getDatFromAPI();