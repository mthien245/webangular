import { Injectable } from '@angular/core';
import { Food } from '../../shared/models/Food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  static getFoodById(id: any): Food {
    throw new Error('Method not implemented.');
  }

  constructor() { }
  getAllFoodsBySearchTerm(searchTerm: string): Food[] {
    return this.getAll().filter(food => 
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }
  getAllTags():Tag[]{
    return [
      {name: 'All', count: 12},
      {name: 'TraSua', count: 5},
      {name: 'ThucUongDaXay', count: 3},
      {name: 'TraTraiCay', count: 3},
      {name: 'ThucUongSangTao', count: 1},
      {name: 'LATTESERIES', count: 1},
    ]
  }
  getAllFoodsByTag(tag: string): Food[] {
    return tag=="All"? 
    this.getAll():
    this.getAll().filter(food=>food.tags?.includes(tag))
  }
  getFoodById(id: number): Food {
    console.log(this.getAll().find(food => food.id == id));
    return this.getAll().find(food => food.id == id)!;
  }
  getAll(): Food[] {
    return [
      {
        id: 0,
        name: 'Okinawa Oreo Cream Milk Tea',
        price: 4.000,
        cookTime: '5-10p',
        imageUrl: '/assets/images/foods/Okinawa-Milk-Foam-Smoothie.png',
        favorite: false,
        tags: ['ThucUongDaXay'],
      },
      {
        id: 1,
        name: 'Okinawa Milk Foam Smoothie',
        price: 3.000,
        cookTime: '10-15p',
        imageUrl: '/assets/images/foods/Okinawa-Oreo-Cream-Milk-Tea.png',
        favorite: false,
        tags: ['ThucUongDaXay'],
      },
      {
        id: 2,
        name: 'Dâu Latte',
        price: 5.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/Strawberry-Earl-grey-latte.png',
        favorite: false, // Add the 'favorite' property
        tags: ['LATTESERIES'],
      },
      {
        id: 3,
        name: 'Grape Milk Tea',
        price: 3.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/5.png',
        favorite: false, 
        tags: ['TraSua'],
      },
      {
        id: 4,
        name: 'Grape Green Tea',
        price: 5.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/1.png',
        favorite: false, // Add the 'favorite' property
        tags: ['ThucUongSangTao'],
      },
      {
        id: 5,
        name: 'Trà Alisan Trái Cây',
        price: 2.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/2.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraTraiCay'],
      },
      {
        id: 6,
        name: 'Chanh Ai-yu và Trân Châu Trắng',
        price: 5.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/3.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraTraiCay'],
      },
      {
        id: 7,
        name: 'Đào Hồng Mận Hạt É',
        price: 4.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/4.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraTraiCay'],
      },
      {
        id: 8,
        name: 'Grape Milk Tea',
        price: 2.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/5.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraSua'],
      },
      {
        id: 9,
        name: 'Trà Sữa Chocolate',
        price: 4.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/6.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraSua'],
      },
      {
        id: 10,
        name: 'Trà Sữa Trân Châu Đen',
        price: 3.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/7.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraSua'],
      },
      {
        id: 11,
        name: 'Trà Sữa Trà Xanh',
        price: 2.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/8.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraSua'],
      },
      {
        id: 11,
        name: 'Trà Sữa Trà Xanh',
        price: 2.000,
        cookTime: '10-20p',
        imageUrl: '/assets/images/foods/8.png',
        favorite: false, // Add the 'favorite' property
        tags: ['TraSua'],
      },
    ]
  }
}
