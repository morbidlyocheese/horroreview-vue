<template>
    <div>
        <h1>{{ title }}</h1>
        <img alt={{ cover }} class="cover-img" :src="img" width="125" height="125" />
        <div>
            <p class="text">{{ text }}</p>
            
        </div>
    </div>
</template>

<script>
    import img from '../../assets/covers/escape-room-2-poster.jpg'
    export default {
        data() {
            return {
                cover: 'escape room 2 movie poster',
                // src: '../../assets/covers/escape-room-2-poster.jpg',
                title: 'Escape Room: Tournament Of Champions',
                text: `I feel like the like back story of this film was kind of good? But I also just feel like they dragged it on.`,
                stars: '',
                letterboxd: 'https://letterboxd.com/morbidlyocheese/film/escape-room-tournament-of-champions/',
                fable: ''
            }
        }
    }
</script>

<style>
    .text {
        white-space: pre-wrap;
        display: flex;
        place-content: center;
    }
</style>