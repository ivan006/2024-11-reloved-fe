<template>

    <div>
        <q-card class="">
            <productCategoryList
                :parentKeyValuePair="parentKeyValuePair"
                :fetchFlags="fetchFlags"
            />
        </q-card>
    </div>
</template>

<script>
import productCategoryList from 'src/views/lists/product-categories/ProductCategoryList.vue'

export default {
    name: 'ProductCategory-list-controller',
    components: {
        productCategoryList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>