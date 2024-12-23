import React, { useState } from 'react'

const AccordionsFooter = () => {

    const [isExpanded, setIsExpanded] = useState(false);
    const deskripsi = [
        {
          judul: 'Memaksimalkan Website dan Aplikasi dengan IDCloudhost',
          deskripsi: `IDCloudhost merupakan provider Cloud Hosting dan Cloud Infrastructure pertama #1 di Indonesia 
            yang mempunyai layanan Full Cloud dengan konsep Scale Up as You Grow, sehingga lebih fleksibel dan 
            mudah dalam memperkirakan kebutuhan layanan server untuk aplikasi dan website Anda.
      
            Layanan Cloud VPS Indonesia dari IDCloudhost dirancang untuk kebutuhan Server Private yang menjamin 
            keamanan data dengan konsep Full Cloud, sepenuhnya menggunakan teknologi terbaru saat ini.
      
            Selain itu, sistem pembayaran dari layanan Cloud VPS Indonesia juga fleksibel, memungkinkan Anda 
            melakukan downgrade dan upgrade layanan dengan mudah. Anda hanya membayar layanan yang dipilih 
            tanpa perlu khawatir terjadi kelebihan pembayaran karena semuanya dilakukan secara transparan.`
        },
        {
          judul: 'PS merupakan Solusi layanan Private untuk Perusahaan dan Startup',
          deskripsi: `IDCloudhost merupakan Web Hosting dan Cloud Infrastructure Terbaik di Indonesia yang 
            menyediakan berbagai layanan Komputasi Awan seperti Cloud Hosting dengan Control Panel (Cpanel dan Plesk). 
            IDCloudhost juga menawarkan layanan Reseller Cloud Hosting untuk wirausaha muda yang ingin membangun 
            bisnis web hosting.
      
            Selain itu, layanan server seperti Virtual Private Server, Dedicated Server, dan Colocation Server 
            tersedia di berbagai Data Center di Indonesia. IDCloudhost berkomitmen menjadi salah satu Web Hosting 
            Murah dan Terbaik di Indonesia, dengan terdaftar sebagai salah satu registrar PANDI untuk pengelolaan 
            nama domain.
      
            Saat ini, lebih dari 300.000 klien telah menggunakan layanan IDCloudhost untuk kebutuhan website, 
            aplikasi startup, bisnis online, UMKM, freelance, hingga perusahaan besar.`
        },
        {
          judul: 'Cloud VPS atau Public Cloud untuk Server Perusahaan Anda?',
          deskripsi: `Pilihan antara Cloud VPS dan Public Cloud tergantung pada kebutuhan perusahaan atau startup Anda.
      
            Cloud VPS adalah solusi untuk perusahaan/startup yang membutuhkan server yang lebih private. 
            Server ini memungkinkan Anda bebas mengatur dan mengonfigurasi sesuai kebutuhan tanpa terganggu pengguna lain. 
            
            Berbeda dengan Public Cloud, yang merupakan server berbagi (shared server) di mana pengguna berbagi 
            sumber daya dengan user lain. Kelebihan Public Cloud adalah kemudahan penggunaan dengan fitur yang siap pakai. 
            Namun, Public Cloud memiliki kelemahan terkait keamanan, yang biasanya kurang aman dibandingkan Cloud VPS.`
        },
        {
          judul: 'Keunggulan Cloud VPS: Lebih Aman dan Privasi untuk Perusahaan',
          deskripsi: `Data dan informasi adalah aset paling berharga bagi perusahaan atau startup Anda. 
            Menggunakan Cloud VPS memastikan data lebih aman dan privasi lebih terjamin, karena server ini sepenuhnya 
            dimiliki oleh Anda.
      
            Cloud VPS menawarkan tingkat keamanan yang lebih tinggi karena sumber daya yang dibagi dengan 
            organisasi lain sangat minim. Cloud VPS cocok untuk semua industri, karena membantu mengurangi biaya, 
            meningkatkan efisiensi, dan mendorong transformasi bisnis.
      
            Selain itu, layanan Cloud VPS dari IDCloudhost tersedia dengan harga terjangkau. Data center lokal 
            Indonesia juga memberikan jaminan keamanan tambahan, melindungi data Anda dari masalah yang tidak diinginkan.`
        },
        {
          judul: 'Cloud VPS Server dengan Harga Terjangkau di Indonesia',
          deskripsi: `Layanan Cloud VPS dari IDCloudhost menawarkan harga yang terjangkau dan fleksibel. 
            Sistem pembayaran memungkinkan Anda melakukan upgrade atau downgrade secara real-time sesuai kebutuhan.
      
            Jika Anda membutuhkan layanan cepat untuk menghadapi lonjakan trafik, Cloud VPS dari IDCloudhost 
            memastikan stabilitas server tanpa risiko downtime. Layanan ini juga menjamin SLA 99.5% untuk uptime server, 
            didukung oleh tim support yang berpengalaman untuk membantu kebutuhan Anda.
      
            Dengan layanan ini, Anda dapat fokus pada produk dan layanan inti tanpa khawatir tentang kompleksitas 
            server atau infrastruktur teknis lainnya.`
        }
      ];
      

  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  
  return (
    <section className="relative mb-10">
  <section
    className={`transition-all grid gap-5 relative ${isExpanded ? 'max-h-full duration-1000' : 'max-h-[150px]'} overflow-hidden`}
  >
    {deskripsi.map((val) => (
      <span key={val.judul} className="flex flex-col">
        <p className="text-[#65686D] text-lg font-bold">{val.judul}</p>
        <p
          className="text-[#8592A4] text-base "
          dangerouslySetInnerHTML={{ __html: val.deskripsi }}
        />
      </span>
    ))}
  </section>
  <section
    className={`h-[70px] absolute w-full -bottom-3 ${
      isExpanded
        ? '' 
        : 'bg-gradient-to-b from-slate-50/60 to-slate-50/90 blur-sm  z-10'
    } transition-all duration-500`}
  >
  </section>
  <button
    onClick={toggleText}
    className="mt-2 text-xs z-50 py-2 absolute   transform text-blue-500 transition-all"
  >
    {isExpanded ? 'Show Less' : 'Show More'}
  </button>
</section>
  )
}

export default AccordionsFooter