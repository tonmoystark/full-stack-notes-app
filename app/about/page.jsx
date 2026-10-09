import { Roboto_Mono } from "next/font/google";
import React from "react";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});

const AboutPage = () => {
  return (
    <div className={robotoMono.className}>
      AboutPage this si a page and ther is somany thisb thast cakn oksfkj see
      sdb b skto ikf
    </div>
  );
};

export default AboutPage;
