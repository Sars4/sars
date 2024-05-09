
export default async function Home() {
  return (
    <html lang="en">
<head>
  <meta charset="UTF-8"></meta>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
  <link rel="stylesheet" href="styles.css"></link>
  <title>Logan Sarsfield</title>
</head>
<body>
  <header class="header">
    <h1 class="name">Logan Sarsfield</h1>
    <p class="tagline"> Major in Computer Science</p>
  </header>

  <section class="about">
    <h2>About Me</h2>
    <p>My name is Logan Sarsfield, and I am a graduate from Indiana University Bloomington, majoring in computer science with a focus in data science, and minoring in marketing.
        I </p>
  </section>

  <section class="portfolio">
    <h2>Portfolio</h2>
    <div class="project">
      <img src="project1.jpg" alt="Project 1"></img>
      <h3>Project 1</h3>
      <p>Description</p>
    </div>
    <div class="project">
      <img src="project2.jpg" alt="Project 2"></img>
      <h3>Project 2</h3>
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
