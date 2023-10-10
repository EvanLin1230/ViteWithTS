<template>
    <!-- 具名插槽使用 -->
    <!-- 這裡這樣有點像 interface ，如果只是需要定義好格式，就可以參考此做法 -->
    <div class="compTestContainer">
        <slot name="Component-Label"></slot>
        <slot name="Component"></slot>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.compTestContainer{
    display: block;
}
</style>