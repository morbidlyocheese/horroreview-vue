<template>
    <div>
        <main>
            <h1>{{ title }}</h1>
            <div class="image-container">
                <img :alt="cover" class="cover-img" :src="img" width="250" height="350" />
                <p class="stars">{{ stars }}</p>
            </div>
            <div class="review-text">
                <h2 id="episode-title">S1E1</h2>
                <button @click="toggleS1E1" :aria-pressed="showS1E1" :class="{ open: showS1E1 }" aria-label="toggle episode text">￫</button>
            </div>
            <p class="text" v-if="showS1E1">{{ s1e1 }}</p>
            <a id="serializd-link" :href="serializd" target="_blank"><img id="serializd-link" :src="linkIcon" alt="serializd link" width="40" height="40"></a>
        </main>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/tv/dotd-s1_poster.jpg'
    import serializdIcon from '../../assets/serializd.png'

    export default {
        data() {
            return {
                cover: 'poster',
                img: coverImg,
                title: 'Day Of The Dead',
                s1e1: `
                Just like with the Chucky show, this will most likely be a hit or a miss with horror fans. Anything involving zombies now is honestly like that in my opinion. However, this show is a bit different because it is based off of George A. Romero's films. And on top of that, this show happens to be named after one of his most beloved movies as well. So right off the bat, it has some big shoes to fill. 

                For me, zombies will always be a favorite subgenre of horror. And although it is a favorite, I still know that a lot of zombie movies tend to be bad. Zombies at this point have been reanimated so many times it is safe to say there's too many films out there. Yet despite all the odds, I still cling to hope that this show will be good. 

                We have had quite a few zombie shows in the past few years after the success of The Walking Dead, but DOTD seems to be coming to us a little late to the game. So I can only imagine how much it will be compared to those that came before it. But for me, the only real zombie show I have watched(not in its entirety) is The Walking Dead. However, the two shows are pretty different in a lot of ways. Just based off of this first episode we are introduced to some fairly likable characters while also being introduced to the opposite. The good thing is, this doesn't seem to be a very slowburn for a show. There isn't a big build up before we have our zombie outbreak, even if we don't have a butt load of action. I am still just glad we didn't have to wait half way through the season to get some zombie action. 

                Given it was only the first episode, I still feel like there needs to be some more build up, mainly in the trying to connect to the audience and trying to make them sympathetic towards the characters. But I am hopeful we will get that over time!`,
                stars: '★★½☆☆',
                linkIcon: serializdIcon,
                showS1E1: false
            }
        }
        ,
        methods: {
            toggleS1E1() {
                this.showS1E1 = !this.showS1E1
            }
        }
    }
</script>

<style>
    h2 {
        color: rgb(128, 200, 251);
        margin: 0;
        font-size: 1.25rem;
        font-weight: 600;
    }

    .review-text {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
    
    button {
        border-radius: 5px;
        padding: 3px;
        background-color: rgb(128, 200, 251);
        cursor: pointer;
        font-size: 1.5rem;
        margin-left: 0.1rem;
        vertical-align: middle;
    }
    
    button.open {
        transform: rotate(90deg);
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
    
    .stars {
        text-align: center;
    }
    

    #serializd-link {
        margin: 2rem;
    }

    a:hover #serializd-link,
    #serializd-link:hover {
        filter: invert(0%) sepia(10%) saturate(120%) contrast(30%);
    }

    .text {
        white-space: pre-wrap;
        display: flex;
        place-content: center;
    }
</style>