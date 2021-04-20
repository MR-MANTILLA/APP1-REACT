import React from "react";
import "../App.css"

onst anio = new Date().getFullYear();
class footer extends React.Component{
  render() {
    return(
    <footer class="Footer">
      <div>
        <p>&copy;iser {anio}-1</p>
      </div>
    </footer>
    );
  }
}
export default footer;
