<template>
    <div class="container">
        <div class="form-control">
            <btnNumeric :value="btnNumeric1"></btnNumeric>
            <label>目前數字（當前頁面）: {{ btnNumeric1 }}</label>
        </div>
        <div class="form-control">
            測試組件方式一（1.使用插槽將組件丟進去 2.將顯示的label自定義的丟進去）:
            <compTestContainer :labelValue="`btnNumeric`.toString()">
                <btnNumeric :value="btnNumeric2"></btnNumeric>
            </compTestContainer>
            <label>目前數字（當前頁面）: {{ btnNumeric2 }}</label>
        </div>
        <div class="form-control">
            測試組件方式二（1.都使用插槽將組件與label丟進去，該測試組件包只是將其包起來而已（先行定義格式），資料都不需要傳進去）:
            <compTestContainer2 :labelValue="`btnNumeric`.toString()">
                <template v-slot:Component-Label>
                    <label>btnNumeric</label>
                </template>
                <template v-slot:Component>
                    <btnNumeric :value="btnNumeric3"></btnNumeric>
                </template>
            </compTestContainer2>
            <label>目前數字（當前頁面）: {{ btnNumeric3 }}</label>
        </div>
    </div>
</template>

<script setup lang="ts">
import btnNumeric from '@/components/btnNumeric.vue';
import compTestContainer from '@/components/compTest_use/compTestContainer.vue';
import compTestContainer2 from '@/components/compTest_use/compTestContainer2.vue';

import { ref } from 'vue';

const btnNumeric1 = ref(1);
const btnNumeric2 = ref(1);
const btnNumeric3 = ref(1);

</script>

<style scoped>

</style>