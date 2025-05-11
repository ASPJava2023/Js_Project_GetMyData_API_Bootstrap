async function getAllData() {
    try{
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    if(!response.ok){
        throw new Error(`Unable to get the data:= ${response.status}`);
      }
      const users = await response.json();
      console.log("User:",users);
      // Target a container in your HTML to place the results
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    users.forEach(user => {
      resultDiv.innerHTML += `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
          <p><strong>Company:</strong> ${user.company.name}</p>
        </div>
      `;
    });


}
catch(error){
    console.log(`Error message: ${error.message}`);
}
}
async function getUserById() {
    try{
       const id = document.getElementById("mytext").value;
       if(!id){
        alert("Please enter a user ID");
        return
       }
    let response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if(!response.ok){
        throw new Error(`Unable to get the data:= ${response.status}`);
    }
    const user = await response.json();
    //console.log("User ",user);

   const userInfo = {
        id:user.id,
        name:user.name,
        email: user.email,
        Address:user.Address,
        company:user.company
    };
    console.log("Stored object:", userInfo);
    // Optionally, show it on the page
       // document.body.innerHTML += `<p><strong>${user.name}</strong> (${user.email})</p>`;
    document.body.innerHTML += `
      <div style="margin-bottom: 15px;">
        <p><strong>ID:</strong> ${user.id}</p>
        <p><strong>Name:</strong> ${user.name}</p>
        <p><strong>Email:</strong> ${user.email}</p>
        <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
        <p><strong>Company:</strong> ${user.company.name}</p>
      </div>
    `;
    }
    catch(error){
        console.log(`User error ${error.message}`);
    }

}