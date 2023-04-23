<script>

</script>

<template>
    <nav class="navigation">
        <div class="active-link"></div>
        <ul>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="">Contact</a></li>
        </ul>
    </nav>
</template>

<style scoped>
    .navigation{
    width: 100%;
    border-bottom: 3px solid #8ef98ecc;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
    }
    .navigation ul{
        list-style: none;
        display: flex;
        justify-content: end;
        padding: .5rem 1rem;
        gap: 2rem;
    }
    .navigation a{
        text-decoration: none;
        color: #8ef98ecc;
        font-size: 1rem;
        font-family: 'Press Start 2P', cursive;
        text-shadow: 0 0 1rem limegreen;
    }
    .active-link{
        position: absolute;
        bottom: -3px;
        right: 19.2rem;
        width: 7rem;
        height: 3rem;
        border: 3px solid #8ef98ecc;
        border-bottom: 3px solid #181e17;
        z-index: -1;
    }
</style>