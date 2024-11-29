<template>
    <SuperTable
        :showMap="true"
        :model="superTableModel"
        @clickRow="openRecord"
        :displayMapField="false"
        :parentKeyValuePair="parentKeyValuePair"
        :fetchFlags="fetchFlags"
        :noBorder="noBorder"
        :filtersProp="filters"
        @update:filtersProp="(newVal)=>{$emit('update:filters', newVal)}"
        :filterLookupNames="filterLookupNames"
        @update:filterLookupNames="(newVal)=>{$emit('update:filterLookupNames', newVal)}"
    />
</template>

<script>
import { SuperTable } from 'wizweb-fe'
import Product from 'src/models/orm-api/Product'

export default {
    name: 'Product-list',
    components: {
        SuperTable,
    },

    props: {
        filters: {
          type: Object,
          default: () => {
            return {}
          }
        },
        filterLookupNames: {
          type: Object,
          default: () => {
            return {}
          }
        },
        noBorder: {
          type: Boolean,
          default: () => {
            return false
          }
        },
        parentKeyValuePair: {
            type: Object,
            default: () => ({})
        },
        fetchFlags: {
            type: Object,
            default: () => ({})
        }
    },

    computed: {
        superTableModel() {
            return Product
        },
    },
    methods: {
        openRecord(pVal, item, router) {
            router.push({
                name: '/lists/products/:rId/:rName',
                params: {
                    rId: pVal,
                    rName: pVal,
                },
            })
        },
    },
}
</script>
