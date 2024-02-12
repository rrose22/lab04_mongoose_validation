const mongoose = require('mongoose');
var validateEmail = function (email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};
const UserSchema = new mongoose.Schema({
  username: {
    required: [true, "Username can't be empty"],
    type: String,
    minlength: 4,
  },
  email: {
    required: [true, "Email can't be empty"],
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    type: String,
  },
  city: {
      required: [true, "City can't be empty"],
      type: String,
      validate: {
        validator: (value) => /^[a-zA-Z\s]+$/.test(value),
        message: "Only alphabet and space while entering city name",
    },
  },
  website: {
    required: [true, "Website can't be empty"],
    type:String,
    validate: {
      validator: function (value) {
        var webRegex = /^((http|https):\/\/)([A-z]+)\.([A-z]{2,})/;
        return webRegex.test(value);
      },
      message: "Website must be of valid format",
    },
  },
  zipcode: {
      required: [true, "Zipcode can't be empty"],
      type: String,
      match: [/[0-9]{5}-[0-9]{4}$/, "Zip code must be 12345-1234 format"],
  },
  phone: {
    required: [true, "Phone number can't be empty"],
    type: String,
    match: [
      /[0-9]{1}-[0-9]{3}-[0-9]{3}-[0-9]{4}$/,
      "Phone number must be in the 1-234-567-8903 format",
    ],
  },
  
});

const users = mongoose.model("Users", UserSchema);
module.exports = users;