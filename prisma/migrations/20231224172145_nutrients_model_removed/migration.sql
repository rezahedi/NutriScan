/*
  Warnings:

  - You are about to drop the `Nutrients` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `nutrient_ID` on the `ProductNutrients` table. All the data in the column will be lost.
  - Added the required column `nameKey` to the `ProductNutrients` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Nutrients_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Nutrients";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductNutrients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_ID" TEXT NOT NULL,
    "nameKey" TEXT NOT NULL,
    "amount" REAL NOT NULL,
    "unitName" TEXT NOT NULL,
    "rated" INTEGER NOT NULL,
    CONSTRAINT "ProductNutrients_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES "Products" ("productID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductNutrients" ("amount", "id", "product_ID", "rated", "unitName") SELECT "amount", "id", "product_ID", "rated", "unitName" FROM "ProductNutrients";
DROP TABLE "ProductNutrients";
ALTER TABLE "new_ProductNutrients" RENAME TO "ProductNutrients";
CREATE UNIQUE INDEX "ProductNutrients_product_ID_key" ON "ProductNutrients"("product_ID");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
