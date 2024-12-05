<template>
  <div>

    <BreadcrumbsFilter
      boundRoute="/lists/products/filter/:filterParams*"
      boundRouteParam="filterParams"
      v-model:filterVals="filterVals"
      v-model:filterNames="filterNames"
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
import BreadcrumbsComp from "src/views/BreadcrumbsComp.vue";

export default {
  name: "Product-list-controller",
  components: {
    BreadcrumbsComp,
    BreadcrumbsFilter,
    productList,
  },
  data() {
    return {
      parentKeyValuePair: {},
      fetchFlags: {},
      filterVals: {}, // Stores filter IDs
      filterNames: {}, // Stores filter names
    };
  },
};
</script>

