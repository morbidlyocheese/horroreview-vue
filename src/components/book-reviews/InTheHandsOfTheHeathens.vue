<template>
    <div>
        <main>
            <h1>{{ title }}  by {{ author }}</h1>
            <div class="image-container">
                <img :alt="cover" class="cover-img" :src="img" width="250" height="350" />
                <p class="stars">{{ stars }}</p>
            </div>
            <div class="review-text">
                <p class="text">{{ text }}</p>
            </div>
            <a :href="storygraph" target="_blank"><img id="storygraph-link" :src="linkIcon" alt="storygraph link" width="25" height="25"></a>
        </main>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/books/in-the-hands-of-the-heathens.jpg'
    import storygraphIcon from '../../assets/thestorygraph.png'

    export default {
        data() {
            return {
                cover: '',
                src: '',
                title: 'In The Hands Of The Heathens',
                author: 'Aron Beauregard',
                img: coverImg,
                text: `
                The second book I read by Beauregard, whilst waiting for Son Of The Slob to be released. I wasn't sure how this one would turn out or if it would be in gruesome comparison to The Slob.

                While this book wasn't nearly as gorey or disturbing as The Slob, it was still a pretty good read. I felt for some of the characters, while I awaited for the demise of others.
                
                A pretty solid read either way! Definitely on the tamer side if you are looking to get into the Splatterpunk genre.`,
                stars: '★★★★☆',
                fable: '',
                storygraph: 'https://app.thestorygraph.com/reviews/a9671ab5-96c6-450b-b201-fa5c7b92f7f3?redirect=true',
                linkIcon: storygraphIcon,
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

    #storygraph-link {
        margin: 2rem;
    }

    a:hover #storygraph-link,
    #storygraph-link:hover {
        filter: invert(50%) sepia(10%) saturate(90%) contrast(30%);
    }
</style>