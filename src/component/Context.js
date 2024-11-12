import React, { Component } from "react";
import { storeProducts } from "../data";
import { detailProduct } from "../data";

const Context = React.createContext();

class ProductProvider extends Component {
  state = {
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    subTotal: 0,
    tax: 0,
    total: 0,
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };

  componentDidMount() {
    this.setProducts();
  }

  setProducts = () => {
    let products = [];
    storeProducts.forEach((item) => {
      const singleItem = { ...item };
      products = [...products, singleItem];
    });
    this.setState(() => {
      return { products };
    });
  };

  handleDetails = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    const tempProducts = [...this.state.products];
    const item = this.getItem(id);
    const index = tempProducts.indexOf(item);
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    product.total = product.price;

    this.setState(
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };
  closeModal = () => {
    this.setState(() => {
      return { modalOpen: false };
    });
  };
  increment = (id) => {
    const tempCart = [...this.state.cart];
    const item = this.getItem(id);
    const index = tempCart.indexOf(item);
    const product = tempCart[index];
    product.count += 1;
    product.total += product.price;
    this.setState(
      () => {
        return { cart: tempCart };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = (id) => {
    const tempCart = [...this.state.cart];
    const item = this.getItem(id);
    const index = tempCart.indexOf(item);
    const product = tempCart[index];
    product.count -= 1;
    if (product.count < 1) {
      this.remove(id);
    } else {
      product.total -= product.price;
      this.setState(
        () => {
          return { cart: tempCart };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };
  remove = (id) => {
    const tempProducts = [...this.state.products];
    const tempCart = [...this.state.cart];
    const Cart = tempCart.filter((item) => item.id !== id);

    const item = this.getItem(id);
    const index = tempProducts.indexOf(item);
    const product = tempProducts[index];
    product.inCart = false;
    product.count = 0;
    product.total = 0;
    this.setState(
      () => {
        return { products: tempProducts, cart: Cart };
      },
      () => {
        this.addTotals();
      }
    );
  };
  clear = () => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setProducts();
      },
      () => {
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map((item) => (subTotal += item.total));
    const productTax = subTotal * 0.1;
    const tax = parseFloat(productTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return { subTotal: subTotal, tax: tax, total: total };
    });
  };

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          handleDetails: this.handleDetails,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          remove: this.remove,
          clear: this.clear,
          addTotals: this.addTotals,
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

const ProductConsumer = Context.Consumer;
export { ProductProvider, ProductConsumer };
