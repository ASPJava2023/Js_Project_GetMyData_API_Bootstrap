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


let allUsers = [];
let currentPage = 1;
const usersPerPage = 3;

async function getAllData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) throw new Error(`Failed to fetch users. Status: ${response.status}`);

    allUsers = await response.json(); // Store all users globally
    currentPage = 1;
    displayUsers(); // Show first page
    setupPagination();

  } catch (error) {
    document.getElementById("result").innerHTML = `<div class="alert alert-danger">Error: ${error.message}</div>`;
  }
}

function displayUsers() {
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "";

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersToDisplay = allUsers.slice(startIndex, endIndex);

  usersToDisplay.forEach(user => {
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
}

function setupPagination() {
  const paginationDiv = document.getElementById("pagination");
  paginationDiv.innerHTML = "";

  const totalPages = Math.ceil(allUsers.length / usersPerPage);

  // Previous button
  paginationDiv.innerHTML += `<button class="btn btn-outline-primary me-2" ${currentPage === 1 ? 'disabled' : ''} onclick="goToPage(${currentPage - 1})">Previous</button>`;

  // Page numbers
  for (let i = 1; i <= totalPages; i++) {
    paginationDiv.innerHTML += `
      <button class="btn ${i === currentPage ? 'btn-primary' : 'btn-outline-primary'} me-1" onclick="goToPage(${i})">${i}</button>
    `;
  }

  // Next button
  paginationDiv.innerHTML += `<button class="btn btn-outline-primary ms-2" ${currentPage === totalPages ? 'disabled' : ''} onclick="goToPage(${currentPage + 1})">Next</button>`;
}

function goToPage(page) {
  currentPage = page;
  displayUsers();
  setupPagination();
}

