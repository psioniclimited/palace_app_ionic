export class Movies {
  id: string;
  name: string;
  file_path: string;

  constructor(id: string,
              name: string,
              file_path: string){
    this.id = id;
    this.name = name;
    this.file_path = file_path;
  }
}
