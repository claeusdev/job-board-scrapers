const fs = require("fs")



const writeToFile = (array) => {
    const objectKeys = Object.keys(array)
    const jobs = []
    const juniorJobs = []
    objectKeys.map(job => {
        jobs.push(array[job])
    })
    jobs.map(job => {
        if (job.title) {
            if (job.title.includes("Junior")) {
                juniorJobs.push(job)
            }
        } else if (job.name.includes("Junior")){
            juniorJobs.push(job)
        }
    })
    // console.log(jobs)
    fs.writeFile("./jobs.json", JSON.stringify(juniorJobs), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("file saved");
    });
}

module.exports =  writeToFile;
