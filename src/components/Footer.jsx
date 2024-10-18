/* eslint-disable no-unused-vars */
import React from "react";
import { Grid, Box, Typography, IconButton } from "@mui/material";
import img1 from "../assets/ikinciyeni-logo.svg";
import appstore from "../assets/appstore.jpg";
import googleplay from "../assets/googleplay.jpg";
import anadolu from "../assets/anadolugrubu.png";
import pay1 from "../assets/pay1.jpg";
import pay2 from "../assets/pay2.jpg";
import pay3 from "../assets/pay3.jpg";
import pay4 from "../assets/pay4.jpg";
import {
  Facebook,
  Instagram,
  Twitter,
  LinkedIn,
  YouTube,
} from "@mui/icons-material";

export default function Footer() {
  return (
    <>
      <div className="footerContainer">
        <div className="top">
          <img src={img1} alt="" style={{ width: 195, height: 60 }} />
          <div className="icons">
            <IconButton>
              <Facebook />
            </IconButton>
            <IconButton>
              <Instagram />
            </IconButton>
            <IconButton>
              <Twitter />
            </IconButton>
            <IconButton>
              <LinkedIn />
            </IconButton>
            <IconButton>
              <YouTube />
            </IconButton>
          </div>
        </div>
        <hr />
        <div className="content">
          <div style={{ padding: "5px", borderRight: "1px solid gray" }}>
            <p>Hakkımızda</p>
            <p> Bayilerimiz</p>
            <p>Carwizz Bayilik Başvuru Formu</p>
            <p>Ekspertiz Noktalarımız</p>
            <p>Blog</p>
            <p>İletişim</p>
          </div>
          <div
            style={{
              marginLeft: "20px",
              borderRight: "1px solid gray",
              padding: "5px",
            }}
          >
            <h3>Sıkça Sorulan Sorular</h3>
            <p>Çekiliş Kampanyası</p>
            <p>Sadakat Programı Nedir ?</p>
            <p>Alıcı Hizmet Bedeli Nedir ?</p>
            <p>Kolay Satın Alma Süreci Nedir?</p>
            <p>Açık Artırma ile Nasıl Araç Alabilirim?</p>
            <p>ikinciyeni.com Ekspertiz Süreci</p>
          </div>
          <div
            style={{
              marginLeft: "20px",
              borderRight: "1px solid gray",
              padding: "5px",
            }}
          >
            <h3>En Çok Merak Edilenler</h3>
            <p>2023 MTV Ücretleri Ne Kadar?</p>
            <p>Togg&apos;dan Yeni Bir Çözüm: Trugo Şarj İstasyonları</p>
            <p>Elektrikli Araba Motoru Nasıl Çalışır?</p>
            <p>Kolay Satın Alma Süreci Nedir?</p>
            <p>Elektrikli Otomobil Almadan Önce Bilinmesi Gerekenler</p>
            <p>Yurt Dışından Araba Getirtmek Hakkında Merak Edilenler</p>
          </div>
          <div
            style={{
              borderRight: "1px solid gray",
              padding: "15px",
            }}
          >
            <h3>Hızlı Linkler</h3>
            <p>İkinci El Araba Al</p>
            <p>Araba Sat</p>
            <p>Araba Açık Artırmaları</p>
            <p>Mobil Ekspertiz</p>
            <p>Lojistik</p>
          </div>
          <div style={{}}>
            <h3>Şehirler</h3>
            <p>İstanbul Araç Al</p>
            <p>Ankara Araç Al</p>
            <p>İzmir Araç Al</p>
            <p>Antalya Araç Al</p>
            <p>Adana Araç Al</p>
          </div>
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <h2 style={{ fontSize: "16px" }}>Mobil Uygulamamızı Denedin mi? </h2>
          <p>Sana özel kampanyalardan yararlanmak için hemen indir!</p>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img style={{ width: 106, height: 32 }} src={appstore} alt="" />
          <img style={{ width: 106, height: 32 }} src={googleplay} alt="" />
        </div>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <img src={anadolu} alt="" />
          <p style={{alignSelf:'flex-end'}}>&copy; Emir Güngör </p>
          <div>
            <img src={pay1} alt="" />
            <img src={pay2} alt="" />
            <img src={pay3} alt="" />
            <img src={pay4} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
