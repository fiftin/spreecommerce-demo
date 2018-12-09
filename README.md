![Logo](https://spreecommerce-demo.herokuapp.com/assets/logo/spree_50-1c7335be355d4672a35c5023956d0c883f254831f3e3dae3f2ca05976ceb5e50.png)

Source code of website which demonstrates abilities of [Spree Commerce 3.6](https://github.com/spree/spree/tree/3-0-stable) engine on Rails 5.2.

The demo website includes next extensions:

* [spree_amazon_like_dropdown](https://github.com/fiftin/spree_amazon_like_dropdown/tree/3-0-stable) &mdash; Amazon-like dropdown menu
* [spree_add_to_cart_ajax](https://github.com/fiftin/spree_add_to_cart_ajax/tree/3-6-stable) &mdash; Add item to cart with using AJAX

### How to run?

```
git clone https://github.com/fiftin/spreecommerce-demo
cd spreecommerce-demo
rake db:migrate
rails server
```