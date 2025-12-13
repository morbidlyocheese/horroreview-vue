<template>
    <h1>{{ message }}</h1>
    <body class="text">
        {{ text }}
    </body>
</template>

<script>
    export default {
        data() {
            return {
                message: 'about',
                text: `
                Dandelion has always had a passion for creating things, whether it was writing, or drawing, they have always tried to find ways to express themself creatively. Programming is no different.

                As a child they always had curiousities about the inner workings of electronics and computers. What was once a curiousity, eventually became a passion. Programming has been seen as a new means of creativity for them, but also pulling together some of their other passions as well. They intend to work on game development as side projects.`,
            }
        }
    }
</script>

<style>
    .text {
        display: flex;
        place-content: center;
        margin-top: 1rem;
        white-space: pre-wrap;
    }

</style>