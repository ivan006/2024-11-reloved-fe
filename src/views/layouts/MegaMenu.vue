<template>
  <q-toolbar-title class="row items-end">
    <RecursiveMenu :menuList="menuList" />
  </q-toolbar-title>
</template>

<script>
import RecursiveMenu from "./RecursiveMenu.vue";
import { v4 as uuidv4 } from "uuid";

export default {
  name: "MegaMenu",
  components: {
    RecursiveMenu,
  },
  data() {
    return {
      genders: ["Men", "Women", "Unisex"], // Gender list
      categories: ["Shirts", "Pants", "Shoes"], // Category list
      brands: ["Nike", "Adidas", "Puma"], // Brand list
      menuList: [], // Dynamically generated menu list
    };
  },
  created() {
    this.generateMenuList();
  },
  methods: {
    generateMenuList() {
      this.menuList = this.genders.map((gender) => ({
        func: gender,
        uuid: uuidv4(),
        children: [
          {
            func: "All",
            uuid: uuidv4(),
          },
          ...this.categories.map((category) => ({
            func: category,
            uuid: uuidv4(),
            children: [
              {
                func: "All",
                uuid: uuidv4(),
              },
              ...this.brands.map((brand) => ({
                func: brand,
                uuid: uuidv4(),
              })),
            ],
          })),
        ],
      }));
    },
  },
};
</script>

<style>
.header-backgroud-color {
  background-color: #1e88e5;
}
</style>
