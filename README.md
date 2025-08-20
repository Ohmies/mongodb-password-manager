# MongoDB Password Manager

โปรแกรมจัดการรหัสผ่านที่ปลอดภัย ใช้เทคโนโลยี Node.js, Express, MongoDB และ Frontend แบบ Responsive

## 📋 คุณสมบัติ

- ✅ **เพิ่ม/แก้ไข/ลบ** รายการรหัสผ่าน
- 🔍 **ค้นหา** รายการรหัสผ่านได้อย่างรวดเร็ว
- 🔒 **ซ่อน/แสดง** รหัสผ่านเพื่อความปลอดภัย
- 📱 **Responsive Design** รองรับการใช้งานบนอุปกรณ์ทุกขนาด
- 🎨 **UI ที่สวยงาม** ใช้ Tailwind CSS
- 📂 **จัดเก็บข้อมูล** บน MongoDB Database
- 🌐 **RESTful API** สำหรับการเชื่อมต่อ

## 🏗️ โครงสร้างโปรเจกต์

```
mongodb-password-manager/
├── backend/              # API Server (Express.js)
│   ├── package.json
│   └── server.js        # Backend logic และ API endpoints
├── frontend/            # Web Interface
│   ├── package.json
│   ├── server.js       # Frontend server
│   └── public/
│       └── index.html  # หน้าเว็บหลัก
└── mongodb/            # MongoDB Data Directory
    └── data/           # ไฟล์ข้อมูล MongoDB
```

## 🛠️ เทคโนโลยีที่ใช้

### Backend
- **Node.js** - JavaScript Runtime
- **Express.js** - Web Framework
- **MongoDB** - NoSQL Database
- **Mongoose** - MongoDB Object Modeling
- **CORS** - Cross-Origin Resource Sharing

### Frontend
- **HTML5, CSS3, JavaScript** - Core Web Technologies
- **Tailwind CSS** - Utility-first CSS Framework
- **Express.js** - Static File Server

## 📦 การติดตั้ง

### ข้อกำหนดเบื้องต้น

- Node.js (เวอร์ชัน 14.0 หรือสูงกว่า)
- MongoDB (เวอร์ชัน 4.0 หรือสูงกว่า)
- npm หรือ yarn

### 1. Clone Repository

```bash
git clone https://github.com/Ohmies/mongodb-password-manager.git
cd mongodb-password-manager
```

### 2. ติดตั้ง Dependencies

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd ../frontend
npm install
```

### 3. เริ่มต้น MongoDB

```bash
# สำหรับ macOS (ใช้ Homebrew)
brew services start mongodb-community

# สำหรับ Linux
sudo systemctl start mongod

# สำหรับ Windows
net start MongoDB
```

### 4. เริ่มรันเซิร์ฟเวอร์

#### เริ่ม Backend Server (Terminal 1)
```bash
cd backend
node server.js
```
Backend จะรันที่: `http://localhost:3000`

#### เริ่ม Frontend Server (Terminal 2)
```bash
cd frontend
node server.js
```
Frontend จะรันที่: `http://localhost:4000`

## 🚀 การใช้งาน

1. เปิดเว็บเบราว์เซอร์และไปที่ `http://localhost:4000`
2. คลิก **"Add New Password"** เพื่อเพิ่มรายการรหัสผ่านใหม่
3. กรอกข้อมูล:
   - **Title**: ชื่อของรายการ
   - **Website**: URL ของเว็บไซต์
   - **Username**: ชื่อผู้ใช้
   - **Password**: รหัสผ่าน
   - **Notes**: หมายเหตุเพิ่มเติม (ไม่บังคับ)
4. คลิก **"Save Password"** เพื่อบันทึก
5. ใช้ปุ่ม **Edit** เพื่อแก้ไขข้อมูล
6. ใช้ปุ่ม **Delete** เพื่อลบรายการ
7. ใช้ช่อง **Search** เพื่อค้นหารายการ

## 📡 API Endpoints

### Password Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/passwords` | ดึงข้อมูลรหัสผ่านทั้งหมด |
| `GET` | `/api/passwords/:id` | ดึงข้อมูลรหัสผ่านตาม ID |
| `POST` | `/api/passwords` | สร้างรายการรหัสผ่านใหม่ |
| `PUT` | `/api/passwords/:id` | อัปเดตรายการรหัสผ่าน |
| `DELETE` | `/api/passwords/:id` | ลบรายการรหัสผ่าน |

