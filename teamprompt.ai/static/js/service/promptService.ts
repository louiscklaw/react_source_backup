import type { Prompt, PromptInfo } from 'types';
import apiService from 'utils/apiService';

export const getPrompts = async (query) => {
    const prompt = await apiService.get<Prompt[]>(`/v1/prompt/prompts`, query);
    return prompt;
};

export const getPrompt = async (promptId: string) => {
    if (!promptId) throw new Error('Prompt id not found');
    const prompt = await apiService.get<Prompt>(`/v1/prompt/prompts/${promptId}`);
    return prompt;
};

export const addPrompt = async (data: PromptInfo) => {
    const prompt = await apiService.post<Prompt>(`/v1/prompt/prompts`, data);
    return prompt;
};

export const updatePrompt = async (promptId: string, data: PromptInfo) => {
    if (!promptId) throw new Error('Prompt id not found');
    const prompt = await apiService.put<Prompt>(`/v1/prompt/prompts/${promptId}`, data);
    return prompt;
};

export const deletePrompt = async (promptId: string) => {
    if (!promptId) throw new Error('Prompt id not found');
    await apiService.delete<Prompt>(`/v1/prompt/prompts/${promptId}`);
};

export const applyPrompt = async (promptId: string, data: { inputs: Record<string, string> }) => {
    const response = await apiService.post<{ prompt: Prompt; output: string }>(
        `/v1/prompt/prompts/${promptId}/_apply`,
        data
    );
    return response.output;
};

export const likePrompt = async (promptId: string) => {
    const prompt = await apiService.put<Prompt>(`/v1/prompt/prompts/${promptId}/likes`);
    return prompt;
};

export const unlikePrompt = async (promptId: string) => {
    const prompt = await apiService.delete<Prompt>(`/v1/prompt/prompts/${promptId}/likes`);
    return prompt;
};

export const searchPrompt = async (keyword: string) => {
    const prompts = await apiService.get<Prompt[]>('/v1/prompt/prompts', { highlight: true, keyword });
    return prompts;
};
