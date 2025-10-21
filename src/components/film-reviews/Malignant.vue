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
            <a id="letterboxd-link" :href="letterboxd" target="_blank"><img id="letterboxd-link" :src="linkIcon" alt="letterboxd link" width="50" height="50"></a>
        </main>
    </div>
</template>

<script>
    import coverImg from '../../assets/covers/films/malignant-poster.jpg'
    import letterboxdIcon from '../../assets/letterboxd.png'

    export default {
        data() {
            return {
                cover: 'poster',
                img: coverImg,
                title: 'Malignant',
                text: `
                I went into this knowing literally 0. All I knew was that it is a James Wan film and that there was some hype around it. I didn't see a trailer at all, nor did I even know a basic film description going into it.
                
                And despite all of that, I didn't really care for this film. I know that some people have called it campy for its somewhat laughable moments. But honestly, it isn't campy in my opinion, although it is laughable. The beginning scene alone had me just asking myself what the hell is going on, and just finding the lines/acting to be so subpar.
                
                I felt like the first half of the film felt fairly interesting/cool, but when the reveal happened I saw it coming. I wasn't exactly surprised and really just saw it as laughable. I wanted to like the film since the first half felt pretty solid for the most part. And I mean the cinematography was gorgeous at points.
                
                But overall this film just felt far too silly to be enjoyable for me. It was silly and predictable. And even if someone tries to say it pays homage to 70s/80s horror and all that, like I love those decades of horror, but I didn't really see how it was related. Or even how someone could compare it to them. 
                
                This film just felt so lackluster in the end and I was just genuinely disappointed with it. I was hoping I was going to get a film that would blow my mind away. But it honestly just fell flat on its face.`,
                stars: '★★☆☆☆',
                letterboxd: 'https://letterboxd.com/morbidlyocheese/film/malignant-2021/1',
                linkIcon: letterboxdIcon,
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

    #letterboxd-link {
        margin: 2rem;
    }

    a:hover #letterboxd-link,
    #letterboxd-link:hover {
        filter: invert(50%) sepia(10%) saturate(90%) contrast(30%);
    }

    .text {
        white-space: pre-wrap;
        display: flex;
        place-content: center;
    }
</style>