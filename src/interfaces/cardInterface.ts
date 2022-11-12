export interface cardItem {
    id: string,
    name: string,
    supertype: string,
    subtypes: string[],
    level: number,
    hp: number,
    types: string[],
    evolvesFrom: string,
    abilities: abilities,
    attacks: attack,
    weaknesses: weaknesses,
    resistances: resistances,
    retreatCost: string[],
    convertedRetreatCost: number,
    set: {
        id: string,
        name: string,
        series: string,
        printedTotal: number,
        total: number,
        legalities: {
            unlimited: string
        },
        releaseDate: string,
        updatedAt: string,
        images: {
            symbol: string,
            logo: string
        }
    }
    number: string,
    artist: string,
    rarity: string,
    flavorText: string,
    nationalPokedexNumbers: string[],
    images: {
        small: string,
        large: string 
    },
    legalities: {
        unlimited: string
    },
    tcgplayer: tcgplayer,
    cardmarket: cardmarket
  }


  interface abilities {
    name: string,
    text: string,
    type: string
  }

  interface attack {
      name: string,
      cost: string[],
      convertedEnergyCost: string,
      damage: string,
      text: string
  }

  interface weaknesses {
      type: string,
      value:string
  }

  interface resistances {
      type: string,
      value: string
  }

  interface tcgplayer {
      url: string,
      updatedAt: string,
      prices: {
          normal: {
              low: number,
              mid:number,
              high:number,
              market: number
          }
      }
  }

  interface cardmarket {
      url: string,
      updatedAt: string,
      prices: {
        lowPrice: number,
        trendPrice: number,
        reverseHoloTrend: number,
        lowPriceExPlus: number,
        avg1: number,
        avg7: number,
        avg30: number
  }
  }
