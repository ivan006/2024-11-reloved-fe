<template>
    <SuperRecord
        :model="superRecordModel"
        :id="+$route.params.rId"
        :displayMapField="true"
        @initialLoadHappened="$emit('initialLoadHappened')"
        treeMode
        :relationships="[
          'brand',
          'seller.products_seller_id',
        ]"
    >
    </SuperRecord>
</template>

<script>
import { SuperRecord } from 'wizweb-fe'
import Product from 'src/models/orm-api/Product'

export default {
    name: 'Product-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Product
        },
    },
}
</script>

<style scoped></style>
