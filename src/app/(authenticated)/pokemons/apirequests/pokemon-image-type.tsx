import { StaticImageData } from 'next/image'

import dark from '../../../../../public/dark.png'
import desert from '../../../../../public/desert.png'
import dragon from '../../../../../public/dragon.png'
import fire from '../../../../../public/fire.png'
import ghost from '../../../../../public/ghost.png'
import grass from '../../../../../public/grass-general.png'
import ice from '../../../../../public/ice.png'
import poison from '../../../../../public/poison.png'
import psychic from '../../../../../public/psychic.png'
import water from '../../../../../public/water.png'

export enum PokemonType {
  GRASS = 'grass',
  WATER = 'water',
  FIRE = 'fire',
  PSYCHIC = 'psychic',
  GHOST = 'ghost',
  ROCK = 'rock',
  GROUND = 'ground',
  POISON = 'poison',
  DARK = 'dark',
  ICE = 'ice',
  DRAGON = 'dragon'
}

export const typeImages: Record<PokemonType, StaticImageData> = {
  [PokemonType.GRASS]: grass,
  [PokemonType.FIRE]: fire,
  [PokemonType.WATER]: water,
  [PokemonType.PSYCHIC]: psychic,
  [PokemonType.GHOST]: ghost,
  [PokemonType.ROCK]: desert,
  [PokemonType.GROUND]: desert,
  [PokemonType.POISON]: poison,
  [PokemonType.ICE]: ice,
  [PokemonType.DARK]: dark,
  [PokemonType.DRAGON]: dragon
  // [PokemonType.NORMAL]: normal,
  // [PokemonType.ELECTRICT]: electric,
  // [PokemonType.FIGHTING]: fighting,
  // [PokemonType.FLYING]: flying,
  // [PokemonType.BUG]: bug,
  // [PokemonType.STEEL]: steel,
  // [PokemonType.FAIRY]: fairy,
  // [PokemonType.STELLAR]: stellar
}

export const defaultImage: StaticImageData = grass
