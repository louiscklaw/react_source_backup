import type { Category, Prompt, Session } from 'types';
import apiService from 'utils/apiService';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface State {
    categories: Category[];
    session?: Session;
    login: (data: { username: string; password: string } | { googleIdToken: string }) => Promise<void>;
    logout: () => Promise<void>;
    loadCategories: () => Promise<void>;
    addCategory: (data: { name: string; description: string; parentCategoryId?: string }) => Promise<void>;
    updateCategory: (categoryId: string, data: { name: string; description: string }) => Promise<void>;
    deleteCategory: (categoryId: string) => Promise<void>;
    addCategoryPrompt: (categoryId: string, prompt: Prompt) => Promise<void>;
    updateCategoryPrompt: (categoryId: string, prompt: Prompt) => Promise<void>;
    deleteCategoryPrompt: (categoryId: string, promptId: string) => Promise<void>;
    getPromptCount: (categoryId: string) => number;
    getCategory: (categoryId: string) => Category | undefined;
}

const useCategoryStore = create<State>()(
    devtools(
        persist(
            (set, get) => ({
                categories: [] as Category[],
                async login(info) {
                    const session = await apiService.post<Session>('/v1/user/login', info);
                    if (!session.userId || !session.role || !session.token) {
                        throw new Error('Session incorrect');
                    }
                    set({ session });
                    window.localStorage.setItem('token', session.token);
                },
                async logout() {
                    if (localStorage) {
                        localStorage.clear();
                    } else if (chrome.storage) {
                        await chrome.storage.local.clear();
                    }
                    set({ session: undefined });
                },
                async loadCategories() {
                    const data = await apiService.get<Category[]>('/v1/prompt/categories');
                    set({ categories: data });
                },
                // async loadPrompts() {
                //     const data = await apiService.get<Prompt[]>('/v1/prompt/prompts');
                //     set({ prompts: data });
                // },
                async addCategory(info) {
                    const data = await apiService.post<Category>('v1/prompt/categories', info);
                    set({ categories: [...get().categories, data] });
                },
                async updateCategory(categoryId, info) {
                    const data = await apiService.put<Category>(`v1/prompt/categories/${categoryId}`, info);
                    set({ categories: get().categories.map((c) => (c.categoryId === categoryId ? data : c)) });
                },
                async deleteCategory(categoryId) {
                    await apiService.delete(`v1/prompt/categories/${categoryId}`);
                    set({ categories: get().categories.filter((c) => c.categoryId !== categoryId) });
                },
                async addCategoryPrompt(categoryId, prompt) {
                    set({
                        categories: get().categories.map((c) =>
                            c.categoryId === categoryId ? { ...c, prompts: [...(c?.prompts || []), prompt] } : c
                        )
                    });
                },
                async updateCategoryPrompt(categoryId, prompt) {
                    set({
                        categories: get().categories.map((c) => {
                            if (c.categoryId === categoryId) {
                                return {
                                    ...c,
                                    prompts: (c?.prompts || []).map((p) =>
                                        p.promptId === prompt.promptId ? prompt : p
                                    )
                                };
                            }
                            return c;
                        })
                    });
                },
                async deleteCategoryPrompt(categoryId, promptId) {
                    set({
                        categories: get().categories.map((c) => {
                            if (c.categoryId === categoryId) {
                                return {
                                    ...c,
                                    prompts: (c?.prompts || []).filter((p) => p.promptId !== promptId)
                                };
                            }
                            return c;
                        })
                    });
                },
                getPromptCount(categoryId) {
                    const { getCategory } = get();
                    const getPromptCount = (id: string): number => {
                        const category = getCategory(id);
                        if (category) {
                            return (
                                (category.prompts?.length || 0) +
                                (category.subCategories?.reduce((sum, c) => sum + getPromptCount(c.categoryId), 0) || 0)
                            );
                        }
                        return 0;
                    };

                    return getPromptCount(categoryId);
                },
                getCategory(categoryId) {
                    const { categories } = get();
                    const category = categories.find((c) => c.categoryId === categoryId);
                    if (category) category.subCategories = categories.filter((c) => c.parentCategoryId === categoryId);
                    return category;
                }
            }),
            { name: 'teamprompt', partialize: ({ session }) => ({ session }) }
        )
    )
);

export default useCategoryStore;
