const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs")

async function remoteScraper() {
    console.log("Scraper initialized ....\n");
    // box will contain all your data
    const box = [];
    // get markup
    console.log("fetching markup from We Work Remotely\n");
    const response = await axios.get("https://weworkremotely.com");
    const html = response.data;
    // pass html to cheerio
    console.log("markup returned, parsing ,,,,,");
    const $ = cheerio.load(html);

    $("li").each(function(x,y) {
        box.push({
            link: $(this).find("a").attr("href"),
            title: $(this).find(".title").text(),
            company: $(this).find(".company").text(),
            date: $(this).find(".date").text()
        })
    })
    
    fs.writeFile("./wework.json", JSON.stringify(box), (err) => {
        if (err) {
            console.error(err);
            return;
        };
        console.log("File has been created");
    });
    return box

    
}

// run code 
remoteScraper()
    .catch(e => console.log(e))


