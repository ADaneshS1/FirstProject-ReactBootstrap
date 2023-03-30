import Navigation from "./Navigation"
import Hero from "./Hero"
import Jurusan from "./Jurusan";
import Kegiatan from "./Kegiatan"

import Card1 from './../assets/card1.png';
import Card2 from './../assets/card2.png';
import Card3 from './../assets/card3.png';

import Keg1 from './../assets/kegiatan.png';
import Keg2 from './../assets/kegiatan2.png';
import Keg3 from './../assets/kegiatan3.png';
import Keg4 from './../assets/kegiatan4.png';
import Keg5 from './../assets/kegiatan5.png';

const Main = () => {
    return (
        <div>
            <Navigation/>
            <Hero/>
            
            <div className="container">

                <div className="row">
                
                    <div className="col-12 text-center my-5">
                        <h1>Jurusan Sekolah</h1>
                    </div>  
                    
                </div>
                
                <div className="row justify-content-center g-3">

                    <div className="col-4">
                        <Jurusan image={Card1} judul="Manajemen Sosial"/>
                    </div>

                    <div className="col-4">
                        <Jurusan image={Card2} judul="Jaringan"/>
                    </div>

                    <div className="col-4">
                        <Jurusan image={Card3} judul="Coding"/>
                    </div>

                </div>

                <div className="row">

                    <div className="col-12 text-center my-5">
                        <h1>Kegiatan Sekolah</h1>
                    </div>

                </div>

                <div className="row gap-3 mb-5">

                    <div className="col-12">
                        <Kegiatan image={Keg1} desk="Pertunjukan drama"/>
                    </div>

                    <div className="col-12">
                        <Kegiatan image={Keg2} desk="School trip"/>
                    </div>

                    <div className="col-12">
                        <Kegiatan image={Keg3} desk="Seni"/>
                    </div>

                    <div className="col-12">
                        <Kegiatan image={Keg4} desk="Sepakbola"/>
                    </div>

                    <div className="col-12">
                        <Kegiatan image={Keg5} desk="Ngaji"/>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default Main;
