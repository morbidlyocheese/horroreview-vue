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
    import coverImg from '../../assets/covers/books/'
    import storygraphIcon from '../../assets/thestorygraph.png'

    export default {
        data() {
            return {
                cover: '',
                src: '',
                title: '',
                author: '',
                img: coverImg,
                text: ``,
                stars: '★★★★☆',
                fable: '',
                storygraph: '',
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