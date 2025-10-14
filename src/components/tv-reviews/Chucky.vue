<template>
    <div>
        <main>
            <h1>{{ title }}</h1>
            <div class="image-container">
                <img :alt="cover" class="cover-img" :src="img" width="250" height="350" />
                <p class="stars">{{ stars }}</p>
            </div>
            <div class="review-text">
                <h2>S1E1</h2>
                <button @click="toggleS1E1" :aria-pressed="showS1E1" :class="{ open: showS1E1 }" aria-label="toggle episode text">￫</button>
            </div>
            <p class="text" v-if="showS1E1">{{ s1e1 }}</p>
            <div class="review-text">
                <h2>S1E2</h2>
                <button @click="toggleS1E2" :aria-pressed="showS1E2" :class="{ open: showS1E2 }" aria-label="toggle episode text">￫</button>
            </div>
            <p class="text" v-if="showS1E2">{{ s1e2 }}</p>
            <a id="serializd-link" :href="serializd" target="_blank"><img id="serializd-link" :src="linkIcon" alt="serializd link" width="40" height="40"></a>
        </main>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/tv/chucky-show_poster.jpeg'
    import serializdIcon from '../../assets/serializd.png'

    export default {
        data() {
            return {
                cover: 'poster',
                img: coverImg,
                title: 'Chucky',
                s1e1: `
                Many fans are going to wonder how Chucky could be made into a TV show. If you've seen any Childs Play film, you will know that Chucky isn't exactly safe for work. Between his jokes and some of the gore the films have shown, making a show out of it seems like it is toning down Chucky himself.

                The show centers around a young teen named Jake, who likes to use secondhand dolls in art projects. And thus, this is why he purchases the Chucky doll from a yard sale, to add to his art project. Only instead of being able to add Chucky to the piece, Chucky begins to roll out a new plan.

                The first episode of the show definitely packs a lot in it at once. You would have thought that they might take more time to build up the story before anyone becomes prey to the murderous doll. But instead, we already have begun the kill counter on episode 1.

                Overall, I am pretty excited for the show to progress. We are given a gay teen as our main protagonist, which yes we have had some but honestly not enough. I am sure that some gay teens who like horror will appreciate this especially. The show will definitely have to play its cards right in order to win the praise of horror fans, since there haven't been many shows based on such an iconic horror icon. At least, not in a very long time.

                For now, I will just say I am excited and hopeful for the series to not only do well, but be something I enjoy watching. Only time will tell!`,
                s1e2: `
                Episode 2 wasn't bad, you could definitely feel the tension throughout the episode. There are some obivous, serious moments where you think someone may die, but then there is some pretty comedic points as well. The one comedic part, that I am sure most will enjoy, being Chucky trying to stab Lexy through the bed.

                He repeatedly stabs the bottom of the mattress she is laying on, only for him to miss each time. I feel like this bit is part of why fans have fallen in love with Chucky. The dark humor is just a big part of the love for so many of us. The ability to be a slasher but also give us some comic relief.

                Another thing that was nice about the episode is when Chucky tells Jake about him having a LGBT child. To some this seems silly, but to others it was a nice touch. I will admit that I haven't watched Seed Of Chucky in a very long time, and I don't remember it well. But it feels like the show is trying to take what is normally the butt of a joke, and turn it into something more positive. As most of the time, if there is a LGBT character it is usually associated to being bad or they're made fun of. This show seems like it is taking a better stance on that, which is definitely needed.`,
                stars: '★★½☆☆',
                linkIcon: serializdIcon,
                showS1E1: false,
                showS1E2: false
            }
        }
        ,
        methods: {
            toggleS1E1() {
                this.showS1E1 = !this.showS1E1
            },
            toggleS1E2() {
                this.showS1E2 = !this.showS1E2
            },
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