<template>
    <nav>
        <ul class="nav-links">
            <li id="logo"><router-link class="logo" to="/">covid-19 safety</router-link></li>

            <div class="nav-links links">
                <li><router-link to="/">Home</router-link></li>
                <li>Health Advise</li>
                <li>Vaccination</li>
                <li>Restriction</li>
                <li
                v-if="!$store.state.isUserLoggedIn"
                class="dropdown">
                  <span>Account</span>
                  <div class="dropdown-content">
                  <li><router-link to="/login">Login</router-link></li>
                  <hr/>
                  <li><router-link to="/register">Register</router-link></li>
                  </div>
                </li>

            </div>

        </ul>
    </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #nav, .nav-links {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-around;
        align-items: center;
    }
    nav {
        position: fixed;
        z-index: 9999;
        background-color: #afeeee;
        color: black;
        -webkit-box-shadow: 0px 0px 4px 0px rgba(168,168,168,1);
        -moz-box-shadow: 0px 0px 4px 0px rgba(168,168,168,1);
        box-shadow: 0px 0px 4px 0px rgba(168,168,168,1);
    }

    nav, ul {
        width: 100%;
    }

    #logo {
        font-weight: bold;
        font-size: 1.2rem;
        text-transform: uppercase;
    }

    ul {
        list-style: none;
    }

    .links {
        width: 70%;
        display: flex;

    }

    li {
        cursor: pointer;
    }

    .dropdown {
      position: relative;
      display: inline-block;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      left: -3rem;
      min-width: 80px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      padding: 12px 16px;
      z-index: 1;
    }

    .dropdown:hover .dropdown-content {
      display: block;
    }
    .dropdown-content > li {
        margin-top: 0.6rem;
    }

    a {
        color: rgba(0, 0, 0, 0.7);
        text-decoration: none;
    }

    a:hover {
        color: rgba(0, 0, 0, 1);
        text-decoration:none;
        cursor:pointer;
    }

    .nav-links li {
        color: rgba(0, 0, 0, 0.7);
        font-weight: bold;
    }

</style>
