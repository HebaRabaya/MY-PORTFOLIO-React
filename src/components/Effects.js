import React, { useState, useEffect } from 'react';

// العناصر التفاعلية - مؤثرات الماوس والنقر
export default function InteractiveElements() {
  // موقع الماوس الحالي
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // هل الماوس يتحرك حالياً
  const [moving, setMoving] = useState(false);

  useEffect(() => {
    // دالة لتتبع حركة الماوس
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setMoving(true);
      
      // إخفاء المؤشر المخصص بعد ثانية من توقف الحركة
      setTimeout(() => setMoving(false), 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* مؤشر الماوس المخصص - يظهر عند الحركة */}
      <div 
        className={`custom-cursor ${moving ? 'active' : ''}`}
        style={{
          left: mousePos.x - 10,
          top: mousePos.y - 10,
        }}
      />

      {/* سكريبت لإضافة تأثيرات النقر على العناصر */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              // العناصر القابلة للنقر
              const clickableElements = document.querySelectorAll('a, button, .card, .project-card');
              
              clickableElements.forEach((element, index) => {
                element.addEventListener('click', function(e) {
                  // إنشاء تأثير النقر
                  const clickEffect = document.createElement('div');
                  clickEffect.className = 'click-effect';
                  clickEffect.style.left = e.clientX - 25 + 'px';
                  clickEffect.style.top = e.clientY - 25 + 'px';
                  document.body.appendChild(clickEffect);
                  
                  // حذف التأثير بعد ثانية
                  setTimeout(() => {
                    document.body.removeChild(clickEffect);
                  }, 1000);
                });
              });
            });
          `
        }}
      />
    </>
  );
}
