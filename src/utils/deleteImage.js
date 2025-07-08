const fs=require("fs")
const path=require("path")

 function deleteImage(filename) {
  const filePath = path.join(__dirname, '../../uploads', filename);



  console.log("thisi is file path",filePath)


  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error deleting file:', err);
    } else {
      console.log('File deleted:', filename);
    }
  });
}


module.exports={
    deleteImage
}