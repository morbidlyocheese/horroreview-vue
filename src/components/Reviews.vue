<template>
    <div>
        <h2>{{ name }}</h2>
        <RouterLink class="link" to="/reviews/the-slob">The Slob</RouterLink>
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
    .link {
        display: flex;
    }
</style>