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
    import door from '../../assets/gifs/vhs-halloween/door.gif'
    import dripping from '../../assets/gifs/vhs-halloween/dripping.gif'

    export default {
        data() {
            return {
                title: 'V/H/S: Halloween',
                gifs: [
                {
                    route: door
                },
                {
                    route: dripping
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