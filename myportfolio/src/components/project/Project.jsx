import React, { useState } from 'react';
import "./project.scss";

const projects = [
  {
    id: 1,
    title: "Yapay Zeka Destekli Feedback Sistemi",
    body: "Yapay zeka destekli feedback sistemi, DeepSeek R1-14B modelini kullanarak geliştirdiğim bir sistemdir. Bu sistemde, kullanıcıların girdiği tüm feedback veritabanında bir havuzda toplanır. Sistem, bu feedbackleri manuel olarak tek tek okumak yerine, geliştiricilere ve sistemin tasarlandığı firmalara hızlıca analiz yapma imkanı sunar."+
        "Kullanıcıların yazdığı feedbackler, öncelik sırasına göre düzenlenir ve analiz sonuçları mantıklı bir şekilde sunulur. Böylece, yapılması gerekenler belirli bir sıraya göre önerilir ve hangi adımların önce alınması gerektiği gösterilir."+
        "Bu sistemin backend tarafı Go diliyle geliştirilmiş olup, frontend tarafı React ile tasarlanmıştır. Bu yapı, farklı sistemlere entegre edilebilir ve her sistemde kullanılabilir hale getirilmiştir. Böylece, firmalar ve geliştirme ekipleri, kullanıcı geri bildirimlerini daha verimli bir şekilde analiz ederek, süreçlerini optimize edebilirler.",
  },
  {
    id: 2,
    title: "Ticket Destek Sistemi",
    body: "Bu projede, admin, distribütör, perakendeci ve kullanıcı rollerinin bulunduğu bir ticket destek sistemi geliştirdim. Kullanıcılar, kendi yetkileri doğrultusunda ticket oluşturabilir ve yönetebilir. Go dili ile backend, React ile frontend geliştirdim ve PostgreSQL veritabanı kullandım." +
        "Backend: CRUD işlemleri ve API bağlantıları sağlandı. Veritabanı için migration dosyaları oluşturup, ticket, kullanıcı ve roller gibi tabloları yapılandırdım. Seed verileri ile başlangıç verilerini veritabanına ekledim." + 
        "Frontend: Kullanıcı dostu bir dashboard tasarımı yaparak, ticket işlemleri için dinamik arayüzler oluşturdum." +
        "Projede hem backend hem de frontend süreçlerinde yer alarak, tam bir full-stack geliştirme süreci gerçekleştirdim.",
  },
  {
    id: 3,
    title: "FrameFinder: Video Arama Aracı",
    body: "FrameFinder, güvenlik kamera kayıtları kullanarak çalışan bir sistemdir." +
        "Bu sistemin amacı, kamera çerçevesinden geçen kullanıcıları otomatik bir şekilde tespit etmektir." +
        "Kullanıcı, yüklediği bir fotoğraf ve belirlediği saat ve tarih aralığı ile sistemin doğru kayıtları taramasını sağlar." +
        "Sistem, belirlenen zaman dilimindeki ilk uygun frame’i gösterir." +
        "Eğer kullanıcının aradığı frame bu değilse, devam butonuyla diğer kayıtlar taranabilir."+
        "Bu özellik sayesinde, bilgi işlem çalışanları manuel arama yapmak zorunda kalmaz; otomatik arama sistemi ile işlerini daha hızlı ve verimli bir şekilde gerçekleştirebilirler." + 
        "Sistem, hem insanları hem de hayvanları tanıyabilen modelleri destekler. Proje, Python dilinde geliştirilmiş olup, YOLO (You Only Look Once) algoritması kullanılarak yüz tanıma işlemleri yapılmaktadır." +
        "Kullanıcı arayüzü ise PyQt5 kütüphanesi ile tasarlanmıştır." +
        " Projede, saat ve tarih aralığına göre filtreleme işlemi başarıyla uygulanmış ve admin paneli için user login sayfası tasarlanıp giriş işlemi gerçekleştirilmiştir.",
  }
];

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const closeModal = () => setSelectedProject(null);

  return (
    <div className="project-section">
      <div className="project-title">PROJECT</div>
      
      <div className="project-card-container">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-card-title">{project.title}</div>
            <button className="detail-button" onClick={() => setSelectedProject(project)}>
              Detaylar için tıkla
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.body}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
