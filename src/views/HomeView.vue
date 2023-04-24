<template>
  <div class="home">
    <div class="info">
      <img src="https://i.postimg.cc/4xS0W9Q4/shape-removebg-preview.png" alt="">
      <h1>TechNews</h1>
      <h3>Latest Headlines </h3>
    </div>
    <div class="showcase">
      <div class="case">

        <div class="item">

          <div class="card1" v-for="info in news" :key="info">
            <div class="img">
              <a :href="info.url"> <img :src="info.urlToImage">
              </a>
            </div>
            <div class="title">
              <a :href="info.url"> {{ info.title }}
              </a>
            </div>
            <div class="card-body">
              <a :href="info.url">
                <div class="by">
                  <div class="author"> {{ info.author }} |</div>
                  <div class="date">| {{ info.publishedAt }}</div>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="moreNews">
      <router-link class="moreNews" to="/news">Find more News here <i class="fa-solid fa-arrow-right"></i> </router-link>
    </div>
    

    <div class="colour">
        <img src="https://i.postimg.cc/prjxwFBH/wave-removebg-preview.png" alt="">
      </div>
    <div class="newsletter">
      <div class="socials">
      <h4>And follow us on our social media platforms:</h4>
      <p><i class="fa-brands fa-instagram"></i> | 
        <i class="fa-brands fa-square-twitter"></i> |
        <i class="fa-brands fa-facebook"></i>
      </p>
    </div>

      <div class="letter">
      <h1>Sign up for our NewsLetter</h1>
      <p>to get daily updates to our leading headlines and reliable sources</p>
      <form action="">
        <label for="">Name</label>
        <br>
        <input type="text" placeholder="e.g John Bruce" required>
        <br>
        <label for="">Email Address</label>
        <br>
        <input type="text" placeholder="e.g john@somethingmail.com" required>
        <br>
        <button>Submit</button>
      </form>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  computed: {
    news() {
      return this.$store.state.news;
    },
    // info(){
    //   return this.$store.state.info
    // }
  },

  methods: {
    display() {
      this.$store.dispatch("fetchNews")
    }

  },
  created() {
    this.display();
  }
}
</script>

<style scoped>
.info {
  margin-top: 3rem;
}

.info h1 {
  font-size: 4rem;
  color: #2e1f21;
}

.info h3 {
  font-size: 2rem;
  margin-top: 1rem;
  color: #2e1f21;
}

.info span {
  font-size: 3rem;
  color: #2e1f21;
}

.info img {
  width: 10rem;
  position: absolute;
  transform: translateX(-140%);
  margin-top: -2.5rem;
  animation: load 1s ease-in;
}

@keyframes load {
  0% {
    width: 0rem;
  }

  100% {
    width: 10rem;
  }
}

.showcase {
  background-color: white;
  /* height: 80vh; */
  width: 100%;
  overflow: hidden;

}

.showcase .case {
  background-color: white;
  /* height: 100vh; */
  transform: translateY(5%);
  margin-left: auto;
  margin-right: auto;
  width: 60rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.item {
  background-color: white;
  width: 100rem;
  /* height: ; */
  margin-left: -10rem;
  margin-right: auto;
  display: flex;
  justify-content: space-around;
  z-index: 2;
  overflow: scroll;
  flex-grow: 1;
}

.item .card1 {
  width: 22rem;
  /* height: 20rem; */
  margin-left: 2rem;
  margin-right: 2rem;
}

.card1 img {
  width: 22rem;
}

.card1 .card-body {
  margin-top: .3rem;
}

.card-body .by {
  font-size: .7rem;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  text-decoration: none;
}

.title a,
.card-body a {
  text-decoration: none;
  color: #2e1f21;
}

.moreNews {
  text-decoration: none;
  font-size: 1.5rem;
  width: 25rem;
  transform: translateX(240%)
}

form{
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}

form input{
  text-align: center;
  width: 20rem;
  border: none;
  border-bottom: 1px solid #000;
}

form label{
  font-size: 1.5rem;
  
}

form button{
  margin-top: 1rem;
  border-radius: 10%;
  color: #2776EA;
  font-size: 1.2rem;
}

.colour img{
  height: 10rem;
  width: 40rem;
  margin-left: -44.7em;
  transform: translateY(160%);
  position: absolute;
}

.newsletter{
  width: 55rem;
  margin-bottom: 5rem;
  margin-top: 5rem;
  display: flex;
transform: translateX(30%);
}

.newsletter .socials{
  width: 20rem;
  margin-right: 5rem;
  margin-top: 1rem;
}

.socials p{
  font-size: 1.5rem;
}

.letter p{
  font-size: 1.2rem;
}



</style>