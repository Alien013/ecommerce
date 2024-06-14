// const Cart = require("../models/cart");

// exports.addItemToCart = async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ user: req.user._id });

//     if (cart) {
//       // If cart already exists, update the quantity of the item if it already exists in the cart
//       const product = req.body.cartItems.product;
//       const item = cart.cartItems.find((c) => c.product == product);

//       if (item) {
//         // If the product already exists in the cart, update the quantity
//         item.quantity += req.body.cartItems.quantity;
//       } else {
//         // If the product does not exist in the cart, push the new item
//         cart.cartItems.push(req.body.cartItems);
//       }

//       const updatedCart = await cart.save();
//       return res.status(201).json({ cart: updatedCart });
//     } else {
//       // If cart does not exist, create a new cart
//       const newCart = new Cart({
//         user: req.user._id,
//         cartItems: [req.body.cartItems],
//       });

//       const savedCart = await newCart.save();
//       return res.status(201).json({ cart: savedCart });
//     }
//   } catch (error) {
//     return res.status(400).json({ error });
//   }
// };

const Cart = require("../models/cart");

exports.addItemToCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ user: req.user._id }).exec();
    const product = req.body.cartItems.product;

    if (cart) {
      // if cart already exists, update the cart quantity
      const item = cart.cartItems.find((c) => c.product == product);

      if (item) {
        // Update the quantity of the existing product
        const condition = { user: req.user._id, "cartItems.product": product };
        const update = {
          $set: {
            "cartItems.$": {
              ...req.body.cartItems,
              quantity: item.quantity + req.body.cartItems.quantity,
            },
          },
        };

        cart = await Cart.findOneAndUpdate(condition, update, {
          new: true,
        }).exec();
      } else {
        // Add new product to the cart
        const condition = { user: req.user._id };
        const update = {
          $push: {
            cartItems: req.body.cartItems,
          },
        };

        cart = await Cart.findOneAndUpdate(condition, update, {
          new: true,
        }).exec();
      }
    } else {
      // if cart doesn't exist, create a new cart
      cart = new Cart({
        user: req.user._id,
        cartItems: [req.body.cartItems],
      });

      await cart.save();
    }

    return res.status(201).json({ cart });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// const { cartItems } = req.body;
// const user = req.user._id;

// try {
//   // Check if the cart already exists for the user
//   let cart = await Cart.findOne({ user });

//   if (cart) {
//     // Check if the product already exists in the cart
//     cartItems.forEach(async (cartItem) => {
//       const product = cartItem.product;
//       const itemIndex = cart.cartItems.findIndex((c) => c.product == product);

//       if (itemIndex > -1) {
//         // If product exists, update the quantity
//         let item = cart.cartItems[itemIndex];
//         item.quantity += cartItem.quantity;
//         cart.cartItems[itemIndex] = item;
//       } else {
//         // If product does not exist, add it to the cart
//         cart.cartItems.push(cartItem);
//       }
//     });

//     cart = await cart.save();
//     res.status(201).json({ cart });
//   } else {
//     // If no cart exists for the user, create a new one
//     const newCart = new Cart({
//       user,
//       cartItems,
//     });

//     const savedCart = await newCart.save();
//     res.status(201).json({ cart: savedCart });
//   }
// } catch (error) {
//   res.status(400).json({ error: error.message });
// }
