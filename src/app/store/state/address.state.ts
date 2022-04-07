export interface IAddressState {
    contry: string;
    street: string;
    homeInfo: {
        number: string;
        block: string;
    };
}

export const addressInitialState: IAddressState = {
    contry: '',
    street: '',
    homeInfo: {
        number: '',
        block: '',
    },
}