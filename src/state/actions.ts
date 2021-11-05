export function nextQuestion(payload) {
    return {
        type: '@/NEXT_QUESTION',
        payload,
    }
}