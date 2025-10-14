<template>
    <div>
        <main>
            <h1>{{ title }}</h1>
            <div class="image-container">
                <ul>
                    <li v-for="(gif, index) in gifs" :key="`gif-` + index">
                        <img class="gif" :src="gif.route" />
                    </li>
                </ul>
            </div>
        </main>
    </div>
</template>

<script>
    import name1 from '../../assets/gifs/'
    import name2 from '../../assets/gifs/'

    export default {
        data() {
            return {
                title: '',
                gifs: [
                {
                    route: name1
                },
                {
                    route: name2
                }
            ]
            }
        }
    }
</script>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h1 {
        color: rgb(128, 200, 251);
        margin: 0;
        font-weight: 600;
    }
    
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
    }
    
    .image-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .text {
        white-space: pre-wrap;
        display: flex;
        place-content: center;
    }
</style>