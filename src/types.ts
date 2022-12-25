// интерйес для карты
export type CardStatus = {
    image: string;
    select: boolean;
    done: boolean;
}

//интерфейс для всего поля карт
export type FieldStatus = CardStatus[]
