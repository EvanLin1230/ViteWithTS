<template>
    <div>
        <span>This is Home Page</span>

        <button @click="btnClick()">Count is: {{ a }}</button>

        
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { onMounted } from 'vue';

const a = ref(0);

function btnClick(){
    a.value ++;
}

onMounted(()=>{
    console.log(`initial count is ${ a.value }`);
})

</script>

<style scoped>

</style>