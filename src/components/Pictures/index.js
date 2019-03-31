import React, {Component} from "react";
import images from "./pictures";
import "./style.css";

class Pictures extends Component {

  state= {
    images: images
  };

  // componentDidMount() {
  //   this.setState({
  //     images: images
  //   })
  // };

  onImageClick = event => {

    const selectedImage = event.target;
    const selectedImageValue = event.target.attributes.getNamedItem("data-picked").value;
    console.log('TCL: Pictures -> selectedImageValue', selectedImageValue);

    if(selectedImageValue === "false") {

      event.target.setAttribute("data-picked", true);
      console.log(selectedImage);

      this.setState({
            images: this.state.images.sort(() => Math.random() -0.5)
          });


    } else if (selectedImageValue === "true") {

      console.log("set as true");
    }

    // setTimeout(
    // (
    //   this.setState({
    //     images: this.state.images.sort(() => Math.random() -0.5)
    //   })
    // ), 2000)

  };


  render() {
    this.state.images.sort(() => Math.random() -0.5)

    return (
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="image-container">

            {this.state.images.map(result=> (
              <div className="image-wrapper m-4" key={this.state.images.indexOf(result)}>
                <img onClick={this.onImageClick} alt={result.name} src={result.src} data-picked={false} className="img-thumbnail m-1" />
              </div>
              ))}

          </div>
        </div>
      </div>
    )
  }
}

export default Pictures;