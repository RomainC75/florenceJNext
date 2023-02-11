export interface RawImageInterface{
    data:{
        imageIdConvertorCollection:{
            items:
                ImageInterface[]
        }
    }
}

export interface ImageInterface{
    title:string,
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

export interface ImageIdConvertorInterface{
    name:string;
    imageId: string
}



