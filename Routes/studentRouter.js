const express = require('express')

const {
    getAllData,
    getSingleData,
    createData,
    updateData,
    deleteData
} = require('../Controllers/studentController')

const router = express.Router()

router.route('/').get(getAllData).post(createData)

router.route('/:id').get(getSingleData).put(updateData).delete(deleteData)

module.exports = router