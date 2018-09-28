import fs from 'fs'
import path from 'path'
import {promisify} from 'util'

const readdir = promisify(fs.readdir)
const stat = promisify(fs.stat)

const getFilepaths = (basePath: string): Promise<string[]> => new Promise( async (resolve, reject) => {
  const files = await readdir(basePath)

  
  // let allFiles: string[] = []
  // const files = await readdir(basePath)
  // if(!files.length) return resolve(allFiles)
  // files.forEach(async file => {
  //   const filePath = path.join(basePath, file)
  //   const stats = await stat(filePath)
  //   if(stats.isDirectory()) {
  //     const directoryFiles = await getFilepaths(filePath)
  //     allFiles = allFiles.concat(directoryFiles)

  //   }
  // })

})
