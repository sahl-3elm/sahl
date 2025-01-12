import React from 'react';
import axios from 'axios';

export default function Home() {

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    justifyContent: 'space-between', // Space between buttons and text
    alignItems: 'center',
    height: '100vh', // Full screen height
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#fff',
  };

  const welcomeSectionStyle = {
    backgroundColor: '#333',
    textAlign: 'center',
    padding: '40px',
    border: '1px solid #fff',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '800px',
    marginTop: 'auto', // Push the welcome text to the bottom
  };

  const welcomeTextStyle = {
    fontSize: '20px',
    lineHeight: '1.6',
  };

  const welcomeHeadingStyle = {
    fontSize: '24px',
    color: '#FFD700',
  };

  const introTextStyle = {
    fontSize: '18px',
  };

  const boldTextStyle = {
    fontWeight: 'bold',
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '20px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    width: '200px',
    margin: '10px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#007BFF',
  };

  const cardTitleStyle = {
    margin: '0',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <div style={containerStyle}>
      {/* Top Buttons */}
      <div
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <a href="/courses" style={linkStyle}>
          <h3 style={cardTitleStyle}>الدورات التدريبية</h3>
        </a>
      </div>

      <div
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <a href="/books" style={linkStyle}>
          <h3 style={cardTitleStyle}>الكتب والروايات</h3>
        </a>
      </div>

      <section style={welcomeSectionStyle}>
        <p style={welcomeTextStyle}>
          <strong style={welcomeHeadingStyle}>مرحباً بك في موقع سهل!</strong><br />
          <span style={introTextStyle}>أنا شاهين أمجد، مطور ويب متكامل، وأنا سعيد جداً بأنك هنا.</span><br /><br />
          <span style={introTextStyle}>موقع سهل هو المكان الذي صممته خصيصاً لك، حيث يمكنك التعلم بسهولة من خلال دورات مجانية عالية الجودة وقراءة ممتعة، دون إضاعة وقتك في البحث عنها. هدفي هو أن أساعدك في التعلم بشكل سريع وفعّال.</span><br /><br />
          <span style={introTextStyle}>إذا كنت بحاجة إلى أي مساعدة أو لديك أي استفسار، لا تتردد في التواصل معي.</span><br /><br />
          <span style={introTextStyle}>استمتع بتجربتك في سهل!</span><br /><br />
          <span style={introTextStyle}>.شاهين أمجد</span>
        </p>
      </section>
    </div>
  );
}
