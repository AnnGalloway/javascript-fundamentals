const cohort1 = {
    name: 'Jan2024',
    id: 1234,
    names: ['Ann', 'Sophie', 'Holly', 'Tom', 'Josh']
}

const cohortDetails = (cohort) => {
    return `${cohort.id} - ${cohort.name} - ${cohort.names.length} in this cohort`
}

console.log(cohortDetails(cohort1));