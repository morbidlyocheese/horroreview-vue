<template>
    <div>
        <main>
            <h1>{{ title }}</h1>
            <div class="image-container">
                <img :alt="cover" class="cover-img" :src="img" width="250" height="350" />
                <p class="stars">{{ stars }}</p>
            </div>
            <div class="s1e1-review">
                S1E1
                <button @click="toggleS1E1" :aria-pressed="showS1E1" :class="{ open: showS1E1 }" aria-label="toggle episode text">￫</button>
                <p class="text" v-if="showS1E1">{{ s1e1 }}</p>
            </div>
            <div class="s1e2-review">
                S1E2
                <button @click="toggleS1E2" :aria-pressed="showS1E2" :class="{ open: showS1E2 }" aria-label="toggle episode text">￫</button>
                <p class="text" v-if="showS1E2">{{ s1e2 }}</p>
            </div>
            <a id="serializd-link" :href="serializd" target="_blank"><img id="serializd-link" :src="linkIcon" alt="serializd link" width="50" height="50"></a>
        </main>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/tv/'
    import serializdIcon from '../../assets/serializd.png'

    export default {
        data() {
            return {
                cover: 'poster',
                img: coverImg,
                title: '',
                s1e1: ``,
                s1e2: ``,
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
    button {
        all: unset;
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

    .revew-text {
        display: flex;
        place-content: center;
        margin-top: 1rem;
    }

    #serializd-link {
        margin: 2rem;
    }

    a:hover #serializd-link,
    #serializd-link:hover {
        filter: invert(50%) sepia(10%) saturate(90%) contrast(30%);
    }

    .text {
        white-space: pre-wrap;
        display: flex;
        place-content: center;
    }
</style>