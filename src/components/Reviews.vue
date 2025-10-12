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
            ]
        }
    }
}

</script>

<style>
    ul {
        list-style-type: none;
    }

    h2 {
        text-decoration: underline;
    }

    .link {
        display: flex;
    }

    .links {
        display: flex;
        flex-direction: row;
        gap: 10rem;
        place-items: center;
    }

    .book-links, .film-links {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        place-items: center;
    }
</style>