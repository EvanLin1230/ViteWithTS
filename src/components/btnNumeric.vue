<template>
    <div class="d-flex">
        <button class="btn border bi bi-dash" @click="Plus(-1)"></button>
        <input class="form-control" type="text" :value="value">
        <button class="btn border bi bi-plus" @click="Plus(1)"></button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// 函式區
/** 
 * 確認資料來源都沒問題 
 * */
function propsCheck(){
    Object.keys(prop).forEach((propKey:String) => {
        const checkValue = prop[propKey as keyof typeof prop];

        if(checkValue==null || checkValue==undefined)
            throw new Error(`${propKey} can not be null or undefined`);
    })
}

/**
 * 進行數值加減
 * @param num 正整數為加，負整數為減
 */
function Plus(num:number){
    value.value += num;
}

/** 組件必須能夠接受外部的資料，如果沒有，也必須要有初始值，或是必須拋錯給組件呼叫者 */
const prop = defineProps({
    value: {
        type: [String, Number],
        require: true
    }
});

// 流程開始
propsCheck();

// 確認資料都沒問題後，就可以初始化組件資料
const value = ref(Number.parseInt(prop['value']!.toString()));

</script>

<style scoped>

</style>