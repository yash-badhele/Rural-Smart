const catchAsyncErrors = require("../middleware/catchAsyncErrors");

const stripe = require("stripe")("sk_test_51LtUnsSEUURkCSqOolJYq6fBSYCpCxliOHGmKnZNkHP5LRCegBeeedFQpsVuum6NkncY79Br52htvtytVJrBiops00fMYUH8I5");

exports.processPayment = catchAsyncErrors(async (req, res, next) => {
  const myPayment = await stripe.paymentIntents.create({
    amount: req.body.amount,
    currency: "inr",
    metadata: {
      company: "Ecommerce",
    },
  });

  res
    .status(200)
    .json({ success: true, client_secret: myPayment.client_secret });
});

exports.sendStripeApiKey = catchAsyncErrors(async (req, res, next) => {
  res.status(200).json({ stripeApiKey: "pk_test_51LtUnsSEUURkCSqOWkOQdK4ZDaU4Ia3uMkjzo8LzmGOWXNZEtCvjOJvt1NTXdRhf9ih9fA0m07YaCZ8pIqdt0wUO00QOUt817e"});
});
