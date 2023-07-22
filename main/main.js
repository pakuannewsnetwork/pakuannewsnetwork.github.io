const main = {
  view: () => {
    return (
      <div id="wrapper">
        <div id="main">
          <div className="inner">
            <header
              id="header"
              style={{ borderBottom: "solid 5px rgb(20, 188, 197)" }}
            >
              <a href="index.html" className="logo" style={{ color: "white" }}>
                <strong style={{ color: "rgb(20, 188, 197)" }}>
                  {mainState.app.name}
                </strong>{" "}
                {mainState.app.subName}
              </a>
              <ul className="icons">
                <li>
                  <a href="#" className="icon brands fa-twitter">
                    <span className="label">Twitter</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-facebook-f">
                    <span className="label">Facebook</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-snapchat-ghost">
                    <span className="label">Snapchat</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-instagram">
                    <span className="label">Instagram</span>
                  </a>
                </li>
                <li>
                  <a href="#" className="icon brands fa-medium-m">
                    <span className="label">Medium</span>
                  </a>
                </li>
              </ul>
            </header>
            <section id="banner" style={{ display: "none" }}>
              <div className="content">
                <header>
                  <h1>
                    Hi, I’m Editorial
                    <br />
                    by HTML5 UP
                  </h1>
                  <p>A free and fully responsive site template</p>
                </header>
                <p>
                  Aenean ornare velit lacus, ac varius enim ullamcorper eu.
                  Proin aliquam facilisis ante interdum congue. Integer mollis,
                  nisl amet convallis, porttitor magna ullamcorper, amet egestas
                  mauris. Ut magna finibus nisi nec lacinia. Nam maximus erat id
                  euismod egestas. Pellentesque sapien ac quam. Lorem ipsum
                  dolor sit nullam.
                </p>
                <ul className="actions">
                  <li>
                    <a href="#" className="button big">
                      Learn More
                    </a>
                  </li>
                </ul>
              </div>
              <span className="image object">
                <img src="images/pic10.jpg" alt="" />
              </span>
            </section>
            <section style={{ display: "none" }}>
              <header className="major">
                <h2>Erat lacinia</h2>
              </header>
              <div className="features">
                <article>
                  <span className="icon fa-gem"></span>
                  <div className="content">
                    <h3>Portitor ullamcorper</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                  </div>
                </article>
                <article>
                  <span className="icon solid fa-paper-plane"></span>
                  <div className="content">
                    <h3>Sapien veroeros</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                  </div>
                </article>
                <article>
                  <span className="icon solid fa-rocket"></span>
                  <div className="content">
                    <h3>Quam lorem ipsum</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                  </div>
                </article>
                <article>
                  <span className="icon solid fa-signal"></span>
                  <div className="content">
                    <h3>Sed magna finibus</h3>
                    <p>
                      Aenean ornare velit lacus, ac varius enim lorem
                      ullamcorper dolore. Proin aliquam facilisis ante interdum.
                      Sed nulla amet lorem feugiat tempus aliquam.
                    </p>
                  </div>
                </article>
              </div>
            </section>
            <section>
              <header className="major">
                <h2
                  style={{
                    color: "rgb(20, 188, 197)",
                    borderBottom: "solid 5px rgb(20, 188, 197)",
                  }}
                >
                  Berita Utama
                </h2>
              </header>
              <div className="posts">
                {mainState.article.map(({ name, description, image }, i) => (
                  <article key={i}>
                    <a href="#" className="image">
                      <img src={image} alt="" />
                    </a>
                    <h3 style={{ color: "rgb(20, 188, 197)" }}>{name.id}</h3>
                    <p style={{ color: "white" }}>{description.id}</p>
                    <ul className="actions" style={{ display: "none" }}>
                      <li>
                        <a href="#" className="button">
                          More
                        </a>
                      </li>
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div id="sidebar" style={{ backgroundColor: "#141414" }}>
          <div className="inner">
            <section
              id="search"
              className="alt"
              style={{ backgroundColor: "#141414" }}
            >
              <form method="post" action="#">
                <input
                  type="text"
                  name="query"
                  id="query"
                  placeholder="Search"
                />
              </form>
            </section>
            <nav id="menu">
              <header className="major">
                <h2
                  style={{
                    color: "rgb(20, 188, 197)",
                    borderBottom: "solid 3px rgb(20, 188, 197)",
                  }}
                >
                  {mainState.app.name}
                </h2>
              </header>
              <ul style={{ display: "none" }}>
                <li>
                  <a href="index.html">Homepage</a>
                </li>
                <li>
                  <a href="generic.html">Generic</a>
                </li>
                <li>
                  <a href="elements.html">Elements</a>
                </li>
                <li>
                  <span className="opener">Submenu</span>
                  <ul>
                    <li>
                      <a href="#">Lorem Dolor</a>
                    </li>
                    <li>
                      <a href="#">Ipsum Adipiscing</a>
                    </li>
                    <li>
                      <a href="#">Tempus Magna</a>
                    </li>
                    <li>
                      <a href="#">Feugiat Veroeros</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Etiam Dolore</a>
                </li>
                <li>
                  <a href="#">Adipiscing</a>
                </li>
                <li>
                  <span className="opener">Another Submenu</span>
                  <ul>
                    <li>
                      <a href="#">Lorem Dolor</a>
                    </li>
                    <li>
                      <a href="#">Ipsum Adipiscing</a>
                    </li>
                    <li>
                      <a href="#">Tempus Magna</a>
                    </li>
                    <li>
                      <a href="#">Feugiat Veroeros</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Maximus Erat</a>
                </li>
                <li>
                  <a href="#">Sapien Mauris</a>
                </li>
                <li>
                  <a href="#">Amet Lacinia</a>
                </li>
              </ul>
            </nav>
            <section style={{ display: "none" }}>
              <header className="major">
                <h2>Ante interdum</h2>
              </header>
              <div className="mini-posts">
                <article>
                  <a href="#" className="image">
                    <img src="images/pic07.jpg" alt="" />
                  </a>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore aliquam.
                  </p>
                </article>
                <article>
                  <a href="#" className="image">
                    <img src="images/pic08.jpg" alt="" />
                  </a>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore aliquam.
                  </p>
                </article>
                <article>
                  <a href="#" className="image">
                    <img src="images/pic09.jpg" alt="" />
                  </a>
                  <p>
                    Aenean ornare velit lacus, ac varius enim lorem ullamcorper
                    dolore aliquam.
                  </p>
                </article>
              </div>
              <ul className="actions">
                <li>
                  <a href="#" className="button">
                    More
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <header className="major">
                <h2
                  style={{
                    color: "rgb(20, 188, 197)",
                    borderBottom: "solid 3px rgb(20, 188, 197)",
                  }}
                >
                  Tentang Kami
                </h2>
              </header>
              <p style={{ color: "white" }}>
                PNN (Pakuan News Network) adalah sebuah portal berita yang
                menyajikan berita terkini di Indonesia.
              </p>
              <ul className="contact">
                <li className="icon solid fa-envelope">
                  <a
                    href={`mailto:${mainState.app.email}`}
                    style={{ color: "rgb(20, 188, 197)" }}
                  >
                    {mainState.app.email}
                  </a>
                </li>
                <li className="icon solid fa-phone" style={{ display: "none" }}>
                  (000) 000-0000
                </li>
                <li className="icon solid fa-home" style={{ display: "none" }}>
                  1234 Somewhere Road #8254
                  <br />
                  Nashville, TN 00000-0000
                </li>
              </ul>
            </section>
            <footer id="footer">
              <p className="copyright" style={{ color: "rgb(20, 188, 197)" }}>
                &copy; {mainState.app.name}.
              </p>
            </footer>
          </div>
        </div>
      </div>
    );
  },
};
