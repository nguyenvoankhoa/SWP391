import Title from "../../components/Title";
import './ElectronicCleaning.css';
import { Link } from "react-router-dom";
const ElectronicCleaning = () => {
  return (
    <>
      <div className="bg" style={{
        width: "100vw",
        height: "53vh",
        position: "absolute",
        top: "0",
        left: "0",
        backgroundColor: "#397F77",
        zIndex: "-1"
      }} />
      <div className="container" style={{
        paddingLeft: "20vw",
        paddingRight: "0",
        margin: "0",
        height: "100vh",
        marginLeft: "4vw"
      }}>
        <Title
          title="VỆ SINH MÁY LẠNH"
          color="white"
          fontSize="35px"
          fontWeight="700"
          padding="5% 0 0 0"
        />
        <div className="ec-content">
          <div className="row gy-4 pt-5 d-flex">
            <div className="col-sm-6">
              <div className="ec-card">
                <div className="rectangle">
                  <h3 className="ec-title">MÁY LẠNH TREO TƯỜNG</h3>
                </div>
                <div className="ec-card-content">
                  <div className="col-md-6">
                  <button>
                <Link>Dưới 2HP</Link>
              </button>
              <button>
                <Link>Trên 2HP</Link>
              </button>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="ec-card">
                <div className="rectangle">
                  <h3 className="ec-title">MÁY LẠNH ÂM TRẦN</h3>
                </div>
                <div className="ec-card-content">
                  <div className="col-md-6">
                  <button>
                <Link>Dưới 3HP</Link>
              </button>
              <button>
                <Link>Trên 3HP</Link>
              </button>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElectronicCleaning;
