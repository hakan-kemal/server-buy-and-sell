const Sequelize = require("sequelize");
const db = require("../db");

const Ad = db.define(
  "advertisement",
  {
    title: {
      type: Sequelize.STRING,
      field: "Title"
    },
    description: {
      type: Sequelize.STRING,
      field: "Description"
    },
    url: {
      type: Sequelize.STRING,
      field: "Picture"
    },
    price: {
      type: Sequelize.INTEGER,
      field: "Price"
    },
    email: {
      type: Sequelize.STRING,
      field: "Email"
    },
    phone: {
      type: Sequelize.INTEGER,
      field: "Phone No."
    }
  },
  {
    timestamps: false,
    tableName: "Advertisements"
  }
);

// db.sync();
db.sync({ force: true })
  //   .then(() => Ad.truncate())
  .then(() =>
    Promise.all([
      Ad.create({
        title: "Product 1",
        description: "Product 1 description",
        url: "Product 1 picture url",
        price: 123,
        email: "product1@product.com",
        phone: 061234567
      }),
      Ad.create({
        title: "Product 2",
        description: "Product 2 description",
        url: "Product 2 picture url",
        price: 1234,
        email: "product2@product.com",
        phone: 061234567
      }),
      Ad.create({
        title: "Product 3",
        description: "Product 3 description",
        url: "Product 3 picture url",
        price: 12345,
        email: "product3@product.com",
        phone: 061234567
      })
    ])
  )
  .catch(err => {
    console.error("Unable to create tables, error:", err);
    process.exit(1);
  });

console.log("Connected to Ad-model.js");

module.exports = Ad;
