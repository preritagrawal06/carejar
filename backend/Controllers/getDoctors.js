const Doctor = require('../Models/doctors')


// getting all the doctors matching the required speciality
const GetDoctors = async (req, res, next)=>{
    const speciality = req.params.speciality

    const data = await Doctor.find({speciality: speciality})

    res.json(data)
}

module.exports = GetDoctors