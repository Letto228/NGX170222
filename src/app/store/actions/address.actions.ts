import { createAction } from "@ngrx/store";
import { IAddressState } from "../state/address.state";

enum AddressAtcionTypes {
    AddAddress = '[Address] Add address',
    ResetAddress = '[Address] Reset address',
}

export const addAddress = createAction(
    AddressAtcionTypes.AddAddress,
    (address: IAddressState) => ({address})
) // {address, type: AddressAtcionTypes.AddAddress},

export const resetAddress = createAction(
    AddressAtcionTypes.ResetAddress,
) // {address, type: AddressAtcionTypes.AddAddress},