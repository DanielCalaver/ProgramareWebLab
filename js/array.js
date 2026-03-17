const nodeList = document.querySelectorAll('section#education ol li');
const arrayList = Array.from(nodeList).map(x => x.textContent);
console.log(arrayList);

const master_filter = arrayList.filter(x => x.includes('Master'));
const liceu_filter = arrayList.filter(x => x.includes('Liceu'));
const primul_cuvant = arrayList.map(x => x.split(' ')[0]);
const ultimul_cuvant = arrayList.map(x => { const words = x.split(' '); return words[words.length - 1]; });
const primul_an = ultimul_cuvant.map(x => x.split('-')[0]);
const doilea_an = ultimul_cuvant.map(x => x.split('-')[1]);

console.log(`master_filter: ${master_filter}`);
console.log(`liceu_filter: ${liceu_filter}`);
console.log(`primul_cuvant: ${primul_cuvant}`);
console.log(`ultimul_cuvant: ${ultimul_cuvant}`);
console.log('PRIMUL AN: ' + primul_an);
console.log('AL 2-LEA AN: ' + doilea_an);

const totalAni = primul_an.reduce((sum, an, i) => {
    const start = parseInt(an);
    const end = isNaN(parseInt(doilea_an[i])) ? 2026 : parseInt(doilea_an[i]);
    return sum + (end - start);
}, 0);
console.log('Total ani de studiu: ' + totalAni);

// const projects = [
//     {'name': 'Calendar', 'tech':'HTML/CSS/JS', 'done':'False'},
//     {'name': 'Calculator', 'tech':'HTML/CSS/JS', 'done':'False'},
//     {'name': 'Prezentation', 'tech':'HTML/CSS', 'done':'True'},
//     {'name': 'Interractive Interface', 'tech':'HTML/CSS/JS', 'done':'True'},
// ];

async function loadProjects() {
    try {
        const response = await fetch('data/projects.json');
        const projects = await response.json();

        const projectSection = document.querySelector('section#projects');
        const listaHTML = '<ul>' + projects.map(p => `<li>${p.name} - ${p.tech} (${p.done === 'True' ? 'Finalizat' : 'In progres'})</li>`).join('') + '</ul>';
        const finalizate = projects.filter(p => p.done === 'True').length;
        projectSection.innerHTML += listaHTML + `<p>Finalizate: ${finalizate} din ${projects.length}</p>`;
    } catch (error) {
        console.error('Eroare la incarcarea proiectelor:', error);
    }
}

loadProjects();