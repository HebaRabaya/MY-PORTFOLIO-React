import React, { useState, useEffect } from 'react';

// مكون الإشعارات - يظهر رسائل للمستخدم
export default function Notification({ message, type = 'info', duration = 3000, onClose }) {
  // هل الإشعار ظاهر ولا لأ
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true); // نظهر الإشعار
    const timer = setTimeout(() => {
      setShow(false); // نخفي الإشعار
      setTimeout(() => onClose && onClose(), 300); // نحذفه من القائمة
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  // دالة لإرجاع الأيقونة المناسبة حسب نوع الإشعار
  const getIcon = () => {
    switch (type) {
      case 'success': return 'fa-check-circle'; // نجح
      case 'error': return 'fa-exclamation-circle'; // خطأ
      case 'warning': return 'fa-exclamation-triangle'; // تحذير
      default: return 'fa-info-circle'; // معلومات
    }
  };

  return (
    <div className={`notification ${type} ${show ? 'show' : ''}`}>
      <i className={`fa-solid ${getIcon()}`} style={{ marginRight: '10px' }}></i>
      {message}
    </div>
  );
}
