<template>
  
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #430000; padding: 0; position:relative; top: 0;
  width: 100%; z-index: 2;">
    <div class="container-fluid" style="position: relative; z-index: 1;">
    <router-link to="/mainpage" class="navbar-brand">
  <img src="@/assets/logo.png" alt="CoffeeShop Logo" class="logo" @click="goHome" />
</router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <!--li class="nav-item">
            <router-link to="/home" class="nav-link">Home</router-link>
          </li-->
          <li class="nav-item">
            <router-link to="/coffee-shop" class="nav-link">CoffeeShop</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/review" class="nav-link">Review</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">About</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'; 
import 'bootstrap/dist/js/bootstrap.bundle'; 

export default {
  methods: {
    goHome() {
      this.$router.push('/mainpage');
    }
  }
};
</script>
<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Mali:wght@400;500;600;700&display=swap');

.header {
  background-color: #4d2e29; 
  color: white; 
  text-shadow: #674f4f90;
  padding: 10px 0;
  margin-top: 5%;
  text-align: center;
  border-radius: 50%;
  font-family: 'Mali', sans-serif;
}

body {
 /* background-image: url('https://i.pinimg.com/564x/88/b1/bd/88b1bd136d049858ad0c98ab91b85099.jpg');
  background-color: rgba(77, 46, 41, 0.7); */
  background-image: url('https://i.pinimg.com/564x/8e/6e/73/8e6e73f3fe95b5bddf45fa6821a9970f.jpg');
  background-color: #af8375ba;
  padding: 100px 0;
  font-family: 'Mali', sans-serif;
}
.navbar {
  width: 100%;
  background-color: #8B0000;
  padding: 0;
  position:fixed; 
  top: 0;
  width: 100%;
  left: 0;
  right: 0;
}

.navbar-brand {
  padding: 0;
}

.logo {
  width: 150px;
  height: 150px;
  cursor: pointer;
}

.nav-link {
  color: #FFFFFF !important; 
}

.nav-link:hover {
  color: #FFD700 !important;
}

.nav-item.active .nav-link {
  background-color: #8B0000; /* สีไวน์แดง */
}

/* เพิ่ม CSS เพื่อให้ Navbar ขยายให้เต็มจอ */
@media (min-width: 768px) {
  .navbar {
    height: 100px; /* ความสูงของ Navbar ที่คุณต้องการ */
    width: 100%;
  }
}
</style>

