const nodeList = document.querySelectorAll('section#education ol li');
const arrayList = Array.from(nodeList).map(x => x.textContent);

const master_filter = arrayList.filter(x => x.includes('Master'));

console.log(`master_filter: ${master_filter}`);