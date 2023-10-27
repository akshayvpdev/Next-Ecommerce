import mongoose from "mongoose";
module.exports.connect = async () => {
  try {
    const uri = process.env.DB_URL;
    mongoose.set('strictQuery', false);
    mongoose
      .connect(
        uri,
        { dbName: process.env.DB_NAME },
        { useNewUrlParser: true, useUnifiedTopology: true }
      )
      .then(() => {
        console.log(`Connected to the database ${process.env.DB_NAME}`);
      });

    const user = await User.findOne({ role: 'super_admin' }).catch((err) => {
      console.error('Error connecting to the database:', err);
    });
    if (!user) {
      await User({
        username: 'superadmin@gmail.com',
        password: 'superadmin@123',
        role: 'super_admin',
      })
        .save()
        .catch((err) => {
          console.error('Error connecting to the database:', err);
        });
    }
  } catch (error) {
    console.log('Database connection error \n', error);
    return false;
  }
};