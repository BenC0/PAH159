# TODO
1. PDP
2. Basket
3. Checkout
   1. Order summary del method

# Checkout scenarios
1. Delivery and C&C are both available
   1. Send event/CD "Delivery & C&C Available"
   2. V1 - Deselect
   3. V2 - Select Delivery
   4. V3 - Select C&C
2. one or more are unavailable
   1. Do nothing
   2. Send event/CD "Delivery or C&C Unavailable"

# Basket scenarios
1. Messaging is shown
   2. Send event/CD "Basket Messaging Displayed"
1. Messaging is not shown
   2. Send event/CD "Basket Messaging Not Displayed"

# Tracking
1. Custom Dimensions
   1. PDP
      1. V1 - Loaded
      2. V2 - Loaded
      3. V3 - Loaded
   2. Basket
      1. V1 - {{ Basket Condition }}
      2. V2 - {{ Basket Condition }}
      3. V3 - {{ Basket Condition }}
   2. Checkout
      1. V1 - {{ Checkout Condition }}
      2. V2 - {{ Checkout Condition }}
      3. V3 - {{ Checkout Condition }}

PDP V1 - Loaded = 1000 Sessiosn
Basket V1 = 750 sessions
Basket V1 - Deliver & cncAvialab = 500 sessions
