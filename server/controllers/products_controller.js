const controller = {
    create(req, res, next) {
        const dbInstance = req.app.get('db')
        console.log(req.body)
        const {name, desc, price, image_url} = req.body.newProduct

        dbInstance.create_product([name, desc, price, image_url])
        .then(created => {
            console.log(`Hit!`)
            res.status(200).send(created)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
    },
    getOne(req, res, next) {
        const dbInstance = req.app.get('db')
        dbInstance.read_product(req.params.id)
        .then(product => {
            res.status(200).send(product)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
    },
    getAll(req, res, next) {
        const dbInstance = req.app.get('db')
        console.log('made it!')
        dbInstance.read_products()
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
    },
    update(req, res, next) {
        const dbInstance = req.app.get('db')
        dbInstance.update_product([req.params.id, req.query.desc])
        .then(updated => {
            res.status(200).send(updated)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
    },
    delete(req, res, next) {
        const dbInstance = req.app.get('db')
        dbInstance.delete_product(req.params.id)
        .then(deleted => {
            res.status(200).send(deleted)
        })
        .catch(err => {
            console.log(err)
            res.status(500)
        })
    }
}

module.exports = controller