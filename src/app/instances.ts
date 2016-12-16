

interface ItemOption{
    value: string,
    label: string;
}

interface ServersSorting{
    sortBy?: ItemOption,
    sortOrder: string;
}

interface EventUI{
    name: string,
    data: any
}