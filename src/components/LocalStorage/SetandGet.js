
const addToLocalStorage= id =>{
    const jobs = getFromLocalStorage()
    const exist = jobs.find(jobId => jobId === id);
    if (!exist) {
        jobs.push(id);
        setToLocalStorage(JSON.stringify(jobs)); 
    }

}

const getFromLocalStorage = () =>{
    const jobs = localStorage.getItem('jobs');
    return JSON.parse(jobs) || [];
}
const setToLocalStorage = (jobs) =>{
    localStorage.setItem('jobs',jobs);
}

export {addToLocalStorage,getFromLocalStorage,setToLocalStorage};