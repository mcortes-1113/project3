var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const states = [
    "AK","AL","AZ","AR","CA","CO","CT","DE","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MD","MA","MI","MN","MS","MO",
    "MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"
]

var accountSchema = {

    accountType: {
        type: String,
        required: true,
        enum: ['provider', 'user']
    },
    email: {
        type: String,
        required: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    password: {
        type: String,
        required: true,
        minLength: 6,
        maxLength: 12
    },
    userImageURL: {
        type: String,
        required: true,
        default: "../assets/defaultUser.png"
    },
    userName: {
        type: String,
        required: true
    },
    providerDescription: {
        type: String,
    },
    providerCity: {
        type: String,
    },
    providerState: {
        type: String,
        enum: states
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
}

var user = mongoose.model("account", accountSchema);

module.exports = account;