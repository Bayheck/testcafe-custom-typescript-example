const fs = require('fs');
const path = require('path');

const deleteJSFiles = function (folderPath) {
  if (fs.existsSync(folderPath)) {
    fs.readdirSync(folderPath).forEach((file) => {
      const currentPath = path.join(folderPath, file);
      const fileExt = path.extname(currentPath);

      if (fs.lstatSync(currentPath).isFile() && 
         (fileExt === '.js' || fileExt === '.map')) {
            fs.unlinkSync(currentPath);
      }
    });
  }
};

const distPath = path.join(__dirname, 'tests')
deleteJSFiles(distPath);
