<template>
    <SuperRecord
        :model="superRecordModel"
        :id="+$route.params.rId"
        :displayMapField="true"
        @initialLoadHappened="$emit('initialLoadHappened')"
    >
    </SuperRecord>
</template>

<script>
import { SuperRecord } from 'quicklists-vue-orm-ui'
import ProductCategory from 'src/models/orm-api/ProductCategory'

export default {
    name: 'ProductCategory-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return ProductCategory
        },
    },
}
</script>

<style scoped></style>