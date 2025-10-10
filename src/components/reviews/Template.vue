<template>
    <div>
        <main>
            <h1>{{ title }}</h1>
            <div class="image-container">
                <img :alt="cover" class="cover-img" :src="img" width="250" height="350" />
                <p class="stars">{{ stars }}</p>
            </div>
            <div class="review-text">
                <p class="text">{{ text }}</p>
            </div>
            <a class="letterboxd-link" :href="letterboxd" target="_blank"><img :src="linkIcon" alt="letterboxd link" width="50" height="50"></a>
        </main>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/'
    import letterboxdIcon from '../../assets/'

    export default {
        data() {
            return {
                cover: 'poster',
                img: coverImg,
                title: '',
                text: ``,
                stars: '★★½☆☆',
                letterboxd: 'https://letterboxd.com/morbidlyocheese/film/',
                linkIcon: letterboxdIcon,
                fable: ''
            }
        }
    }
</script>

<style>
    .image-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        margin-bottom: 1rem;
    }

    .stars {
        text-align: center;
    }

    .revew-text {
        display: flex;
        place-content: center;
        margin-top: 1rem;
    }

    .letterboxd-link {
        color: white;
    }

    .text {
        white-space: pre-wrap;
        display: flex;
        place-content: center;
    }
</style>