export class Band {
  id: number;
  name: string;
  numberOfMembers: number;
  description: string;
  image: string;

  public constructor(id: number,
     name: string,
      numberOfMembers: number,
      description: string,
      image: string){
    this.id = id;
    this.name = name;
    this.numberOfMembers = numberOfMembers;
    this.description = description;
    this.image = image;
  }
}
