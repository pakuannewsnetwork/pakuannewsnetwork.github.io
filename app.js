(() => {
  const Link = ReactRouterDOM.Link;
  const Route = ReactRouterDOM.Route;

  const app = {
    view: () => (
      <ReactRouterDOM.HashRouter>
        <Route path="/" exact component={main.view} />
      </ReactRouterDOM.HashRouter>
    ),
  };
  document.title = "PNN - Berita Terkini Indonesia";
  ReactDOM.render(<app.view />, document.getElementById("root"));

  var loadJS = function (url, location) {
    //url is URL of external file, implementationCode is the code
    //to be called from the file, location is the location to
    //insert the <script> element

    var scriptTag = document.createElement("script");
    scriptTag.src = url;

    // scriptTag.onload = implementationCode;
    // scriptTag.onreadystatechange = implementationCode;

    location.appendChild(scriptTag);
  };
  loadJS("theme/html5up-editorial/assets/js/util.js", document.body);
  loadJS("theme/html5up-editorial/assets/js/main.js", document.body);
  document.body.style.backgroundColor = "black";

  // const yaml = jsyaml.dump(mainState);
  // const dataStr = "data:text/yaml;charset=utf-8," + encodeURIComponent(yaml);
  // const dlAnchorElem = document.createElement("a");
  // dlAnchorElem.setAttribute("href", dataStr);
  // dlAnchorElem.setAttribute("download", `pnn.yaml`);
  // dlAnchorElem.click();
  // dlAnchorElem.remove();
})();
