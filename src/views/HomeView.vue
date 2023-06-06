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

          <div class="card1" v-for=" info in news" :key="info">
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
  width: 100%;
  overflow: hidden;
}

.showcase .case {
  background-color: white;
  transform: translateY(5%);
  margin-left: auto;
  margin-right: auto;
  width: 80rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.item {
  background-color: white;
  width: 100rem;
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
  /* width: 25rem; */
  /* transform: translateX(240%) */
}

form {
  width: 30rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
}

form input {
  text-align: center;
  width: 20rem;
  border: none;
  color: black;
  border-bottom: 1px solid #2776EA;
  color: #2776EA;
  font-size: 1.3rem;
}

form label {
  font-size: 1.5rem;
  color: black;

}

form button {
  margin-top: 1rem;
  border-radius: 10%;
  color: #2776EA;
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid #2776EA;
  padding: .3rem;
  transition: .7s ease-in;

}

form button:hover{
  background-color: #2776EA;
  color: white;
  transition: .7s ease-in;
}

.colour{
  display: flex;
}

.colour img {
  height: 10rem;
  width: 40rem;
  transform: translateY(160%);
  position: absolute;
}

.newsletter {
  margin-bottom: 5rem;
  margin-top: 5rem;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-around;
  align-items: center;
}

.socials {
  width: 30rem;
  margin-top: -10rem;
}

.socials i:hover{
  color: #2776EA;
  transition: .7s ease-in;

}

.socials i{
  transition: .7s ease-in;
  font-size: 1.9rem;
}

.socials p, .socials h4 {
  font-size: 1.7rem;
  color: black;

}

.letter p {
  font-size: 1.2rem;
  color: black;
}

@media (width < 800px) {

  .info h1 {
    font-size: 2rem;
    color: #2e1f21;
  }

  .info h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #2e1f21;
  }

  .info img {
    width: 5rem;
    position: absolute;
    transform: translateX(-140%);
    margin-top: -1.5rem;
    animation: load 1s ease-in;
  }

  @keyframes load {
  0% {
    width: 0rem;
  }

  100% {
    width: 5rem;
  }
}

  .showcase .case {
    background-color: white;
    height: 40vh;
    transform: translateY(5%);
    margin-left: auto;
    margin-right: auto;
    width: 16rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .item {
    background-color: white;
    width: 50rem;
    margin-left: -12rem;
    display: flex;
    justify-content: space-around;
    z-index: 2;
    overflow: scroll;
    flex-grow: 1;
  }

  .item .card1 {
    width: 12rem;
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .card1 img {
    width: 12rem;
  }

  .newsletter {
    width: 10rem;
    margin-bottom: 5rem;
    display: flex;
    flex-direction: column;
    margin-left: auto;
  }

  .moreNews {
    text-decoration: none;
    font-size: 1rem;
    transform: translateX(0%)
  }

  form {
    width: 15rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
  }

  form input {
    text-align: center;
    width: 10rem;
    border: none;
    border-bottom: 1px solid #000;
  }

  form label {
    font-size: 1rem;

  }

  .newsletter  {
    width: 11rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 14rem;
    font-size: 1rem;
  }

  .socials{
    width: 17rem;
    margin-bottom: 1rem;
  }
  .colour img {
    height: 10rem;
    width: 40rem;
    margin-left: -30rem;
    transform: translateY(220%);
    position: absolute;
  }
}

/* @media (width > 430px) {
  .item .card1 {
    width: 20rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .card1 img {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
  .newsletter {
    width: 25rem;
    margin-bottom: 5rem;
    margin-top: 5rem;
    display: flex;
    flex-direction: column-reverse;
    margin: 0 0;
    margin-left: 3rem;
    margin-right: auto;
  }

  .moreNews {
    text-decoration: none;
    font-size: 1rem;
    width: 15rem;
    transform: translateX(20%)
  }

  form {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
  }

  form input {
    text-align: center;
    width: 18rem;
    border: none;
    border-bottom: 1px solid #000;
  }

  form label {
    font-size: 1.3rem;
  }

  .newsletter .socials {
    width: 18rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 4rem;
  }

  .colour img {
    height: 10rem;
    width: 40rem;
    margin-left: -30rem;
    transform: translateY(250%);
    position: absolute;
  }
} */

/* @media (width < 720px) {
  .item .card1 {
    width: 15rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }

  .card1 img {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }
  .newsletter {
    width: 28rem;
    margin-bottom: 5rem;
    display: grid;
    grid-template-columns: repeat(1, .5fr);
    grid-template-rows: repeat(2, .5fr);
    margin-left: auto;
    margin-right: auto;
  }

  .moreNews {
    text-decoration: none;
    font-size: 1rem;
    width: 15rem;
    transform: translateX(20%)
  }

  form {
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
  }

  form input {
    text-align: center;
    width: 18rem;
    border: none;
    border-bottom: 1px solid #000;
  }

  form label {
    font-size: 1.3rem;
  }

  .newsletter .socials {
    width: 18rem;
    margin-right: auto;
    margin-left: auto;
    margin-top: 4rem;
  }

  .colour img {
    height: 10rem;
    width: 40rem;
    margin-left: -30rem;
    transform: translateY(250%);
    position: absolute;
  }
} */
</style>