### ตัวอย่าง Request Body (POST/PUT)

```json
{
  "title": "Gmail Account",
  "website": "https://gmail.com",
  "username": "example@gmail.com",
  "password": "mySecurePassword123",
  "notes": "Personal email account"
}
```

## 🗃️ โครงสร้างฐานข้อมูล

### Password Entry Schema

```javascript
{
  title: String,        // ชื่อรายการ (จำเป็น)
  website: String,      // URL เว็บไซต์ (จำเป็น)
  username: String,     // ชื่อผู้ใช้ (จำเป็น)
  password: String,     // รหัสผ่าน (จำเป็น)
  notes: String,        // หมายเหตุ (ไม่บังคับ)
  icon: String,         // ไอคอน base64 หรือ URL (ไม่บังคับ)
  createdAt: Date,      // วันที่สร้าง (อัตโนมัติ)
  updatedAt: Date       // วันที่อัปเดต (อัตโนมัติ)
}
```

## 🔧 การกำหนดค่า

### การเปลี่ยน Port

#### Backend Port (default: 3000)
แก้ไขในไฟล์ `backend/server.js`:
```javascript
const PORT = 3000; // เปลี่ยนเป็นพอร์ตที่ต้องการ
```

#### Frontend Port (default: 4000)
แก้ไขในไฟล์ `frontend/server.js`:
```javascript
const PORT = 4000; // เปลี่ยนเป็นพอร์ตที่ต้องการ
```

### การเปลี่ยน MongoDB Connection

แก้ไขในไฟล์ `backend/server.js`:
```javascript
const mongoUri = "mongodb://localhost:27017/test"; // เปลี่ยน URI ตามต้องการ
```

## 🛡️ ความปลอดภัย

> ⚠️ **คำเตือน**: โปรแกรมนี้เป็นเพียงตัวอย่างสำหรับการเรียนรู้ ไม่ควรใช้ในการเก็บรหัสผ่านจริงในระบบ Production

### ข้อแนะนำสำหรับ Production:

1. **เข้ารหัสรหัสผ่าน**: ใช้ bcrypt หรือ encryption libraries
2. **Authentication**: เพิ่มระบบล็อกอินและการยืนยันตัวตน
3. **HTTPS**: ใช้ SSL/TLS สำหรับการเชื่อมต่อ
4. **Environment Variables**: ใช้ .env files สำหรับข้อมูลสำคัญ
5. **Input Validation**: เพิ่มการตรวจสอบข้อมูลที่รับเข้ามา

## 🔍 การแก้ไขปัญหา

### ปัญหาที่พบบ่อย

1. **ไม่สามารถเชื่อมต่อ MongoDB**
   ```bash
   # ตรวจสอบสถานะ MongoDB
   brew services list | grep mongodb  # macOS
   sudo systemctl status mongod       # Linux
   ```

2. **Port already in use**
   ```bash
   # หา process ที่ใช้พอร์ต
   lsof -i :3000  # เช็คพอร์ต 3000
   lsof -i :4000  # เช็คพอร์ต 4000
   
   # ปิด process
   kill -9 <PID>
   ```

3. **CORS Error**
   - ตรวจสอบว่า Backend เปิด CORS แล้ว
   - ตรวจสอบ URL ใน Frontend ให้ตรงกับ Backend

## 🤝 การพัฒนาต่อ

### Features ที่สามารถเพิ่มได้:

- [ ] ระบบ Authentication/Authorization
- [ ] การเข้ารหัสรหัสผ่าน
- [ ] การสำรองและกู้คืนข้อมูล
- [ ] Dark/Light Mode
- [ ] การส่งออกข้อมูลเป็น CSV
- [ ] Password Generator
- [ ] Two-Factor Authentication
- [ ] Mobile App (React Native)

## 📄 License

MIT License - ดูรายละเอียดใน LICENSE file

## 👨‍💻 ผู้พัฒนา

- **GitHub**: [@Ohmies](https://github.com/Ohmies)
- **Repository**: [mongodb-password-manager](https://github.com/Ohmies/mongodb-password-manager)

## 📞 การติดต่อ

หากมีคำถามหรือต้องการความช่วยเหลือ สามารถ:
- เปิด Issue ใน GitHub
- ติดต่อผ่าน GitHub Profile

---

⭐ หากโปรเจกต์นี้มีประโยชน์ อย่าลืม Star ให้กันนะ!