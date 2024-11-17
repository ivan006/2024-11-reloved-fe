import MyBaseModel from 'src/models/helpers/MyBaseModel';
import ProductBrand from 'src/models/orm-api/ProductBrand';
import User from 'src/models/User';
import ProductCategory from 'src/models/orm-api/ProductCategory';

export default class Product extends MyBaseModel {
  static entity = 'product';
  static entityUrl = '/api/products';
  static primaryKey = 'id';
  static titleKey = 'id';
  static entityHumanName = 'Product';

  static openRecord(pVal, item, router) {
    router.push({
      name: '/lists/products/:rId/:rName',
      params: {
        rId: pVal,
        rName: pVal,
      },
    })
  }

  static parentWithables = [
    'seller',
    'buyer',
    'category',
    'brand'
  ];

  static rules = {
    readables: () => true,
    readable: (item) => true,
    editable: (item) => true,
    creatable: () => true,
  };


  static hooks = {
    createComplete: (response) => {
    },
  };

  static fieldsMetadata = {
    'id': {},
    'title': {},
    'description': {},
    'price': {},
    'seller_id': {
      linkablesRule: () => {
        return {}
      }
    },
    'buyer_id': {
      linkablesRule: () => {
        return {}
      }
    },
    'category_id': {
      linkablesRule: () => {
        return {}
      }
    },
    'brand_id': {
      linkablesRule: () => {
        return {}
      }
    },
    'status': {},
    'created_at': {},
    'updated_at': {}
  };

  static fields() {
    return {
      'id': this.attr('').nullable(),
      'title': this.attr('').nullable(),
      'description': this.attr('').nullable(),
      'price': this.attr('').nullable(),
      'seller_id': this.attr('').nullable(),
      'buyer_id': this.attr('').nullable(),
      'category_id': this.attr('').nullable(),
      'brand_id': this.attr('').nullable(),
      'status': this.attr('').nullable(),
      'created_at': this.attr('').nullable(),
      'updated_at': this.attr('').nullable(),
      'brand': this.belongsTo(ProductBrand, 'brand_id'),
      'buyer': this.belongsTo(User, 'buyer_id'),
      'category': this.belongsTo(ProductCategory, 'category_id'),
      'seller': this.belongsTo(User, 'seller_id')
    };
  }

  static FetchAll(relationships = [], flags = {}, moreHeaders = {}, options = {
    page: 1,
    limit: 15,
    filters: {},
    clearPrimaryModelOnly: false
  }) {
    return this.customSupabaseApiFetchAll(
      `${this.baseUrl}${this.entityUrl}`,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      options,
      this
    );
  }

  static FetchById(id, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiFetchById(
      `${this.baseUrl}${this.entityUrl}`,
      id,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }

  static Store(entity, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiStore(
      `${this.baseUrl}${this.entityUrl}`,
      entity,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }

  static Update(entity, relationships = [], flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiUpdate(
      `${this.baseUrl}${this.entityUrl}`,
      entity,
      [...this.parentWithables, ...relationships],
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }

  static Delete(entityId, flags = {}, moreHeaders = {}) {
    return this.customSupabaseApiDelete(
      `${this.baseUrl}${this.entityUrl}`,
      entityId,
      flags,
      this.mergeHeaders(moreHeaders),
      this
    );
  }
}
