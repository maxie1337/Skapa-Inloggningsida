// Hårdkodat Användarnamn och lösenord //
const hardUsername = "test";
const hardPassword = "1234";

// Funktionen kollar om localStorage har sparat inloggningen, om den är sparad så kommer man till välkomstsidan //
// Är inloggningen inte sparad i localStorage så kommer man till inloggningssidan //

function checkLogin () {
  const inLoggad = localStorage.getItem ('inLoggad');
   if (inLoggad === 'true') {
  welcomePage();
  } else {
  loginPage();
  }
}
checkLogin();

// Funktionen innehåller inloggningssidans HTML innehåll, och en funktion som lyssnar på om logga in knappen submitas //
// Är innehållet i inputrutorna = "test" och "1234" kommer man till välkomstsidan, annars får man en errorsida. Inloggningen sparas också i localstorage //

function loginPage() {
  const page = document.getElementById('page');
  page.innerHTML= '';

  const loginContainer = document.createElement('div');
  loginContainer.id = 'login-container';

  const header = document.createElement('h1');
  header.textContent = 'Logga in';

  const form = document.createElement('form');

  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.placeholder = 'Användarnamn';
  usernameInput.id = 'username';
  usernameInput.required = true;

  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Lösenord';
  passwordInput.id = 'password';
  passwordInput.required = true;

  const loginButton = document.createElement('button');
  loginButton.type = 'submit';
  loginButton.textContent = 'Logga in';

  form.appendChild(usernameInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));
  form.appendChild(passwordInput);
  form.appendChild(document.createElement('br'));
  form.appendChild(document.createElement('br'));
  form.appendChild(loginButton);

  loginContainer.appendChild(header);
  loginContainer.appendChild(form);

  page.appendChild(loginContainer);

  form.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      if (username === hardUsername && password === hardPassword) {
          localStorage.setItem('inLoggad', 'true');
          welcomePage();
      } else {
          errorPage();
      }
  });
}

// Detta är välkomstsidan och innehåller HTML för välkomstsidan och en funktion där man återgår till inloggningssidan om logga ut knappen klickas //
// Logga ut knappen tar också bort inLoggad ur local storage, så inloggningen inte är sparad tills sidan besöks igen //
function welcomePage() {
  const page = document.getElementById('page');
  page.innerHTML= '';

  const welcomeContainer = document.createElement('div');
  welcomeContainer.id = 'welcome-container';

  const welcomeText = document.createElement('h1');
  welcomeText.textContent = 'Välkommen in till mig!';

  const logoutButton = document.createElement('button');
  logoutButton.id = 'logoutButton';
  logoutButton.type = 'submit';
  logoutButton.textContent = 'Logga ut';

  welcomeContainer.appendChild(welcomeText);
  welcomeContainer.appendChild(logoutButton);

  page.appendChild(welcomeContainer);

  logoutButton.addEventListener('click', function () {
      localStorage.removeItem('inLoggad');
      loginPage();
  });
}

// Errorsidan innehåller HTML för errorsidan och en funktion där man kommer tillbaka till inloggningssidan på ett knapptryck vid fel användarnamn och lösenord //
function errorPage() {
  const page = document.getElementById('page');
  page.innerHTML= '';

  const errorContainer = document.createElement('div');
  errorContainer.id = 'error-container';

  const errorHeader = document.createElement('h2');
  errorHeader.textContent = 'Något gick snett!'

  const errorMessage = document.createElement('p');
  errorMessage.textContent = 'Fel användarnamn och lösenord! Försök igen.';

  const backButton = document.createElement('button');
  backButton.id = 'backButton';
  backButton.type = 'submit';
  backButton.textContent = 'Tillbaka';

  errorContainer.appendChild(errorHeader);
  errorContainer.appendChild(document.createElement('br'));
  errorContainer.appendChild(errorMessage);
  errorContainer.appendChild(document.createElement('br'));
  errorContainer.appendChild(backButton);

  page.appendChild(errorContainer);

  backButton.addEventListener('click', function () {
      loginPage();
  });
}
