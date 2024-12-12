<template>
  <div>
    <BreadcrumbsFilter
      v-if="showBreadcrumbsFilter"
      boundRoute="/lists/products/filter/:filterParams*"
      boundRouteParam="filterParams"
      v-model:filterVals="filterVals"
      v-model:filterNames="filterNames"
      :model="superTableModel"
      :trailPrefix='[
        {
        "label": "Home"
        },
        {
        "label": "Products"
        },
        {
        "label": "Filter"
        }
      ]'
    />
  </div>
  <div class="q-mb-md">
    <productList
      @hasMounted="showBreadcrumbsFilter=true"
      :parentKeyValuePair="parentKeyValuePair"
      :fetchFlags="fetchFlags"
      v-model:filterVals="filterVals"
      v-model:filterNames="filterNames"
    />
    <!--<pre>{{filterVals}}</pre>-->
    <!--<pre>{{filterNames}}</pre>-->
  </div>
</template>

<script>
import productList from "src/views/lists/products/ProductList.vue";
import { BreadcrumbsFilter } from 'wizweb-fe'
import Product from "src/models/orm-api/Product";

export default {
  name: "Product-list-controller",
  components: {
    BreadcrumbsFilter,
    productList,
  },
  data() {
    return {
      parentKeyValuePair: {},
      fetchFlags: {},
      filterVals: {}, // Stores filter IDs
      filterNames: {}, // Stores filter names
      showBreadcrumbsFilter: false, // Stores filter names
    };
  },
  computed: {
    superTableModel() {
      return Product
    },
  },
  watch: {
  },
  mounted(){
  }
};
</script>

