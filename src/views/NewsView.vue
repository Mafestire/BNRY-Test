<template>
    <div class="test">
        <div class="welcome">

            <div class="text">
                <img src="https://i.postimg.cc/4xS0W9Q4/shape-removebg-preview.png" alt="">
                <h1>TechNews</h1>
            </div>
        </div>
    </div>

    <div class="news">
        <div class="cards">
            <div class="card" v-for="info in news" :key="info">
                <div class="body">
                <img :src="info.urlToImage">
                <div class="card-body">
                    <div class="by">
                        <p class="card-text author">{{ info.author }} |</p>
                        <p class="card-text date"><span>| </span>{{ info.publishedAt }}</p>
                    </div>
                    <p class="card-text title">{{ info.title }}</p>
                    <button><a :href="info.url">Go to article</a></button>
                </div>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
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
/* Welcome Text */
.welcome {
    margin-bottom: 5rem;
}

.text h1 {
    font-size: 4rem;
    margin-top: 4rem;
    color: #2e1f21;
}

.text h3 {
    font-size: 2rem;
    color: #2e1f21;
}
    .text img {
  width: 10rem;
  position: absolute;
  transform: translateX(-140%);
  margin-top: -3rem;
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

/* CARDS */

.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.card {
    display: flex;
    color: #2e1f21;
    margin-left: auto;
    margin-right: auto;
    border: none;
    width: 18rem;

}

.card:hover {
    background-color: #2776EA;
    color: white;
width: 18rem;
}

.title{ 
    font-size: 1rem;
    color: #2e1f21;
    height: 3rem;
}

img {
    width: 18rem;
    height: 11rem;
    margin-left: auto;
    margin-right: auto;
}

.by{
    display: flex;
    text-align: center;
    justify-content: center;
    height: 2rem;
    margin-bottom: .5rem;
}
.author, span{
    font-size: .7rem;
}
 .date{
    font-size: .7rem;
}

.info{
    font-size: 1rem;
    height: 10rem;
}

button{
    background-color: #2776EA;
    border: none;
    transform: translateX(90%);
}



button a{
    color: #d4d0aa;
    text-decoration: none;
    font-size: 1rem;
}
</style>