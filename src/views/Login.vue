<template>
    <dev class="login">
        <button @click="handleClick">登录</button>
    </dev>
</template>

<script>
export default {
   methods : {
       handleClick () {
           const expires = 900 * 24 * 3600 * 1000;
           const date = new Date( + new Date() + expires);
           document.cookie = `login=true;expires=${date.toUTCString(expires)}`;
       }
   } 
}
</script>