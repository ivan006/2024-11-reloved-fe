<template>
  <div>

    <SuperRecord
      :model="superRecordModel"
      :id="+$route.params.rId"
      :displayMapField="true"
      @initialLoadHappened="$emit('initialLoadHappened')"
      treeMode
      :relationships="[
          'brand',
          'seller.products_where_seller',
          'seller.products_where_buyer',
        ]"
    >
    </SuperRecord>
    <!--<SuperRecord-->
    <!--    :model="superRecordModel"-->
    <!--    :id="+$route.params.rId"-->
    <!--    :displayMapField="true"-->
    <!--    @initialLoadHappened="$emit('initialLoadHappened')"-->
    <!--&gt;-->
    <!--</SuperRecord>-->
  </div>
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
