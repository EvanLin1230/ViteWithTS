<template>
    <div class="compTestContainer">
        <label for="" class="">Test Component Name: {{ labelValue }}</label>
        <!-- 插槽使用 -->
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

/** 函式區 */
// 確認資料來源沒問題
function propsCheck(prop:any){
    Object.keys(prop).forEach((propKey:String) => {
        const checkValue = prop[propKey as keyof typeof prop];

        if(checkValue==null || checkValue==undefined)
            throw new Error(`${propKey} can not be null or undefined`);
    })
}

/** 流程線 */
// 組件必須能夠接受外部的資料，如果沒有，也必須要有初始值，或是必須拋錯給組件呼叫者
const prop = defineProps({
    labelValue: {
        type: String,
        require: true
    }
});

propsCheck(prop);

/** 確認資料都沒問題後，就可以初始化組件資料 */
const labelValue = ref(prop['labelValue']!.toString());

</script>

<style scoped>
.compTestContainer{
    display: block;
}
</style>