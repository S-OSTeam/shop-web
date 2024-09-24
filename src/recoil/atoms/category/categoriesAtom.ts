import { atom } from 'recoil';
import { EmptyCategoryTreeResponse, ItemCategoryTreeResponse } from '@interface/category/Category';

const categoriesAtom = atom<ItemCategoryTreeResponse[]>({
    key: 'categories',
    default: EmptyCategoryTreeResponse,
});

export default categoriesAtom;
