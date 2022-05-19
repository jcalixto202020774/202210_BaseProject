import { Band } from "./band";
import { Song } from "./song";

export class BandDetail extends Band {
  songs: Array<Song>;

  public constructor(id: number,
    name: string,
     numberOfMembers: number,
     description: string,
     image: string,
     songs: Array<Song>){
       super(id, name, numberOfMembers,description,image);
       this.songs = songs;

     }

}
