<template>

    <div>
        <q-card class="q-mb-md">
            <productBrandRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import productBrandRead from 'src/views/lists/product-brands/ProductBrandRead.vue'

export default {
    name: 'ProductBrand-read-controller',
    components: {
        productBrandRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>