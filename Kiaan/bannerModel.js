
const mongoose = require("mongoose");

const bannerSchema = mongoose.Schema(
    {
        image1: {
            type: String,
        },
        image2: {
            type: String,
        },
        image3: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("bannerskaaina", bannerSchema);


// middleName:Raz
// lastName:singh
// dateOfBirth:25
// expreience:10Y
// year:2024
// mobileno:1234564
// email:raz@gmail.com
// password:raz
// website:www.raz.net
// bloodGroup:B+
// state:MP
// district:Indore
// city:Indore
// tehsil:Indore
// village:Indore
// houseNumber:02485478
// //clinicName:RohanHealthcare
// //clinicAddress:Rajendra Nagra
// //clinicMobileno:5487654
// //clinicPhoneno:574974
// //clinicEmail:rohanclinic@gmail.com
// //clinicWebsite:www.rohanclinic.com
// mapDirection:not available
// signature:Raz
// areaWhereServe:not available
// speciality:eye special
// qualification:MBBS
// specialization:Righteye
// subSpecialization:done
// services:cardio
// accountNumber:549874564452
// ifdcNumber:123457458442
// accountHolderName:Raz Singh
// bankName:SBI
// bankAddress:Indore, Rajendra Nagrar
// details:{"services":"home vist","clinicPrce":"Discount":"20%",""Amount":"1000"}
// country:india