<template>
  <div>
    <FilterBreadcrumbs
      urlParamName="filterParams"
      v-model:filters="filters"
      v-model:filterLookupNames="filterLookupNames"
    />
    <productList
      :parentKeyValuePair="parentKeyValuePair"
      :fetchFlags="fetchFlags"
      v-model:filters="filters"
      v-model:filterLookupNames="filterLookupNames"
    />
    <!--<pre>{{filters}}</pre>-->
    <!--<pre>{{filterLookupNames}}</pre>-->
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
      filterLookupNames: {}, // Stores filter names
    };
  },
};
</script>

