
export interface GiphyResult {
    data: Array<GiphyData>;
  }
  
 export interface GiphyData {
   title:string,
  images: {
      fixed_width: {
        url: string;
      },
      original:{
        url:string;
      },
      fixed_height:{
        url:string;
      }
    };
  } 