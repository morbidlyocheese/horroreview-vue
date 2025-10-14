<template>
    <div class="links">
        <div class="film-links">
            <h3>Gifs:</h3>
            <ul>
                <li v-for="(film, index) in films" :key="`film-` + index">
                    <RouterLink class="link" :to="film.route">{{ film.title }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            films: [
                {
                    title: 'Alien',
                    route: '/gifs/alien'
                },
                {
                    title: 'V/H/S: Halloween',
                    route: '/gifs/vhs-halloween'
                }
            ]
        }
    }
}

</script>

<style>
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    h3 {
        color: #a945a7;
        text-decoration: underline;
        margin: 0 0 0.5rem 0;
    }

    .link {
        display: inline-flex;
        align-items: center;
    }

    .links {
        display: grid;
        gap: 2rem;
        align-items: start;
        place-items: center;
        width: 100%;
        box-sizing: border-box;
    }

    .film-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        align-items: flex-start;
    }

    li {
        margin: 0.25rem 0;
    }

    @media (max-width: 720px) {
        .links {
            grid-template-columns: 1fr;
            gap: 1rem;
        }

        .book-links, .film-links, .tv-links {
            align-items: center;
        }
    }
</style>