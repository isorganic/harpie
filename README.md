# Send 0 ETH to Random Addresses

Script ini digunakan untuk mengirim 0 ETH ke alamat acak secara berulang tanpa henti.

## 🚀 Instalasi

1. **Clone repository**
   ```sh
   git clone https://github.com/isorganic/harpie.git
   cd harpie
   ```

2. **Install dependencies**
   ```sh
   npm install ethers
   ```

## ⚙️ Konfigurasi

Edit file `send2.js` dan masukkan private key serta RPC URL yang sesuai:

```javascript
const PRIVATE_KEY = "your_private_key"; // Masukkan private key Anda
const RPC_URL = "https://rpc-base.harpie.io"; // RPC Base Mainnet
```

## ▶️ Menjalankan Script

Jalankan perintah berikut untuk memulai script:
```sh
node tx.js
```

## ❗ Catatan Penting
- Pastikan saldo akun cukup untuk biaya gas.
- Skrip ini akan berjalan terus-menerus dan dapat menghabiskan nonce serta gas.
- Gunakan hanya pada jaringan testnet atau dengan pemahaman risiko yang jelas.

## 🛑 Menghentikan Script
Gunakan `CTRL + C` untuk menghentikan proses di terminal.

---

💡 **Gunakan script ini setelah mandi!**

