const Nav = (props) => {
  return (
    <nav>
      <div className="content nav">
        <h2>Week4 ReactJS</h2>
        <div className="menu-icon">
          <i
            className="fas fa-bars"
            id="menuicon"
            onClick={props.toggleMenu}
          ></i>
        </div>
        <ul className="menu-nav">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
        </ul>
      </div>
      {props.visible ? (
        <div className="slidemenu" id="menu-side">
          <li>item1</li>
          <li>item2</li>
          <li>item3</li>
          <li>item4</li>
          <div className="menu-icon">
            <i
              className="fa fa-times"
              id="cross"
              onClick={props.toggleMenu}
            ></i>
          </div>
        </div>
      ) : null}
    </nav>
  );
};

const Banner = (props) => {
  return (
    <div className="banner">
      <h1 className="title" id="hello-title" onClick={props.changeTitle}>
        {props.bannerTitle ? "Hello" : "Have a Good Time!"}
      </h1>
    </div>
  );
};
const Article = (props) => {
  return (
    <article>
      <p className="articleTitle">{props.title}</p>
    </article>
  );
};

const Button = (props) => {
  return (
    <div>
      <div className="callbutton" id="callToAction" onClick={props.addMore}>
        {props.showContent ? "Call to Hide" : "Click to Action"}
      </div>
      {props.showContent ? (
        <div
          className="content box"
          id="addMoreContent"
          style={{ display: props.showContent ? "show" : "none" }}
        >
          <article>
            <p className="articleTitle">Content Box 5</p>
          </article>
          <article>
            <p className="articleTitle">Content Box 6</p>
          </article>
          <article>
            <p className="articleTitle">Content Box 7</p>
          </article>
          <article>
            <p className="articleTitle">Content Box 8</p>
          </article>
        </div>
      ) : null}
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <h3>Terms | Privacy</h3>
      <p>This website is developed by SandyLin</p>
    </footer>
  );
};

class App extends React.Component {
  state = {
    bannerTitle: true,
    showContent: false,
    visible: false,
    article: [
      { title: "Content Box 1", id: 1 },
      { title: "Content Box 2", id: 2 },
      { title: "Content Box 3", id: 3 },
      { title: "Content Box 4", id: 4 },
    ],
  };

  changeTitle = () => {
    this.setState((prevState) => ({
      bannerTitle: !prevState.bannerTitle,
    }));
  };

  addMore = () => {
    this.setState((prevState) => ({
      showContent: !prevState.showContent,
    }));
  };

  toggleMenu = () => {
    this.setState((prevState) => ({
      visible: !prevState.visible,
    }));
  };

  render() {
    return (
      <div>
        <Nav toggleMenu={this.toggleMenu} visible={this.state.visible} />
        <Banner
          changeTitle={this.changeTitle}
          bannerTitle={this.state.bannerTitle}
        />
        <div className="content box">
          {this.state.article.map((article) => (
            <Article title={article.title} key={article.id} />
          ))}
        </div>
        <Button addMore={this.addMore} showContent={this.state.showContent} />
        <Footer />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
