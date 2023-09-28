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
        console.log(company);
        // Set the src of the logo element to the matching company's logo
        document.getElementById('logo').src = company.logo;

        // Set the text content of the elements to the matching company's details
        document.getElementById('companyName').textContent = company.name;
        document.getElementById('missionStatement').textContent = company.missionstatement;
        document.getElementById('lobbyingSpend2021').textContent ="lobbying spent in 2021 $" + company.lobbyingspend2021;
        const backButton = document.createElement('button');
        //add a class to the button element
        backButton.className = 'btn';

        backButton.textContent = 'Back';

        // Register a click event listener to the button that redirects the window to the root page.
        backButton.addEventListener('click', function handleClick(event) {
            window.location = '/';
        });
        const main = document.getElementsByClassName('company-details')
        main[0].appendChild(backButton);
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
renderCompany();