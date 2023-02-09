export interface ImageInterface{
    url:string,
    details:{
        size: number,
        image:{
            width:number,
            height:number
        }
    },
    fileName:string,
    contentType:string
}