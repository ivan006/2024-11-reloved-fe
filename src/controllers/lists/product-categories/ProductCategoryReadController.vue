<template>

    <div>
        <q-card class="q-mb-md">
            <productCategoryRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import productCategoryRead from 'src/views/lists/product-categories/ProductCategoryRead.vue'

export default {
    name: 'ProductCategory-read-controller',
    components: {
        productCategoryRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>