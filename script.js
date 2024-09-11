const hardUsername = "test";
const hardPassword = "1234";

function loginPage() {
    document.getElementById('page').innerHTML = `
        <div id="login-container">
           <h1>Logga in</h1>
           <form>

            <div class="userpassword-field">

              <div class="user-field">
                   <input type="text" placeholder="Användarnamn" id="username" required><br><br>
              </div>

              <div class="password-field">
                   <input type="password" placeholder="Lösenord" id="password" required><br><br>
              </div>

            </div>

            <div class="loginButton">  
              <button type="submit">Logga in</button>
            </div>
          </form>
        </div>
    `;
    document.getElementById('login-container').addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

    if (username === hardUsername && password === hardPassword) {
      welcomePage();
    } else {
      errorPage();
    }
    });
  
}

function welcomePage () {
  document.getElementById ('page').innerHTML = `
  <p>Välkommen till Pengabingen.</p>
  <Button id="logoutButton" type="submit">Logga ut</button>
  `
  document.getElementById('logoutButton').addEventListener('click', function () {
    loginPage();
  })
}

function errorPage () {
  document.getElementById ('page').innerHTML = `
  <p>Fel användarnamn och lösenord! Försök igen.</p>
  <Button id="backButton" type="submit">Tillbaka</button>
  `;
  document.getElementById('backButton').addEventListener('click', function() {
    loginPage();
  })
}
  loginPage();