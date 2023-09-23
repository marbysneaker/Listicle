const renderCompanies = async () => {
    // Fetch the companies data from the server
    const response = await fetch('/companies');
    const data = await response.json();

    // Get the main content container
    const mainContent = document.getElementById('main-content');

    // Check if there's data
    if (data && data.length) {
        data.map(company => {
            // Create a card for each company
            const card = document.createElement('div');
            card.className = 'card';

            // Top container for the logo
            const topContainer = document.createElement('div');
            topContainer.className = 'top-container';
            const companyLogo = document.createElement('img');
            companyLogo.src = company.logo;
            topContainer.appendChild(companyLogo);

            // Bottom container for company details
            const bottomContainer = document.createElement('div');
            bottomContainer.className = 'bottom-container';

            const companyName = document.createElement('h3');
            companyName.textContent = company.companyName;
            bottomContainer.appendChild(companyName);

            const missionStatement = document.createElement('p');
            missionStatement.textContent = company.missionStatement;
            bottomContainer.appendChild(missionStatement);

            const lobbyingSpend = document.createElement('p');
            lobbyingSpend.textContent = `USD Spent on Lobbying in 2021: ${company.lobbyingSpend}`;
            bottomContainer.appendChild(lobbyingSpend);

            const readMoreLink = document.createElement('a');
            readMoreLink.textContent = 'Display';
            readMoreLink.href = `/companies/${company.id}`;
            readMoreLink.role = 'button';
            readMoreLink.className = 'secondary';
            
            bottomContainer.appendChild(readMoreLink);

            // Append top and bottom containers to the card
            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            // Append the card to the main content
            mainContent.appendChild(card);
        });
    } else {
        // If no data is available
        const noDataMessage = document.createElement('h2');
        noDataMessage.textContent = 'No Companies Available 😞';
        mainContent.appendChild(noDataMessage);
    }
}

// Call the function to render companies
renderCompanies();
