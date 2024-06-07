export class Food{
    id!: number;
    name!: string;
    price!: number;
    tags?: string[];
    favorite: boolean = false;
    imageUrl!: string;
    cookTime!: string;
}