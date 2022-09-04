// check is lib folder exist in current directory using fs module
import * as fs from 'fs';
export var checkIfFolderExistInCurrentDirectory = function (folder) {
    return fs.existsSync("".concat(process.cwd(), "/").concat(folder));
};
