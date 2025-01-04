module.exports = {
  theme: {
    extend: {
      colors: {
        // เพิ่มสีที่ต้องการใช้ในธีมที่กำหนดเอง
        'custom-light': '#f0f0f0', // สีพื้นหลังในธีม light
        'custom-dark': '#2e2e2e', // สีพื้นหลังในธีม dark
        'custom-cupcake': '#ffb6c1', // สีพื้นหลังในธีม cupcake
      },
    },
  },
  daisyui: {
    themes: [
      "light", // ธีมพื้นฐานของ DaisyUI
      "dark", // ธีมมืด
      "cupcake", // ธีมหวานๆ
      {
        custom: { // ธีมที่กำหนดเอง
          "primary": "#4b92f7", // สีหลัก
          "secondary": "#f472b6", // สีรอง
          "accent": "#fb923c", // สีสำหรับเน้น
          "neutral": "#3d4451", // สีธรรมชาติ
          "base-100": "#ffffff", // สีพื้นหลังในธีม light
          "base-200": "#f7f7f7", // สีรองพื้นหลังในธีม light
        }
      }
    ],
  },
  plugins: [require("daisyui")],
}
