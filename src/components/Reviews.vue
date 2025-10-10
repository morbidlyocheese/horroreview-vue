<template>
    <div class="links">
        <!-- <h2>{{ name }}</h2> -->
        <h3>Book Reviews:</h3>
        <RouterLink class="link" to="/reviews/the-slob">The Slob</RouterLink>
        <h3>Film Reviews:</h3>
        <RouterLink class="link" to="/reviews/escape-room-2">Escape Room: Tournament Of Champions</RouterLink>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Reviews',
        }
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
        flex-direction: column;
        gap: 1rem;
        place-items: center;
        margin-top: 2rem;
    }
</style>