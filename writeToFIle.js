const fs = require("fs")



const writeToFile = (array) => {
    const objectKeys = Object.keys(array)

    const jobs = []

    objectKeys.map(job => {
        jobs.push(array[job])
    })

    const juniorJobs = []

    jobs.map(job => {
        if (job.title.includes("Junior")) {
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
