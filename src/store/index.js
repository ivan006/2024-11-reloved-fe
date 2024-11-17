import { createStore } from 'vuex'
import VuexORM from '@vuex-orm/core'

import { DBCrudCacheSet } from 'wizweb-fe';

import User from 'src/models/User'
import Session from 'src/models/Session'
import RouteLineage  from "src/models/RouteLineage";
import ProductBrand from "src/models/orm-api/ProductBrand";
import ProductCategory from "src/models/orm-api/ProductCategory";
import Product from "src/models/orm-api/Product";


// Initialize the database
const database = new VuexORM.Database()

// Register models
database.register(DBCrudCacheSet);

database.register(User)
database.register(Session)
database.register(RouteLineage)


database.register(ProductBrand);
database.register(ProductCategory);
database.register(Product);

// Create Vuex store
const store = createStore({
  plugins: [VuexORM.install(database)]
})

export default store
