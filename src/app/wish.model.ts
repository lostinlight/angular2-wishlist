export class Wish {

  constructor(public _id: string, public name: string, public date: string, public category: string,
              public isUnlocked: boolean, public isAlpha: boolean, public image: string) {
    this._id = _id;
    this.name = name;
    this.date = date;
    this.category = category;
    this.isUnlocked = isUnlocked;
    this.isAlpha = isAlpha;
    this.image = image;
  }

}
