/*
  Warnings:

  - The primary key for the `Products` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_ProductNutrients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_ID" TEXT NOT NULL,
    "nutrient_ID" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "unitName" TEXT NOT NULL,
    "rated" INTEGER NOT NULL,
    CONSTRAINT "ProductNutrients_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES "Products" ("productID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductNutrients_nutrient_ID_fkey" FOREIGN KEY ("nutrient_ID") REFERENCES "Nutrients" ("nutrientID") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_ProductNutrients" ("amount", "id", "nutrient_ID", "product_ID", "rated", "unitName") SELECT "amount", "id", "nutrient_ID", "product_ID", "rated", "unitName" FROM "ProductNutrients";
DROP TABLE "ProductNutrients";
ALTER TABLE "new_ProductNutrients" RENAME TO "ProductNutrients";
CREATE UNIQUE INDEX "ProductNutrients_product_ID_nutrient_ID_key" ON "ProductNutrients"("product_ID", "nutrient_ID");
CREATE TABLE "new_Products" (
    "productID" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "brandOwner" TEXT NOT NULL,
    "brandName" TEXT NOT NULL,
    "ingredients" TEXT NOT NULL,
    "servingSize" REAL NOT NULL,
    "servingUnit" TEXT NOT NULL,
    "packageWeight" TEXT NOT NULL,
    "rated" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Products" ("brandName", "brandOwner", "createdAt", "image", "ingredients", "name", "packageWeight", "productID", "rated", "servingSize", "servingUnit", "updatedAt") SELECT "brandName", "brandOwner", "createdAt", "image", "ingredients", "name", "packageWeight", "productID", "rated", "servingSize", "servingUnit", "updatedAt" FROM "Products";
DROP TABLE "Products";
ALTER TABLE "new_Products" RENAME TO "Products";
CREATE UNIQUE INDEX "Products_productID_key" ON "Products"("productID");
CREATE TABLE "new__UserProducts" (
    "A" TEXT NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_UserProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Products" ("productID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("userID") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new__UserProducts" ("A", "B") SELECT "A", "B" FROM "_UserProducts";
DROP TABLE "_UserProducts";
ALTER TABLE "new__UserProducts" RENAME TO "_UserProducts";
CREATE UNIQUE INDEX "_UserProducts_AB_unique" ON "_UserProducts"("A", "B");
CREATE INDEX "_UserProducts_B_index" ON "_UserProducts"("B");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
