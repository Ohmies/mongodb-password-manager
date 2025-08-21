# 🔐 MongoDB Password Manager

โปรแกรมจัดการรหัสผ่านที่ปลอดภัย ใช้เทคโนโลยี Node.js, Express, MongoDB และ Frontend แบบ Responsive

[![GitHub stars](https://img.shields.io/github/stars/Ohmies/mongodb-password-manager.svg)](https://github.com/Ohmies/mongodb-password-manager/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Ohmies/mongodb-password-manager.svg)](https://github.com/Ohmies/mongodb-password-manager/network)
[![GitHub issues](https://img.shields.io/github/issues/Ohmies/mongodb-password-manager.svg)](https://github.com/Ohmies/mongodb-password-manager/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

> ⚠️ **คำเตือน**: โปรแกรมนี้เป็นเพียงตัวอย่างสำหรับการเรียนรู้ ไม่ควรใช้ในการเก็บรหัสผ่านจริงในระบบ Production


## 📺 Demo และ Preview

🌐 **Live Demo:** [ดูตัวอย่างการทำงาน]
📸 **Screenshots:** [ดูภาพตัวอย่าง]
🎥 **Video Guide:** [ดูวิดีโอการใช้งาน]


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



## 🚀 Quick Start (เริ่มใช้งานเร็ว)


```bash
# 1. Clone repository
git clone https://github.com/Ohmies/mongodb-password-manager.git
cd mongodb-password-manager

# 2. ติดตั้ง dependencies
cd backend && npm install
cd ../frontend && npm install

# 3. เริ่ม MongoDB (macOS)
brew services start mongodb-community

# 4. รันโปรแกรม (เปิด 2 terminal)
# Terminal 1: Backend
cd backend && node server.js

# Terminal 2: Frontend  
cd frontend && node server.js

# 5. เปิดเบราว์เซอร์ไปที่
http://localhost:4000
```


## 📦 การติดตั้งแบบละเอียด


### ข้อกำหนดเบื้องต้น


- ✅ **Node.js** (เวอร์ชัน 14.0 หรือสูงกว่า) - [ดาวน์โหลด](https://nodejs.org/)
- ✅ **MongoDB** (เวอร์ชัน 4.0 หรือสูงกว่า) - [ดาวน์โหลด](https://www.mongodb.com/try/download/community)
- ✅ **npm** หรือ **yarn** (มาพร้อม Node.js)
- ✅ **Git** - [ดาวน์โหลด](https://git-scm.com/)


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

### 3. การติดตั้งและเริ่มต้น MongoDB

#### 📱 macOS (ใช้ Homebrew)

```bash
# ติดตั้ง MongoDB
brew tap mongodb/brew
brew install mongodb-community

# เริ่มต้น MongoDB
brew services start mongodb-community

# ตรวจสอบสถานะ
brew services list | grep mongodb
```

#### 🐧 Linux (Ubuntu/Debian)

```bash
# อัปเดตแพ็กเกจ
sudo apt update

# ติดตั้ง MongoDB
sudo apt install mongodb

# เริ่มต้น MongoDB
sudo systemctl start mongod
sudo systemctl enable mongod

# ตรวจสอบสถานะ
sudo systemctl status mongod
```

#### 🪟 Windows

```bash
# ดาวน์โหลดและติดตั้งจาก
https://www.mongodb.com/try/download/community

# เริ่มต้น MongoDB (ใน Command Prompt as Administrator)
net start MongoDB

# ตรวจสอบการทำงาน
mongo --version
```

#### 🔧 การตรวจสอบ MongoDB

```bash
# เข้าสู่ MongoDB Shell
mongo

# ใน MongoDB Shell
show dbs              # แสดงฐานข้อมูลทั้งหมด
use test              # เลือกใช้ฐานข้อมูล test
show collections      # แสดงคอลเลกชันในฐานข้อมูล
exit                  # ออกจาก MongoDB Shell
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

## ❓ FAQ (คำถามที่พบบ่อย)

### Q: ทำไมต้องใช้ 2 terminal?
**A:** เพราะต้องรัน Backend (API Server) และ Frontend (Web Server) แยกกัน
- Backend: จัดการ API และฐานข้อมูล (Port 3000)
- Frontend: แสดงหน้าเว็บ (Port 4000)

### Q: ข้อมูลจะหายไหมถ้าปิดโปรแกรม?
**A:** ไม่หาย เพราะข้อมูลจัดเก็บใน MongoDB Database ถาวร

### Q: เปลี่ยน Port ได้ไหม?
**A:** ได้ แก้ไขในไฟล์ `server.js` ของแต่ละโฟลเดอร์

### Q: ใช้ฐานข้อมูลอื่นได้ไหม?
**A:** ได้ แต่ต้องแก้ไขโค้ดในส่วน MongoDB connection

### Q: รหัสผ่านปลอดภัยไหม?
**A:** ในเวอร์ชันนี้ยังไม่เข้ารหัส ไม่ควรใช้กับข้อมูลจริง

### Q: Deploy ขึ้น Server ได้ไหม?
**A:** ได้ แต่ต้องเพิ่มการรักษาความปลอดภัยก่อน

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

## 🎯 คำแนะนำสำหรับมือใหม่

### เริ่มต้นศึกษา
1. **เริ่มจาก Frontend**: ดูหน้าเว็บใน `frontend/public/index.html`
2. **ศึกษา Backend**: ดู API ใน `backend/server.js`
3. **เข้าใจ Database**: เรียนรู้ MongoDB Schema
4. **ทดลองแก้ไข**: เปลี่ยนสี, เพิ่มปุ่ม, แก้ไขข้อความ

### ลำดับการศึกษา
```
1. HTML/CSS/JavaScript พื้นฐาน
2. Node.js และ Express.js
3. MongoDB และ Mongoose
4. REST API Design
5. Frontend-Backend Integration
```

## 🤝 การพัฒนาร่วมกัน (Contributing)

เราต้อนรับการมีส่วนร่วมจากทุกคน! 

### วิธีการมีส่วนร่วม

1. **Fork** โปรเจกต์นี้
2. **Clone** โปรเจกต์ไปยังเครื่องของคุณ
3. **สร้าง Branch** ใหม่: `git checkout -b feature/amazing-feature`
4. **Commit** การเปลี่ยนแปลง: `git commit -m 'Add some AmazingFeature'`
5. **Push** ไปยัง Branch: `git push origin feature/amazing-feature`
6. **สร้าง Pull Request**

### Code Style

- ใช้ **2 spaces** สำหรับ indentation
- ใส่ **semicolon** ท้ายทุกบรรทัด JavaScript
- ใช้ **camelCase** สำหรับตัวแปร
- เขียน **comment** ภาษาไทยหรืออังกฤษก็ได้

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

## ⚡ Performance Tips

### การปรับปรุงประสิทธิภาพ

1. **Database Indexing**
   ```javascript
   // เพิ่ม index สำหรับการค้นหา
   db.passwords.createIndex({ title: "text", website: "text" })
   ```

2. **Frontend Optimization**
   - ใช้ debounce สำหรับ search function
   - เพิ่ม loading states
   - Cache ข้อมูลที่ค้นหาแล้ว

3. **Backend Optimization**
   - เพิ่ม pagination สำหรับข้อมูลจำนวนมาก
   - ใช้ compression middleware
   - เพิ่ม request rate limiting

## 📊 การตรวจสอบประสิทธิภาพ

```bash
# ตรวจสอบ memory usage
node --inspect backend/server.js

# ทดสอบ load บน API
curl -w "@curl-format.txt" -o /dev/null http://localhost:3000/api/passwords

# ตรวจสอบ MongoDB performance
mongostat
```

## 🔧 Advanced Configuration

### Environment Variables

สร้างไฟล์ `.env` ในโฟลเดอร์ backend:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/test
NODE_ENV=development
CORS_ORIGIN=http://localhost:4000
```

### การรัน MongoDB ด้วย Docker

คุณสามารถรัน MongoDB ด้วย Docker ได้ง่าย ๆ ด้วยคำสั่งนี้:

```bash
docker run --name some-mongo \
   -p 27017:27017 \
   -v /home/user/mongodb/data:/data/db \
   -e MONGO_INITDB_ROOT_USERNAME=root \
   -e MONGO_INITDB_ROOT_PASSWORD=password \
   -d mongo:latest --auth
```

**รายละเอียด:**

- `--name some-mongo` ตั้งชื่อ container
- `-p 27017:27017` เปิด port สำหรับ MongoDB
- `-v /home/user/mongodb/data:/data/db` เชื่อมต่อโฟลเดอร์ข้อมูล
- `-e MONGO_INITDB_ROOT_USERNAME=root` กำหนด username
- `-e MONGO_INITDB_ROOT_PASSWORD=password` กำหนด password
- `-d mongo:latest --auth` รันแบบ background และเปิด authentication


---
### Docker Support

```dockerfile
# Dockerfile สำหรับ Backend
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]
```

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

⭐ หากโปรเจกต์นี้มีประโยชน์ อย่าลืม Star ให้กัน
