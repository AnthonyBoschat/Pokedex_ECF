export const stringNormalize = (string) => {
    return string.trim().replace(/\s+/g, '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}