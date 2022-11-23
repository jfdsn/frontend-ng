

type dataType = {
    id: number;
    value: string;
    debitedAccountId: number;
    creditedAccountId: number;
    created_at: string;
};

export const dataHandle = (data: Array<dataType>) => {
    return data.map(r => ({...r,
            value: "R$ "+r.value.split('.').join(','),
            created_at: r.created_at.split('-').reverse().join('/'),
        }));
};