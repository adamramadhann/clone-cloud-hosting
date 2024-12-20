import React, { useState } from 'react';
import { footerBsi1, footerId, footerKominfo } from '../importGambar';

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState(true);

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };


  const imageCopyRigth = [
    { urlImage: footerBsi1 },
    { urlImage: footerBsi1 },
    { urlImage: footerKominfo },
    { urlImage: footerId },
  ];

  const deskripsi = [
    {
      judul: 'Memaksimalkan Website dan Aplikasi dengan IDCloudhostIDCloudhost',
      deskripsi: `merupakan Web Hosting dan Cloud Infrastructure Terbaik di Indonesia yang 
            menyediakan berbagai layanan Komputasi Awan Seperti Cloud Hosting dengan 
            Control Panel Cpanel dan Plesk, Layanan Reseller Cloud Hosting untuk para 
            wirausaha muda yang ingin membangun Usaha Web Hosting maupun kebutuhan perusahaan, 
            berbagai layanan Server seperti Server Virtual Private Server, Dedicated Server, 
            Private WHM Server hingga Kebutuhan Colocation Server (Rak Server) yang tersedia 
            diberbagai Data Center di Indonesia. Tidak hanya itu, IDcloudhost berkomitmen menjadi 
            salah satu Web Hosting Murah dan Terbaik di Indonesia dengan terdaftar sebagai 
            salah satu Registrar di PANDI sebagai salah satu pengelola Nama Domain di Indonesia. 
            Saat ini sudah ada lebih dari +300.000 Client yang bergabung menggunakan layanan IDCloudhost 
            sebagai solusi tepat untuk Website dan Aplikasi bagi para Startup, Bisnis Online, UMKM, 
            Freelance, Perusahaan, dan lainnya.`
    },
    {
      judul: 'Dukungan Berbagai Fitur dan Teknologi Terbaru',
      deskripsi: `Sebagai Web Hosting Murah, IDCloudHost menawarkan Fitur terlengkap seperti Unlimited Bandwidth, 
            Unlimited email, Intergrasi sistem Cpanel, dan Softaculous yang didapatkan secara Gratis. 
            Sehingga Anda bisa mendapatkan Web Hosting Murah dengan kualitas terbaik dan sesuai dengan kebutuhan 
            Anda dengan jaminan Uptime 99.5%. Selain itu kami menyediakan domain murah dengan berbagai pilihan domain 
            seperti domain TLD, domain Indonesia (ccTLD) Terlengkap dan Termurah di Indonesia. Komitmen IDCloudhost 
            sebagai Web Hosting Indonesia dan Web Hosting Terbaik adalah menyediakan Customer Service dan Technical 
            Support 24/7 atau diartikan 24 Jam dalam Seminggu. Berkomitmen memberikan informasi, mengedukasi, dan juga 
            melayani berbagai pertanyaan ketika pelanggan melakukan pembelian seperti beli hosting, beli domain TLD dan 
            domain Indonesia. Selain itu kami setia menjadi partner kolaborasi dalam jasa jual hosting dan domain dalam 
            layanan reseller kami maupun layanan kami lainnya.`
    },
    {
      judul: 'Web Hosting Unlimted yang Terpercaya se-Indonesia',
      deskripsi: `IDcloudhost berkomitmen memberikan layanan jujur dan terpecaya untuk seluruh customer di Seluruh Indonesia. 
            Sebagai salah satu Web Hosting Unlimited dengan Fitur dan teknologi terupdate di Indonesia, IDcloudhost memberikan 
            Web Hosting dengan Bandwidth tidak terbatas atau Unlimited. Tidak Hanya itu, Harga yang ditawarkan juga murah dan 
            terjangkau bagi Anda yang ingin memulau Bisnis Online dengan memanfaatkan IDCloudHost untuk mewujudkan Website dan 
            Aplikasi Anda. Kami memberikan jaminan Web Hosting Unlimited dengan Bantuan Support 24/7 serta jaminan uptime hingga 
            99.5%. Tersedia berbagai pilihan terbaik untuk Anda mulai dari penggunaan Hosting dengan Control Panel Plesk dan 
            Control Panel Cpanel untuk Cloud Hosting Anda. Tidak hanya itu IDcloudhost juga menyediakan berbagai Lokasi Server 
            yang dapat Anda pilih mulai dari Server Indonesia, Server Singapura, Server Inggris, Server Jepang, dan Server Hongkong. 
            IDcloudhost juga berkomitmen menjaga dan melindungan segala data dan informasi penting Anda agar tidak salah gunakan oleh 
            orang yang tidak bertanggung jawab dengan dukungan fitur dan teknologi terupdate dan menjamin keamanan Website dan Aplikasi 
            di Hosting dan Server milik IDcloudhost.`
    },
    {
      judul: 'Kemudahan Pengelolaan, Pembayaran, dan lainnya',
      deskripsi: `Kami menyediakan layanan premium dan customize untuk perusahaan yang membutuhkan pelayanan ekstra dan service khusus. 
              Seperti beberapa layanan kami diantaranya Dedicated server, Colocation server, dan juga Server VPS Indonesia dengan berbagai 
              customisasi pilihan. Kami berusaha menjadi Web Hosting Terbaik dengan menyediakan Server Indonesia dan juga Web Hosting Murah 
              dengan pilihan harga yang bisa disesuaikan dengan kebutuhan anda baik itu ketika beli hosting maupun layanan lainnya. IDCloudhost 
              menyediakan layanan Web Hosting Terbaik dengan kemudahan transaksi dalam pembelian, seperti beli domain, beli hosting, dan membeli 
              layanan IDCloudhost dengan berbagai pilihan metode pembayaran. Bisa melalui transfer bank dengan banyak pilihan. Selain itu IDCloudhost 
              juga menyediakan pembayaran online dengan Paypal, GO-PAY, LINE PAY, Indomaret, Alfamart, dan lainnya sehingga akan mempermudah Proses Transaksi 
              Anda. Kami menawarkan berbagai paket untuk anda yang ingin mencoba berbisnis dengan adanya Reseller Domain dan Hosting. Kami menyediakan Domain 
              Murah dan Domain Indonesia yang bisa menjadi modal awal untuk mencoba memulai berbisnis. Anda juga dapat menjual beberapa layanan lainnya seperti 
              Jual Hosting, Jual VPS Server yang menguntungkan dengan proses pendaftaran yang mudah.`
    },
  ]

  return (
    <footer className=" relative ">
      <section className={`transition-all grid gap-2 relative ${isExpanded ? 'max-h-full' : 'max-h-[150px] '} overflow-hidden`} > 
          {
            deskripsi.map((val) => (
              <span key={val.judul} className=' flex flex-col gap-1 ' >
                <p className='text-[#65686D]' >{val.judul}</p>
                <p className='text-[#8592A4] ' >{val.deskripsi}</p>
              </span>
            ))
          }
      </section>
          <section className={`h-[100px] absolute -bottom-12 ${isExpanded ? '' : 'bg-white/70'} w-full`} >
            <button onClick={toggleText} className="mt-2 text-xs px-4 z-50 py-2 absolute bottom-0  text-blue-500 ">
                {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </section>

      {/* <section className=" mx-auto flex items-center justify-between">
        <p className="text-gray-600 text-sm text-center ">
          2015 - 2024 © PT Cloud Hosting Indonesia
        </p>
        <div className="flex items-center mt-4 gap-4">
          <h2 className="text-gray-800 text-sm font-semibold">
            AKREDITASI & PARTNER
          </h2>
          <div className="flex items-center gap-4">
            {imageCopyRigth.map((val, index) => (
              <img
                key={index}
                src={val.urlImage}
                alt="Footer Accreditation or Partner Logo"
                className="w-20 h-8 object-contain"
              />
            ))}
          </div>
        </div>
      </section> */}
    </footer>
  );
};

export default Footer;
