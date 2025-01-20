<template>
    <!--<SuperRecord-->
    <!--    :model="superRecordModel"-->
    <!--    :id="+$route.params.rId"-->
    <!--    :displayMapField="true"-->
    <!--    @initialLoadHappened="$emit('initialLoadHappened')"-->
    <!--&gt;-->
    <!--</SuperRecord>-->
  <SuperRecord
    :model="superRecordModel"
    :id="+$route.params.rId"
    :displayMapField="true"
    @initialLoadHappened="$emit('initialLoadHappened')"
    treeMode
    :relationships="[
          'products',
        ]"
  >
  </SuperRecord>
</template>

<script>
import { SuperRecord } from 'wizweb-fe'
import Brand from 'src/models/orm-api/Brand'

export default {
    name: 'Brand-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return Brand
        },
    },
}
</script>

<style scoped></style>
