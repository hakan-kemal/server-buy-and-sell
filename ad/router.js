const { Router } = require('express');
const Ad = require('./model');

const router = new Router();

router.get('/advertisements', (_req, res, next) => {
  Ad.findAll()
    .then(ads => {
      res.status(200).send(ads);
    })
    .catch(err => next(err));
});

router.post('/advertisements', (req, res, next) => {
  console.log('Welcome from advertisement router.js; message created by router.POST');
  Ad.create(req.body)
    .then(ad => {
      res.status(200).send(ad);
    })
    .catch(err => next(err));
});

router.get('/advertisements/:id', (req, res, next) => {
  const { id } = req.params;
  Ad.findByPk(id)
    .then(ad => {
      if (ad) {
        res.status(200).send(ad);
      } else {
        res.status(404).end();
      }
    })
    .catch(err => next(err));
});

router.put('/advertisements/:id', (req, res, next) => {
  const { id } = req.params;
  Ad.findByPk(id)
    .then(ad => {
      if (ad) {
        ad.update(req.body).then(ad => res.status(200).send(ad));
      } else {
        res.status(404).end();
      }
    })
    .catch(err => next(err));
});

router.delete('/advertisements/:id', (req, res, next) => {
  const { id } = req.params;
  Ad.destroy({ where: { id: id } })
    .then(deleted => {
      const message = { message: 'Ad deleted!' };
      if (deleted) {
        return res.json(message).status(204);
      } else {
        return res.status(404).end();
      }
    })
    .catch(err => next(err));
});

module.exports = router;
