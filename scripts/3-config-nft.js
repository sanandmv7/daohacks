import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop("0xe77c2300e5be19B8bcbD81030b1b0C0929A7FE34");

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Cosmic Pass",
        description: "This NFT will give you access to CosmicDAO!",
        image: readFileSync("scripts/assets/entrypass.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();