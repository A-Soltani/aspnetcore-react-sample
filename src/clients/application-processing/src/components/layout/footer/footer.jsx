import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="bg-light text-center text-lg-start">
        <div class="text-center p-3">
          © 2020 Copyright:
          <a class="text-dark" href="https://mdbootstrap.com/">
            MDBootstrap.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
