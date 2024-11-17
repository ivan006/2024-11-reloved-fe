<template>

    <div>
      <productBrandList
        :parentKeyValuePair="parentKeyValuePair"
        :fetchFlags="fetchFlags"
      />
    </div>
</template>

<script>
import productBrandList from 'src/views/lists/product-brands/ProductBrandList.vue'

export default {
    name: 'ProductBrand-list-controller',
    components: {
        productBrandList,
    },

    data() {
        return {
            parentKeyValuePair: {},
            fetchFlags: {}
        }
    },
}
</script>
