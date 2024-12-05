<template>

    <div>
      <BreadcrumbsComp />
        <q-card class="q-mb-md">
            <productRead :id="id" />
        </q-card>
    </div>
</template>

<script>
import productRead from 'src/views/lists/products/ProductRead.vue'
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
    name: 'Product-read-controller',
    components: {
      BreadcrumbsComp,
        productRead,
    },

    data() {
        return {
            id: +this.$route.params.rId
        }
    },
}
</script>
