import React, {Component} from "react";
import images from "./pictures";
import "./style.css";

class Pictures extends Component {

  state= {
    images: []
  };

  componentDidMount() {
    this.setState({
      images: images
    })
  };

  render() {
    this.state.images.sort(() => Math.random() -0.5)

    return (
      <div className="container">
        <div className="row justify-content-sm-center">
          <div className="image-container">
  

                {this.state.images.map(result=> (
                  <div className="image-wrapper m-4" key={result.toString()}>
                    <img alt={result.name} src={result.src} className="img-thumbnail m-1" />
                  </div>
                  ))}

          </div>
        </div>
      </div>
    )
  }
}

export default Pictures;