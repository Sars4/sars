import Image from "next/image"

module.exports = async function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="styles.css"></link>
        <title>Logan Sarsfield</title>
        <link rel="icon" href="/favicon.png" ></link>
      </head>
      <body>
        <header class="header">
          <img src="/LSlogo.png" width={200} height={200} alt=" Blurry Logo"></img>
          <div class="headerText">
            <h1 class="name">Logan Sarsfield </h1>
            <p> Computer Science B.S.</p>
          </div>
        </header>

        <section class="about">
          <h2>About Me</h2>
          <p class="paraText">My name is <b>Logan Sarsfield</b> and I am a graduate from Indiana University Bloomington with a major in computer science concentrated in data science and a minor in marketing.
          Data is something that I find very fascinating and the things that can be interperted from it and the insights that can found in it are what interests me the most. I find the intersection between 
          data analysis/ data science and marketing to be interesting and thus I want to explore both sides of each field. I also have an interest in AI and machine learning, as they both use data to find patterns
           and make predictions based on data, especially since the growth that can be seen from ChatGPT 3.5 to 4.0 and now 4o.
          </p>
        </section>

        <section class="portfolio">
          <h2>Projects</h2>
          <p>These are just two examples of projects that I have worked on, more can be found on my <a href="https://github.com/Sars4?tab=repositories" class="gitLink">github</a>, like the code for this website.</p>
          <a></a>
          <div class="project">
            {/*<img class="projectImg" src="/StockPic.JPG" alt="Project 1"></img>*/}
            <h3>Stock Data</h3>
            <p class="paraText">This project uses yahoo finance to search for stocks by their ticker name and add it to an excel file where it is then read and plotted. It also looks to predict future values by using
            regression and provides other statistics according to what it finds.</p>
            <a class="projectLink" href="https://github.com/Sars4/stockData">See more &#11166;</a>
          </div>
          <div class="project">
            {/* image placeholder: <img src="/project1.png" alt="Project 1"></img> */}
            <h3>VEX Manipulation</h3>
            <p class="paraText">This project uses VEX to create a robotic arm with two joints and autonomously picks up a limited number of cans in a row and throws them behind itself. The project consists of a mechanical design and
            software design in which both had to be built.</p>
            <a class="projectLink" href="https://github.com/Sars4/CanGrabber">See more &#11166;</a>
          </div>
        </section>

        <section class="about">
          <h2>  Experience</h2>
          <ul>
            <li><h3>Sales Representitive - Premier Roofing</h3><p class="date">June 2023 - Aug 2023</p></li>
            <p class="indent">Achieved consistent weekly quotas by effectively prospecting and closing deals in a door-to-door sales environment.<br></br>
            Managed over 10 clients at once and ensured a high-quality service.<br></br>
            Utilized persuasive sales techniques to overcome objections and build a rapport with a diverse range of customers.<br></br>
            Adhered to ethical sales practices and maintained a high level of professionalism in all customer interactions.<br></br>
            </p>
            <li><h3>Merchandise Consultant - Team IP</h3><p class="date">May 2021 - July 2021</p></li>
            <p class="indent">Led independent event location, set-up and break-down, and merchandise inventory.<br></br>
            Recommended products and responsible for all transactions.<br></br>
            Provided customer service and resolved post sale issues.<br></br>
            Represent the company in a professional and courteous manner.<br></br>
            </p>
          </ul>
        </section>

        <footer class="footer">
          <p class="copyright">&copy; 2024 Logan Sarsfield. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
