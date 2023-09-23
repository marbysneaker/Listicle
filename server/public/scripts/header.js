// 1. Create a variable called header that points to the header tag.
const header = document.querySelector('header');

// 2. Create a div element with a class name header-container.
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// 3. Create a div element with a class name header-left.
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// 4. Create an img element and assign its source to logo.png.
const logo = document.createElement('img');
logo.src = 'public/images/logo.png';
logo.alt = 'Social Responsibility Index Logo';

// 5. create title in the header middle
const headerMiddle = document.createElement('div');
headerMiddle.className = 'header-middle';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Social Responsibility Index';

headerMiddle.appendChild(headerTitle);




// Append the logo to the div with the class name header-left.
headerLeft.appendChild(logo);

// 7. Create a div element with a class name header-right.
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// 8. Create a button element and set its text content to Home.
const headerButton = document.createElement('button');
//add a class to the button element
headerButton.className = 'btn';

headerButton.textContent = 'Home';

// Register a click event listener to the button that redirects the window to the root page.
headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/';
});

// Append the button to the div with the class name header-right.
headerRight.appendChild(headerButton);

// 9. Append the left and right header div elements to the div with the class name header-container.
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerMiddle);
headerContainer.appendChild(headerRight);

// 10. Append the header-container element to the header element.
header.appendChild(headerContainer);
