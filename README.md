# Telegram Marketplace Bot

A marketplace bot for Telegram, allowing users to buy and sell digital products, tech gadgets, and crypto-related tools. This project leverages the Telegram Bot API, Node.js, Express.js, and MongoDB to create a fully functional marketplace experience within Telegram.

## Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
  - [User Registration](#user-registration)
  - [Product Listings](#product-listings)
  - [Shopping Cart](#shopping-cart)
  - [Order Management](#order-management)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features
- User registration via Telegram authentication.
- Sellers can list products with details such as name, description, price, and quantity.
- Buyers can browse products, add items to a shopping cart, and place orders.
- Order management, including status updates and notifications.
- Cryptocurrency and fiat payment support (integration in progress).

## Technologies Used
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- [Telegram Bot API](https://core.telegram.org/bots/api)

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) and npm installed.
- A MongoDB database (local or hosted, e.g., [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).
- A Telegram bot token from [BotFather](https://t.me/botfather) on Telegram.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/telegram-marketplace-bot.git
   cd telegram-marketplace-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables by creating a `.env` file in the root directory:
   ```plaintext
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   MONGODB_URI=your-mongodb-connection-string
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Set up your bot's webhook by sending a request to the Telegram Bot API:
   ```bash
   curl -X POST https://api.telegram.org/bot<your-bot-token>/setWebhook?url=https://your-domain.com/webhook
   ```

## API Endpoints

### User Registration
**Endpoint**: `POST /api/users/register`  
Registers a new user by collecting their Telegram user ID and other optional details.

- **Body Parameters**:
  - `telegramId` (string): Telegram user ID.
  - `name` (string): User's name.
  - `email` (string): User's email.
  - `isSeller` (boolean): Indicates if the user is a seller.

### Product Listings
**Endpoint**: `POST /api/products`  
Creates a new product listing (for sellers).

- **Body Parameters**:
  - `name` (string): Product name.
  - `description` (string): Product description.
  - `price` (number): Product price.
  - `sellerId` (string): ID of the seller.
  - `quantity` (number): Quantity in stock.

**Endpoint**: `GET /api/products`  
Retrieves all products available in the marketplace.

### Shopping Cart
**Endpoint**: `POST /api/cart`  
Adds products to the user's shopping cart.

- **Body Parameters**:
  - `userId` (string): User's ID.
  - `products` (array): List of products and quantities.

**Endpoint**: `GET /api/cart`  
Retrieves the user's shopping cart items.

### Order Management
**Endpoint**: `POST /api/orders`  
Places an order for the products in the user's cart.

- **Body Parameters**:
  - `buyerId` (string): Buyer's ID.
  - `products` (array): Products being purchased.
  - `totalAmount` (number): Total cost of the order.

**Endpoint**: `GET /api/orders`  
Retrieves all orders associated with a user.

## Usage
1. **Register a user** through the bot’s `/start` command to begin interaction.
2. **Browse products** by using the `/products` command to view the product catalog.
3. **Add items to the cart** and **place orders** through the chat interface.
4. **Receive notifications** for order status updates and product availability.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.
