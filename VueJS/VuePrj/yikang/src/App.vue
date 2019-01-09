<template>
    <div>
        <ul>
            <li><router-link to="/home" tag="strong" active-class="current">Home</router-link></li>
            <li><router-link to="/cart" active-class="current">Cart</router-link></li>
            <li><router-link to="/mine" active-class="current">Mine</router-link></li>
        </ul>
        <router-view/>
    </div>
</template>

<script>
export default {
//   name: 'App'
}
</script>

<style>
    .current{color: red;font-weight: bold;}
</style>
