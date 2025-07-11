export function normalize(str) {
    return str.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  
  export function deduplicate(array) {
    return [...new Set(array)];
  }
  
  export function sortAlpha(array) {
    return array.slice().sort((a, b) => a.localeCompare(b));
  }
  