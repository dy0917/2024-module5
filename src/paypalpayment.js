var fetch = require("node-fetch");

fetch("https://api-m.sandbox.paypal.com/v2/checkout/orders", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer A21AAK3YbdehBogU-VdeKZGJchTjcuM1o1h5epp9eLh7rRaqcSoh6HRFLmw8A_KuQbLXf5OQazv81ZIcsQrRu9el6uYH0wHig",
  },
  body: JSON.stringify({
    intent: "CAPTURE",
    purchase_units: [
      {
        reference_id: "d9f80740-38f0-11e8-b467-0ed5f89f718b",
        amount: { currency_code: "USD", value: "110.00" },
      },
    ],
    payment_source: {
      paypal: {
        experience_context: {
          payment_method_preference: "IMMEDIATE_PAYMENT_REQUIRED",
          brand_name: "EXAMPLE INC",
          locale: "en-US",
          landing_page: "LOGIN",
          shipping_preference: "NO_SHIPPING",
          user_action: "PAY_NOW",
          return_url: "https://example.com/returnUrl",
          cancel_url: "https://example.com/cancelUrl",
        },
      },
    },
  }),
}).then((response) => console.log(response));
