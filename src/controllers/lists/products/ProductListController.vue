<template>
  <div>
    <FilterBreadcrumbs
      boundUrlParamName="filterParams"
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
        "label": "Filters"
        }
      ]'
    />
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
import FilterBreadcrumbs from "src/views/FilterBreadcrumbs.vue";

export default {
  name: "Product-list-controller",
  components: {
    FilterBreadcrumbs,
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

