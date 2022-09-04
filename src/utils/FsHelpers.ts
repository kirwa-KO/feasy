// check is lib folder exist in current directory using fs module
import * as fs from 'fs';
import * as path from 'path';

export const checkIfFolderExistInCurrentDirectory = (folder: string) => {
	return fs.existsSync(`${process.cwd()}/${folder}`);
};