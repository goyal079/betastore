import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { addToCart } from "../actions/cartActions.js";

function Cart() {
  const dispatch = useDispatch();
  const productId = useParams().id;
  const [searchParams] = useSearchParams();
  const qty = searchParams.get("qty") ? searchParams.get("qty") : 1;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, +qty));
    }
  }, []);
  return (
    <>
      {cartItems.length === 0 ? (
        <h2> Cart Empty</h2>
      ) : (
        <div className="small-container cart-page">
          <table>
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Subtotal</th>
            </tr>
            {cartItems.map((item) => (
              <tr key={item.product}>
                <td>
                  <div className="cart-info">
                    <Link to={`/product/${item.product}`}>
                      <img src={item.image} alt={item.name} />
                    </Link>
                    <div>
                      <p>{item.name}</p>
                      <small>Price: ${item.price}</small>
                      <br />

                      <div className="btn2" onClick={() => {}}>
                        Remove
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {item.countInStock > 0 ? (
                    <select
                      type="number"
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(addToCart(item.product, +e.target.value))
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  ) : (
                    ""
                  )}
                </td>
                <td>${item.price}</td>
              </tr>
            ))}
          </table>
          <div className="total-price">
            <table>
              <tr>
                <td>
                  <h3>
                    Subtotal (
                    {cartItems.reduce((acc, item) => acc + item.qty, 0)}) items{" "}
                  </h3>
                </td>
                <td>
                  $
                  {cartItems.reduce(
                    (acc, item) => acc + item.qty * item.price,
                    0
                  )}
                </td>
              </tr>
              <tr>
                <td>Total</td>
                <td>
                  $
                  {cartItems.reduce(
                    (acc, item) => acc + item.qty * item.price,
                    0
                  )}
                </td>
              </tr>
              <button className="btn" onClick={() => {}}>
                Checkout
              </button>
            </table>
          </div>
        </div>
      )}
    </>
  );
}

export default Cart;
