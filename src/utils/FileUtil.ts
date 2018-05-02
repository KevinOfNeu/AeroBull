const PATH = '__dirname/../media'

const getAudioPath:(fileName:string) => string = function (fileName:string):string {
    return `${PATH}/${fileName}`
}

export {getAudioPath}