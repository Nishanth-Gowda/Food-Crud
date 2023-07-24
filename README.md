# Order Service API

The Order Service is a RESTful API built using Node.js, Express, and MongoDB to store various orders placed by customers into a simple MongoDB table. The API follows the MVC (Model-View-Controller) architecture to organize the code into separate modules for easy maintenance and scalability. The API provides endpoints to create orders, fetch all orders, and delete orders by their IDs.

## Features

- Create a new order with attributes like order_id, foodname, order_qty, ordered by, and ordered at.
- Fetch all orders from the MongoDB database.
- Delete an order by its unique ID.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/order-service.git
   ```

2. Install dependencies:

   ```bash
   cd order-service
   npm install
   ```

3. Set up MongoDB:

   - Make sure you have MongoDB installed and running on your local machine.
   - Update the MongoDB connection URL in `server.js` to match your local MongoDB setup.

4. Start the server:

   ```bash
   npm start
   ```

5. The API will be accessible at `http://localhost:3000`.

## API Endpoints

### Create a new order

- **URL:** `/orders`
- **Method:** POST
- **Request body:**

  ```json
  {
    "order_id": "12345",
    "foodname": "Pizza",
    "order_qty": 2,
    "ordered_by": "John Doe"
  }
  ```

- **Response:**

  ```json
  {
    "_id": "64be14655d4a0a4b7de261f8",
    "order_id": "12345",
    "foodname": "Pizza",
    "order_qty": 2,
    "ordered_by": "John Doe",
    "ordered_at": "2023-07-24T06:04:21.517Z",
    "__v": 0
  }
  ```

### Fetch all orders

- **URL:** `/orders`
- **Method:** GET
- **Response:**

  ```json
  [
    {
      "_id": "64be14655d4a0a4b7de261f8",
      "order_id": "12345",
      "foodname": "Pizza",
      "order_qty": 2,
      "ordered_by": "John Doe",
      "ordered_at": "2023-07-24T06:04:21.517Z",
      "__v": 0
    },
    {
      "_id": "64be14655d4a0a4b7de261fa",
      "order_id": "123",
      "foodname": "Burger",
      "order_qty": 1,
      "ordered_by": "Jane Doe",
      "ordered_at": "2023-07-24T06:04:21.598Z",
      "__v": 0
    },
    // More orders...
  ]
  ```

### Delete an order

- **URL:** `/orders/:id`
- **Method:** DELETE
- **Response:**

  ```json
  {
    "_id": "64be14655d4a0a4b7de261f8",
    "order_id": "12345",
    "foodname": "Pizza",
    "order_qty": 2,
    "ordered_by": "John Doe",
    "ordered_at": "2023-07-24T06:04:21.517Z",
    "__v": 0
  }
  ```

## Testing

To run unit tests, execute the following command:

```bash
npm test
```

The tests use Jest and Supertest to perform unit testing on the controllers and endpoints.

## Contributing

If you would like to contribute to this project, feel free to open a pull request or report any issues you encounter.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
