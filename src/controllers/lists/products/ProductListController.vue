<template>
  <div>
    <FilterBreadcrumbs
      urlParamName="filterParams"
      v-model:filters="filters"
      v-model:filterNames="filterNames"
    />
    <productList
      :parentKeyValuePair="parentKeyValuePair"
      :fetchFlags="fetchFlags"
      v-model:filters="filters"
      v-model:filterNames="filterNames"
    />
    <!--<pre>{{filters}}</pre>-->
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
      filters: {}, // Stores filter IDs
      filterNames: {}, // Stores filter names
    };
  },
};
</script>

