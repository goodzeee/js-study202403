
import ProductItem from "./ProductItem.js";
import Component from "./Component.js";
import Shop from "./Shop.js";

// UL태그 렌더링 담당
class ProductList extends Component{
  // JSON형태의 배열을 받아옴
  constructor(tagId, products) {
    super(tagId)
    this.products = products;
  }

  render() {

    const attr = {
      'id': 'prod-list',
      
    };

    this.createElement('ul', 'product-list', '', attr);

    // const $prodList = document.createElement('ul');
    // $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성
    // console.log('products: ', this.products);
    this.products.forEach((prod) => {
      // const product = new ProductItem(prod);
      // $prodList.appendChild(product.render());
      new ProductItem(attr.id, prod).render();
    });

    // div#app에 ul추가
    //document.getElementById('app').appendChild($prodList);
    return $prodList;
  }
}

export default ProductList;
