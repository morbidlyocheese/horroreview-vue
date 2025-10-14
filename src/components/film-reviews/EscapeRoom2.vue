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
            <a id="letterboxd-link" :href="letterboxd" target="_blank"><img id="letterboxd-link" :src="linkIcon" alt="letterboxd link" width="25" height="25"></a>
        </main>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/films/escape-room-2-poster.jpg'
    import letterboxdIcon from '../../assets/letterboxd.png'

    export default {
        data() {
            return {
                cover: 'escape room 2 movie poster',
                img: coverImg,
                title: 'Escape Room: Tournament Of Champions',
                text: `I feel like the like back story of this film was kind of good? But I also just feel like they dragged it on.`,
                stars: '★★½☆☆',
                letterboxd: 'https://letterboxd.com/morbidlyocheese/film/escape-room-tournament-of-champions/',
                linkIcon: letterboxdIcon,
                fable: ''
            }
        }
    }
</script>

<style>
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

    .stars {
        text-align: center;
    }

    .revew-text {
        display: flex;
        place-content: center;
        margin-top: 1rem;
    }

    .text {
        white-space: pre-wrap;
        display: flex;
        place-content: center;
    }

    #letterboxd-link {
        margin: 2rem;
    }

    a:hover #letterboxd-link,
    #letterboxd-link:hover {
        filter: invert(50%) sepia(10%) saturate(90%) contrast(30%);
    }
</style>