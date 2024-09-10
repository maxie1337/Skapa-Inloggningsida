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
  
}

loginPage();