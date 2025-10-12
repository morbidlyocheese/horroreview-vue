<template>
    <div class="links">
        <div class="book-links">
            <h3>Book Reviews:</h3>
            <ul>
                <li v-for="(book, index) in books" :key="`book-` + index">
                    <RouterLink class="link" :to="book.route">{{ book.title }} by {{ book.author }}</RouterLink>
                </li>
            </ul>
        </div>
        <div class="film-links">
            <h3>Film Reviews:</h3>
            <ul>
                <li v-for="(film, index) in films" :key="`film-` + index">
                    <RouterLink class="link" :to="film.route">{{ film.title }}</RouterLink>
                </li>
            </ul>
        </div>
        <div class="tv-links">
            <h3>TV Reviews:</h3>
            <ul>
                <li v-for="(tv, index) in tvs" :key="`tv-` + index">
                    <RouterLink class="link" :to="tv.route">{{ tv.title }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            books: [
                {
                    title: 'The Slob',
                    author: 'Aaron Beauregard',
                    route: '/reviews/the-slob'
                }
            ],
            films: [
                {
                    title: 'Escape Room: Tournament Of Champions',
                    route: '/reviews/escape-room-2'
                }
            ],
            tvs: [
                {
                    title: 'Day Of The Dead',
                    route: '/reviews/day-of-the-dead'
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
        text-decoration: underline;
        margin: 0 0 0.5rem 0;
    }

    .link {
        display: inline-flex;
        align-items: center;
    }

    .links {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 2rem;
        align-items: start;
        place-items: center;
        width: 100%;
        box-sizing: border-box;
    }

    .book-links, .film-links, .tv-links {
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