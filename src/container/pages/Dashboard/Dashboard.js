import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Template from "../../template/";
import { Image1, Image2, Image3, Image4 } from "../../../assets/images/";
import { Card } from "../../../components";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../../firebase";

function Dashboard() {
  const [doctorsData, setDoctorsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(db, "doctors"));

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => doc.data());

        console.log("doctors data", data);
        setDoctorsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Template>
      <div style={{ padding: '20px' }}>
        <span className="titleDashboardArticle">Artikel</span>
        <div id="spaceArticle">
          <div id="large">
            <div className="large-title-article">
              <img src={Image1} alt="Image1" />
              <p>Lebih Rileks Pasca Melahirkan dengan cara ini</p>
            </div>
          </div>
          <div className="small">
            <div className="small-image-article">
              <img src={Image2} alt="Image2" />
            </div>
            <p>Apa itu Baby Blues ?</p>
          </div>
          <div className="small">
            <div className="small-image-article">
              <img src={Image3} alt="Image3" />
            </div>
            <p>
              Kenali ciri ciri baby blues syndrome beserta cara mengatasinya
            </p>
          </div>
          <div className="small">
            <div className="small-image-article">
              <img src={Image4} alt="Image4" />
            </div>
            <p>Apa itu baby blues dan bagaimana cara menanganinya ?</p>
          </div>
        </div>
        <div className="doctor-recommendation">
          <span className="titleDashboardArticle">Rekomendasi Dokter</span>
          <div className="doctor-cards-wrapper">
            <Card data={doctorsData} />
          </div>
        </div>
      </div>
    </Template>
  );
}

export default Dashboard;
