import React, { Component } from "react";

class Footer extends Component {
  state = {};
  render() {
    return (
      <footer class="bg-dark text-center text-white">
        <div class="text-center text-white p-3">
          © 2020 Copyright:
          <a class="text-white" href="#">
            ap.com
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
