const mongoose = require('mongoose');
const uri = process.env.MONGODB_URL;
main().catch(err => console.log(err));

async function main() {
    
  await mongoose.connect(uri);

}




