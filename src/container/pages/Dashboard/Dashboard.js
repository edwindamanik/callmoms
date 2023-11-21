import React from "react"
import './Dashboard.css'
import Template from '../../template/'
import { Image1, Image2, Image3, Image4 } from '../../../assets/images/'

function Dashboard() {
  return (
    <Template>
      <span className="titleDashboardArticle">
        Artikel
      </span>
      <div className="gridArticleNews">
        <div className="landingImage">
          <div className="firstImageWrapper">
            <img src={Image1} alt="Image1" />
          </div>
        </div>
        <div className="sideImageWrapper">
          <div className="nextImageWrapper">
          <img src={Image2} alt="Image2" />
          </div>
          <div className="nextImageWrapper">
          <img src={Image3} alt="Image3" />
          </div>
          <div className="nextImageWrapper">
          <img src={Image4} alt="Image4" />
          </div>
          
          
          
        </div>
      </div>
    </Template>
  )
}

export default Dashboard