export interface IPokemonName {
    name: string;
}
export interface IAbility {
    ability: {
      name: string;
    };
  }
  
export interface IMove {
    move: {
      name: string;
    };
  }
  
export interface IStat {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
    };
  }
  
export interface IType {
    type: {
      name: string;
    };
  }
  
export interface ApiResponse {
    id:string;
    abilities: IAbility[];
    moves: IMove[];
    stats: IStat[];
    types: IType[];
    base_experience: number;
    height: number;
    weight: number;
    sprites: {
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
  }
  