import Component from "./Component.js";

class ShoppingCart extends Component{

  constructor(tagId) {
    // 장바구니에 담은 product들을 저장
    super(tagId);
    this.cartItems = [];
  }

  render() {
    // const $section = document.createElement('section');
    // $section.classList.add('cart');
    // $section.innerHTML = `
    const childHtml = `
      <h2>총액 0원</h2>
      <button>주문하기</button>
    `;

    this.createElement('section', 'cart', childHtml)
    //return $section;
  }
}

export default ShoppingCart;