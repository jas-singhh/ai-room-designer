# 🏠 AI Room Designer

AI Room Designer is a web application that allows users to upload an image of a room, select the type of room and desired interior design style, and generate a stunning AI-enhanced version of the space using **Replicate AI**. The application provides a smooth and secure user experience with authentication powered by **Clerk**, clean UI built with **shadcn/ui**, and API integration handled via **Axios**.

---

## ✨ Features

- 🖼️ Upload an image of any room in your home.
- 🏷️ Select the **type of room** (e.g., bedroom, living room, kitchen, etc.).
- 🎨 Choose from **6 unique design styles**:
  - **Modern**
  - **Industrial**
  - **Minimalist**
  - **Traditional**
  - **Bohemian**
  - **Rustic**
- ⚙️ Generate a fully redesigned version of your room using **Replicate AI**.
- 🔐 Secure user authentication using **Clerk**.
- 💅 Clean and responsive UI powered by **shadcn/ui**.
- ⚡ Fast and simple API calls with **Axios**.

---

## 📸 Preview

Here are some example screenshots of the application:

### 🏡 Home Page

![Home](./public/Home.png)
![Home2](./public/Home2.png)

### 🖼️ Create Image

![Create Image](./public/CreateImage.png)

### ⚙️ Generating Image

![Generating Image](./public/GeneratingImage.png)

---

## 🛠️ Tech Stack

- **Frontend**: React, Next.js App Router, JavaScript, Tailwind CSS
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Authentication**: [Clerk](https://clerk.dev/)
- **AI Image Generation**: [Replicate](https://replicate.com/)
- **HTTP Client**: [Axios](https://axios-http.com/)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/jas-singhh/ai-room-designer.git
cd ai-room-designer
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Create Environment Variables

Create a `.env.local` file in the root of your project and add the following:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key
REPLICATE_API_TOKEN=your_replicate_api_token
NEXT_PUBLIC_REPLICATE_MODEL_VERSION=your_replicate_model_version
```

### 4. Start the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

---

## 🧠 How It Works

1. The user **logs in** using Clerk.
2. The user **uploads an image** of their room.
3. The user selects the **room type** and one of the **six design styles**.
4. The app sends a request to **Replicate AI** using Axios.
5. The redesigned image is generated and displayed.

---
