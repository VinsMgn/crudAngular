export class Festival {
    id?: number;
    artiste?: string;
    scene?: string;
    style?: string;
    date?: Date;
    heure?: number;
    image?: string;

    constructor(public artiste: string, public scene: string, public style: string) {
        this.artiste = artiste;
        this.scene = scene;
        this.style = style;
    }
  
}