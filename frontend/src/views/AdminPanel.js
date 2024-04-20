import React from 'react';
import './AdminPanel.css';


function AdminPanel() {
  return (
    <div className="AdminPanel">
        <>
          <div className='Sidebar'>
            <h3>Админ панель</h3>
            <ul>
                <li>Главная страница</li>
                <li>Калькуляторы</li>
                <li>Пользователи</li>
            </ul>
          </div>
        </>
        
    </div>
  );
}

export default AdminPanel;