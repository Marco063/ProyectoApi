const Location = require('./../models/model-location')

module.exports = {
    findAll: async (req, res) => {
        try {
            const data = await Location.find({})
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },
    findById: async (req, res) => {
        const { id } = req.params
        try {
            const data = await Location.findById(id)
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },
    save: async (req, res) =>{
        const location = new Location(req.body)

        try {
            const data = await location.save()
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        try {
            const data = await Location.findByIdAndUpdate(id, req.body)
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },
    remove: async (req, res) => {
        const { id } = req.params
        try {
            const data = await Location.findByIdAndDelete(id, req.body)
            return res.status(200).json({ "state":true,"data": data})
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    }
}