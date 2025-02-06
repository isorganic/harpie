const { ethers } = require("ethers");

const PRIVATE_KEY = "privat key tanpa 0x"; // Private key Anda
const RPC_URL = "https://rpc-base.harpie.io"; // Base Mainnet RPC

const provider = new ethers.JsonRpcProvider(RPC_URL);
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

function getRandomAddress() {
    return ethers.Wallet.createRandom().address; // Generate alamat acak
}

async function sendZeroETH() {
    const randomAddress = getRandomAddress();
    console.log(`🚀 Mengirim 0 ETH ke: ${randomAddress}`);

    try {
        const tx = await wallet.sendTransaction({
            to: randomAddress,
            value: ethers.parseEther("0")
        });

        console.log(`✅ Transaksi terkirim! Hash: ${tx.hash}`);

        try {
            await tx.wait();
            console.log("✅ Transaksi berhasil dikonfirmasi.");
        } catch (confirmError) {
            console.error("❌ Konfirmasi transaksi gagal:", confirmError);
        }
    } catch (sendError) {
        console.error("❌ Gagal mengirim transaksi:", sendError);
    }

    // Lanjutkan transaksi berikutnya meskipun ada error
    sendZeroETH();
}

// Mulai mengirim transaksi tanpa henti
sendZeroETH();
