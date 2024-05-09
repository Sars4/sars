module.exports = async function Home() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="stylesheet" href="styles.css"></link>
        <title>Logan Sarsfield</title>
        <link rel="icon" href="../images/LSico.png" type="image/x-icon"></link>
      </head>
      <body>
        <header class="header">
          <h1 class="name">Logan Sarsfield</h1>
          <p class="tagline"> Computer Science B.S.</p>
        </header>

        <section class="about">
          <h2>About Me</h2>
          <p>My name is Logan Sarsfield, and I am a graduate from Indiana University Bloomington, I majored in computer science with a focus in data science and minored in marketing.
          I 
          </p>
        </section>

        <section class="portfolio">
          <h2>Projects</h2>
          <div class="project">
            <img src="LSico.png" alt="Project 1"></img>
            <h3>Stock Data</h3>
            <p>Description</p>
          </div>
          <div class="project">
            <img src="../images/project2.jpg" alt="Project 2"></img>
            <h3>VEX Manipulation</h3>
            <p>Description</p>
          </div>
        </section>

        <section class="about">
          <h2>  Experience</h2>
          <ul>
            <li><h3>Sales Representitive</h3></li>
            <p class="indent">Description</p>
            <li><h3>Sales Representitive</h3></li>
            <p class="indent">Description</p>
            <li><h3>Sales Representitive</h3></li>
            <p class="indent">Description</p>
          </ul>
        </section>

        <footer class="footer">
          <p>&copy; 2024 Logan Sarsfield. All rights reserved.</p>
        </footer>
      </body>
    </html>
  )
}
