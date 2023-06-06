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
          <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" @keypress="searchNews" aria-label="Search" v-model="searchString">
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchString: "",
      results: null
    }
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },

  methods: {
    display() {
      this.$store.dispatch("fetchNews")
    },
    searchNews() {
      // validate if the input is valid 
      if (['', null].includes(this.searchString))
        return this.news;

      // regular expression to filter data according to search input
      let regexp = new RegExp(this.searchString?.toLowerCase());
      this.results = this.news.filter(value => {
        return regexp.test(value.title.toLowerCase());
      });

      console.log(this.results);
    }

  },
  created() {
    this.display();
  }
}
</script>

<style scoped>

.navbar {
  background-color: #2776EA;
  color: white;
}

.name {
  font-size: 2rem;
  color: #2e1f21;
}

.nav-items {
  font-size: 1.7rem;
  margin-left: 60rem;
}

.nav-item a {
  color: white;
  text-decoration: none;
  margin-left: 2rem;
  transition: .7s ease-out;
}

.nav-item a:hover{
  color: black;
  transition: .7s ease-in;
}

/* input,
button {
  transform: translateX(-30%);
  border: 2px solid #2e1f21;
  color: #2e1f21;
} */

@media (width < 800px) {
  .nav-items {
  font-size: 1.3rem;
  margin-left: 0rem;

}
}
</style>