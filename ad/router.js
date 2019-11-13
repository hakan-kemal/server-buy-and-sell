const { Router } = require("express");
const Ad = require("./model");
// const auth = require("../auth/middleware");

const router = new Router();

router.post(
  "/advertisements",
  /*auth,*/ (request, response, next) => {
    console.log(
      "Welcome from advertisement router.js; message created by router.POST"
    );
    const advertisement = {
      title: request.body.title,
      description: request.body.description,
      url: request.body.url,
      price: request.body.price,
      email: request.body.email,
      phone: request.body.phone
    };
    Ad.create(advertisement)
      .then(advertisement => {
        response.status(200).send(advertisement);
      })
      .catch(next);
  }
);

router.get("/advertisements", (request, response, next) => {
  console.log(
    "Welcome from advertisement router.js; message created by router.GET"
  );
  Ad.findAll()
    .then(advertisement => {
      response.status(200).send(advertisement);
    })
    .catch(next);
});

router.get("/advertisements/:advertisementId", (request, response, next) => {
  Ad.findByPk(request.params.advertisementId)
    .then(advertisement => {
      if (advertisement) {
        response.status(200).send(advertisement);
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});

router.put("/advertisements/:advertisementId", (request, response, next) => {
  Ad.findByPk(request.params.advertisementId)
    .then(advertisement => {
      if (advertisement) {
        advertisement
          .update(request.body)
          .then(advertisement => response.status(200).send(advertisement));
      } else {
        response.status(404).end();
      }
    })
    .catch(next);
});

router.delete("/advertisements/:advertisementId", (request, response, next) => {
  Ad.destroy({ where: { id: request.params.advertisementId } })
    .then(deleted => {
      const message = { message: "An advertisement was deleted!" };
      if (deleted) {
        return response.json(message).status(204);
      } else {
        return response.status(404).end();
      }
    })
    .catch(next);
});

console.log("Connected to Ad-router.js");

module.exports = router;
