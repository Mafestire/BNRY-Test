<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <a class="navbar-brand name" href="#">TechNews</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav nav-items me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"><router-link to="/">Home</router-link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><router-link to="/news">News</router-link></a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" >
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  // computed: {
  //   news() {
  //     return this.$store.state.news;
  //   },
  // },

  // methods: {
  //   display() {
  //     this.$store.dispatch("fetchNews")
  //   }

  // },
  // created() {
  //   this.display();
  // }
}
</script>

<style scoped>
/* .nav-link .active {
  color: #42b983;
} */
.navbar {
  background-color: #2776EA;
}

.name {
  font-size: 2rem;
  color: #2e1f21;
}

.nav-items {
  font-size: 1.3rem;
}

.nav-item a {
  color: white;
  text-decoration: none;

}

input,
button {
  transform: translateX(-30%);
  border: 2px solid #2e1f21;
  color: #2e1f21;
}</style>