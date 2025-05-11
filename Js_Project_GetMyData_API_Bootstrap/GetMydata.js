async function getUserById() {
  const id = document.getElementById("mytext").value;
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = ""; // clear previous

  if (!id) {
    alert("Please enter a user ID");
    return;
  }

  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!response.ok) throw new Error(`User not found. Status: ${response.status}`);
    const user = await response.json();

    resultDiv.innerHTML = `
      <div class="col-md-6">
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">${user.name}</h5>
            <p class="card-text"><strong>ID:</strong> ${user.id}</p>
            <p class="card-text"><strong>Email:</strong> ${user.email}</p>
            <p class="card-text"><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
            <p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
          </div>
        </div>
      </div>
    `;

  } catch (error) {
    resultDiv.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
  }
}


async function getAllData() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`Failed to fetch. Status: ${response.status}`);
    const users = await response.json();

    users.forEach(user => {
      resultDiv.innerHTML += `
        <div class="col-md-6 col-lg-4">
          <div class="card mb-3">
            <div class="card-body">
              <h5 class="card-title">${user.name}</h5>
              <p class="card-text"><strong>ID:</strong> ${user.id}</p>
              <p class="card-text"><strong>Email:</strong> ${user.email}</p>
              <p class="card-text"><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
              <p class="card-text"><strong>Company:</strong> ${user.company.name}</p>
            </div>
          </div>
        </div>
      `;
    });

  } catch (error) {
    resultDiv.innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
  }
}
