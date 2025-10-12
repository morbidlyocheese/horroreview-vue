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
    import coverImg from '../../assets/covers/books/the-slob.jpg'
    import storygraphIcon from '../../assets/thestorygraph.png'

    export default {
        data() {
            return {
                cover: 'the slob book cover',
                src: '',
                title: 'The Slob',
                author: 'Aaron Beauregard',
                img: coverImg,
                text: `
                I was looking for a god disturbing horror book to read, as I hadn't read very many. I tend to enjoy gore films and was eager to find a book in a similar vein.
                I don't know how I came across this book, but I am glad that I did. It is very graphic all the way through. Although at times it felt like something was missing or felt a little rushed, I enjoyed reading this. I mean mostly enjoyed given the subject matter.
                Overall if you are looking for gore but in book form, this is definitely up your alley. It is very detailed with a pretty likable main character Vera. I am excited to get my hands on the second book as well!`,
                stars: '★★★★☆',
                letterboxd: '',
                fable: 'https://fable.co/review/5539b4d5-beff-46bf-a5fa-1cb036239199/share',
                storygraph: 'https://app.thestorygraph.com/reviews/89dd9701-f3d4-4d0a-b45f-4c417de7f2e3',
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