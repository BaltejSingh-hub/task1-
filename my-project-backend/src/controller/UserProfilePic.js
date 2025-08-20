const { UsersModel } = require("../model/schema");
const multer = require("multer");

// localhost:3001/welcome/editProfilePic
// Method: POST
const EditProfilePic = (req, res) => {
  
  
  // define multer storage here
  const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "src/uploads"); // save in src/uploads
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    }
  });

  // Main point
  const upload = multer({ 
    storage: storage,
    limits:{fileSize:5*1024*1024}
  }).single("avatar");
  
  // run multer manually
  upload(req, res, async function (err) {
    try {
      if (err) {
        console.log("Multer error:", err);
        return res.status(500).json({ msg: "File upload error" });
      }

      if (!req.file) {
        return res.status(400).json({ msg: "No file uploaded" });
      }

      
      const img_path = req.file.path;
      const userId = req.user.userId;

      await UsersModel.findByIdAndUpdate(userId, { avatar: img_path });

      return res.status(200).json({
        msg: "Picture uploaded successfully",
        path: img_path
      });
    } catch (err) {
      console.log("err", err);
      return res.status(500).json({ msg: "Server error" });
    }
  });
};

module.exports = { EditProfilePic };
