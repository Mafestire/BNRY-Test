<template>
    <div class="test">
        <div class="welcome">

            <div class="text">
                
                <img src="https://i.postimg.cc/4xS0W9Q4/shape-removebg-preview.png" alt="">
                <h1>TechNews</h1>
            </div>

            <!-- search -->
            <form class="d-flex search" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" @keypress="searchNews" aria-label="Search" v-model="searchString">
                <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
            </form>
        </div>
    </div>

    <div class="news">

        <div class="cardz" >
            <div class="cont" v-if="results" style="margin-bottom: 25rem;">
            <div class="card" v-for=" info in results" :key="info">
                <div class="body">
                    <img :src="info.urlToImage">
                    <div class="card-body">
                        <div class="by">
                            <p class="card-text author">{{ info.author }} |</p>
                            <p class="card-text date"><span>| </span>{{ info.publishedAt }}</p>
                        </div>
                        <p class="card-text title">{{ info.title }}</p>
                        <!-- <button><a :href="info.url">Go to article</a></button> -->
                        <a :href="info.url">Go to article</a>
                    </div>
                </div>
            </div>
        </div>
        </div>


        <div class="cards" >
        <div class="card" v-for=" info in news" :key="info">
                <div class="body">
                    <img :src="info.urlToImage">
                    <div class="card-body">
                        <div class="by">
                            <p class="card-text author">{{ info.author }} |</p>
                            <p class="card-text date"><span>| </span>{{ info.publishedAt }}</p>
                        </div>
                        <p class="card-text title">{{ info.title }}</p>
                        <!-- <button><a :href="info.url">Go to article</a></button> -->
                        <a :href="info.url">Visit Article</a>
                    </div>
                </div>
            </div>
            <!-- <div v-if="results">
                <p v-for="item in results" :key="item" v-text="item.title"></p>
            </div> -->
        </div>
       
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
        // searchNews() {
        //     let filtered = this.news;
        //     console.log('Array: ', filtered);
        //     if (this.search.trim().length > 0) {
        //         filtered = filtered.filter((info) => {
        //             info.title.includes(this.search)
        //         })
        //     }
        //     console.log(filtered);
        //     return filtered
        // }
    },

    methods: {
        display() {
            this.$store.dispatch("fetchNews")
        },
        searchNews(){
            // validate if the input is valid 
            if (['', null].includes(this.searchString))
                return this.news;    

            // regular expression to filter data according to search input
            let regexp = new RegExp(this.searchString?.toLowerCase());
            this.results = this.news.filter( value => {
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
        /* 
        Welcome Text 
        */

.form-control{
    border: 1px solid #2776EA;
    color: #2776EA;
    font-weight: 600;
    font-size: 1.2rem;
}

.welcome {
    margin-bottom: 5rem;
    display: flex;
    justify-content: space-around;
    width: 45rem;
    margin-left: auto;
    margin-right: auto;
}

.text h1 {
    font-size: 4rem;
    margin-top: 4rem;
    margin-left: auto;
    margin-right: auto;
    color: #2e1f21;
}

.text h3 {
    font-size: 2rem;
    color: #2e1f21;
}

.text img {
    width: 10rem;
    position: absolute;
    transform: translateX(-143%);
    margin-top: 1rem;
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

        /* 
        search 
        */

.search{
    width: 20rem;
    height: 3rem;
    margin-top: 5rem;
}

        /* 
        CARDS 
        */

.cards, .cont {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
}

.card {
    display: flex;
    color: #2e1f21;
    margin-left: auto;
    margin-right: auto;
    border: none;
    width: 18rem;
    transition: .9s ease-out;
}

.card:hover {
    background-color: #2776EA;
    color: white;
    transition: .7s ease-in;
}

.title {
    font-size: 1rem;
    height: 4.5rem;
    margin-bottom: 2rem;
}

img {
    width: 16rem;
    height: 11rem;
    margin-left: auto;
    margin-right: auto;
}

.body{
    padding: .5rem 1rem;
}

.by {
    display: flex;
    text-align: center;
    justify-content: center;
    height: 2rem;
    margin-bottom: .5rem;
}

.author,
span {
    font-size: .7rem;
}

.date {
    font-size: .7rem;
}

 a {
    color: white;
    text-decoration: none;
    font-size: 1.3rem;
    background-color: #2776EA;
    border: none;
    padding: .5rem;
    font-weight: 600;
    transition: .7s ease-out;
}

a:hover{
    background-color: white;
    color: #2776EA;
    transition: .7s ease-in;
}

@media (width < 800px) {

    .welcome{
        display: flex;
        flex-direction: column;
        width: 20rem;
        margin-bottom: 2rem;
    }

    .text h1{
        font-size: 2rem;
        margin-top: 1.5rem;
    }
    .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 0rem;
        margin-left: auto;
        margin-right: auto;
    }

    .card {
        display: flex;
        color: #2e1f21;
        margin-left: auto;
        margin-right: auto;
        border: none;
        width: 11rem;
    }

    .card-body{
        padding: 0;
        margin-top: 1rem;
    }

    img {
    width: 10rem;
    height: 7rem;
    margin-left: auto;
    margin-right: auto;
}

    .text img {
        width: 5rem;
        height: 5rem;
        margin-left: auto;
        margin-right: auto;
        position: absolute;
    transform: translateX(-160%);
    margin-top: 0rem;
    animation: load 1s ease-in;
    }

    .by {
        display: flex;
        flex-direction: column;
        height: 2rem;
        margin-bottom: 1rem;
    }

    .search{
        width: 13rem;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 0;
        margin-top: 1rem;
    }

    a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    background-color: #2776EA;
    border: none;
    padding: .5rem;
    font-weight: 600;
    transition: .7s ease-out;
}

    /* button {
        transform: translateX(0%);
    } */
}

/* @media (width < 768px) {
    .cards {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
    }
} */
</style>