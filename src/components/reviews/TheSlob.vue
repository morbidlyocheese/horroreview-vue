<template>
    <div>
        <h1>{{ title }} by {{ author }}</h1>
        <div>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/'

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
                stars: '',
                letterboxd: '',
                fable: 'https://fable.co/review/5539b4d5-beff-46bf-a5fa-1cb036239199/share'
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