import osUtils from "os-utils";
import fs from "fs";

const POLLING_INTERVAL = 500;

export const pollResources = () => {
  setInterval(async () => {
    const cpuUseage = await getCPUUsage();
    const ramUsage = getRamUsage();
    const storageData = getStorageData();
    console.log({ cpuUseage, ramUsage, storageUsage: storageData.usage });
  }, POLLING_INTERVAL);
};

const getCPUUsage = () => {
  return new Promise((resolve) => {
    osUtils.cpuUsage(resolve);
  });
};

const getRamUsage = () => {
  return 1 - osUtils.freememPercentage();
};

function getStorageData() {
  // requires node 18
  const stats = fs.statfsSync(process.platform === "win32" ? "C://" : "/");
  const total = stats.bsize * stats.blocks;
  const free = stats.bsize * stats.bfree;

  return {
    total: Math.floor(total / 1_000_000_000),
    usage: 1 - free / total,
  };
}
