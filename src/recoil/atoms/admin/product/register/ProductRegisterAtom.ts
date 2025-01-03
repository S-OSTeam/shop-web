import { atom } from 'recoil';
import { ProductRegiterItemResponse } from '@interface/button/admin/product/register/ProductRegisterInterface';
import { INITIAL_PRODUCT_STATE } from '@util/common/admin/product/ProductStateSetup';

export const productRegisterAtom = atom<ProductRegiterItemResponse>({
    key: 'productRegisterAtom',
    default: INITIAL_PRODUCT_STATE,
});
