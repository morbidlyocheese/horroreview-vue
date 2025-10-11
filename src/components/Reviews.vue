<template>
    <div class="links">
        <div class="book-links">
            <h3>Book Reviews:</h3>
			<li v-for="link in links">
				<RouterLink class="link" to={{ link.route }}>{{ link.title }}</RouterLink>
			</li>
        </div>
        <div class="film-links">
            <h3>Film Reviews:</h3>
            <RouterLink class="link" to={{ films.route }}>{{ films.title }}</RouterLink>
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
					route: '/reviews/the-slob'
				}
				// {
				// 	title: '',
				// 	route: ''
				// },
			]
			// films: [
			// 	{
			// 		title: 'Escape Room: Tournament Of Champions',
			// 		route: '/reviews/escape-room-2'
			// 	},
			// ]
    }
}

</script>

<style>
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