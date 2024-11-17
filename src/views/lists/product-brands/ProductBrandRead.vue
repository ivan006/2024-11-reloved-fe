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
import ProductBrand from 'src/models/orm-api/ProductBrand'

export default {
    name: 'ProductBrand-read',
    components: { SuperRecord },
    computed: {
        superRecordModel() {
            return ProductBrand
        },
    },
}
</script>

<style scoped></style>