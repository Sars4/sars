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
          <p class="paraText">My name is Logan Sarsfield and I am a graduate from Indiana University Bloomington, I majored in computer science with a focus in data science and minored in marketing.
          I have currently focused in sales related jobs with two internships revolving around this. I find the intersection between data analysis and marketing to be interesting and thus I explored both
          sides of each field. I also have an interest in AI and machine learning, as they both use data to find patterns and make predictions.
          </p>
        </section>

        <section class="portfolio">
          <h2>Projects</h2>
          <div class="project">
            <img src="/project1.png" alt="Project 1"></img>
            <h3>Stock Data</h3>
            <p class="paraText">Description</p>
          </div>
          <div class="project">
            <img src="/project2.jpg" alt="Project 2"></img>
            <h3>VEX Manipulation</h3>
            <p class="paraText">Description</p>
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
          <p>&copy; 2024 Logan Sarsfield. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
