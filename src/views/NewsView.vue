<template>
    <div class="test">
        <div class="bars">
            <div class="first">
                <div class="bar1"></div>
                <div class="bar2"></div>
            </div>

            <div class="second">
                <div class="bar3"></div>
                <div class="bar4"></div>
            </div>
        </div>

        <div class="welcome">
            <div class="text">
                <h1>TechNews</h1>
                <h3>Find the news that you're looking for right <span>here</span> </h3>

            </div>
        </div>
    </div>

    <div class="news">
        <div class="cards">
            <div class="card" v-for="info in news" :key="info">
                <p class="card-text title">{{ info.title }}</p>
                <img :src="info.urlToImage">
                <div class="card-body">
                    <div class="by">
                        <p class="card-text author">{{ info.author }} |</p>
                        <p class="card-text date"><span>| </span>{{ info.publishedAt }}</p>
                    </div>
                    <p class="card-text info">{{ info.description }}</p>
                    <button><a :href="info.url">Go to article</a></button>
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

<style>
/* Welcome Text */
.welcome {
    margin-bottom: 5rem;
}

.text h1 {
    font-size: 4rem;
    color: #e51324;
}

.text h3 {
    font-size: 2rem;
    color: #2e1f21;
}

.text span {
    font-size: 3rem;
    color: #e51324;
}

/* BackGround Bars */
.bars {
    transform: translateY(130%);
}

.bar1,
.bar3 {
    background-color: #e51324;
    height: 2.5rem;
    width: 20rem;
}

.bar3 {
    transform: translateX(25%);
}

.bars {
    display: flex;

    justify-content: space-between;
}

.bar2,
.bar4 {
    background-color: #2e1f21;
    height: 2.5rem;
    width: 25rem;
}

/* CARDS */

.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    z-index: 1;
}

.card {
    border: 2px solid #2e1f21;
    width: 25rem;
    padding: 1rem;
    font-size: 1.3rem;
    background-color: #d4d0aa;
    color: #2e1f21;
    margin-left: auto;
    margin-right: auto;
    
}

.card:hover {
    background-color: #2e1f21;
    color: #e51324;
    border: 2px solid #e51324;

}

.title{ 
    font-size: 1.8rem;
    color: #e51324;
    height: 7rem;
}

img {
    width: 22rem;
    height: 15rem;
    margin-left: auto;
    margin-right: auto;
}

.by{
    display: flex;
    text-align: center;
    justify-content: center;
}
.author, span{
    font-size: .9rem;
}
 .date{
    font-size: .7rem;
}

.info{
    font-size: 1rem;
    height: 10rem;
}

button{
    background-color: #2e1f21;
    transform: translateX(100%);
}

button:hover{
    background-color: #d4d0aa;
    color: #2e1f21;
}

button a{
    color: #d4d0aa;
    text-decoration: none;
    font-size: 1rem;
}
</style>