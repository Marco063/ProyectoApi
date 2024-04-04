const Rental = require('./../models/model-rental')
const Location = require('./../models/model-location')

module.exports = {
    findAll: async (req, res) =>{
        try {
            const data = await Rental.find({}).populate('location')
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },
    findById: async (req, res) => {
        const { id } = req.params
        try {
            const data = await Rental.findById(id).populate('location')
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    },
    save: async (req, res) => {
        const { id } = req.params;
    
        try {
            const location = await Location.findById(id)
    
            if (location) {
                try {
                    const rental = new Rental(req.body)
                    rental.location = location
                    const result = await rental.save()
                    return res.status(200).json({ "status": true, "data": result })
                } catch (error) {
                    console.log(error)
                    return res.status(500).json({ "status": false, "error": error })
                }
            } else {
                return res.status(404).json({ "status": false, "error": "La Locacion No Existe" })
            }
        } catch (error) {
            return res.status(500).json({ "status": false, "error": "El id esta incompleto" })
        }
    },
    update: async (req, res) => {
        const { id } = req.params
        try {
            const data = await Rental.findByIdAndUpdate(id, req.body)
            return res.status(200).json({ "state": true, "data": data })
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    }, 
    remove: async (req, res) => {
        const { id } = req.params
        try {
            const data = await Rental.findByIdAndDelete(id, req.body)
            return res.status(200).json({ "state":true,"data": data})
        } catch (error) {
            return res.status(500).json({ "state": false, "error": error })
        }
    }
}
