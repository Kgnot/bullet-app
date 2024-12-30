

export const walletsFetch =  async () => {
    const response = await fetch("http://localhost:8080/wallets");
    return await response.json();
}