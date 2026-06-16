// Khu "Được tin tưởng bởi" trên trang chủ — dải logo cuộn vô tận (marquee) 2 hàng ngược chiều.
// Ảnh đặt trong public/clients/. Thêm/bớt bằng cách sửa mảng CLIENTS bên dưới.
type Client = { name: string; file: string };

const CLIENTS: Client[] = [
  { name: "Alchera", file: "/clients/alchera.jpg" },
  { name: "Hưng Vạn Phát", file: "/clients/hvp.jpg" },
  { name: "KOJAVM", file: "/clients/kojavm.png" },
  { name: "LEE Entertainment", file: "/clients/lee-entertainment.jpg" },
  { name: "NBC 1 Vietnam", file: "/clients/nbc1.jpg" },
  { name: "ORLAR", file: "/clients/orlar.jpg" },
  { name: "PICC", file: "/clients/picc.jpg" },
  { name: "S Media", file: "/clients/smedia.jpg" },
  { name: "TN Legal", file: "/clients/tnlegal.jpg" },
  { name: "WellBytes", file: "/clients/wellbytes.jpg" },
  { name: "Nguyễn Hoàng Group", file: "/clients/nhg.png" },
  { na