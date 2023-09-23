const renderCompany = async () => {
    // Parse the ID from the URL
    const requestedID = parseInt(window.location.href.split('/').pop());

    // Fetch the company data from the /companies endpoint
    const response = await fetch('/companies');
    const data = await response.json();

    // Point to the element with the ID company-content
    const companyContent = document.getElementById('company-content');

    // Find the company with the matching ID
    let company;
    if (data) {
        company = data.find(comp => comp.id === requestedID);
    }

    // Conditionally render the company data
    if (company) {
        // Set the src of the logo element to the matching company's logo
        document.getElementById('logo').src = company.logo;

        // Set the text content of the elements to the matching company's details
        document.getElementById('companyName').textContent = company.name;
        document.getElementById('missionStatement').textContent = company.missionStatement;
        document.getElementById('lobbyingSpend').textContent += company.lobbyingSpend;

        // Set the title of the page to the company's name
        document.title = company.name;
    } else {
        // If no matching company is found, display a message
        const noCompanyEl = document.createElement('h2');
        noCompanyEl.textContent = 'No Company Details Available 😞';
        companyContent.appendChild(noCompanyEl);
    }
}

// Call the renderCompany function
const requestedUrl = window.location.pathname.split('/').pop();


if (requestedUrl && requestedUrl !== "your-valid-endpoint") {
    window.location.href = '/404.html';
} else {
    // Call your existing function to render the company details
    renderCompany();
}
