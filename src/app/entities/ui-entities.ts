

export interface ItemOption{
    value: string,
    label: string;
}

export interface ServersSorting{
    sortBy?: ItemOption,
    sortOrder: string;
}

export interface StatePopup{
   opened: boolean
}