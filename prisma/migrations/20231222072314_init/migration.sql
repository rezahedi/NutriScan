-- CreateTable
CREATE TABLE "Users" (
    "userID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Products" (
    "productID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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

-- CreateTable
CREATE TABLE "ProductNutrients" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "product_ID" INTEGER NOT NULL,
    "nutrient_ID" INTEGER NOT NULL,
    "amount" REAL NOT NULL,
    "unitName" TEXT NOT NULL,
    "rated" INTEGER NOT NULL,
    CONSTRAINT "ProductNutrients_product_ID_fkey" FOREIGN KEY ("product_ID") REFERENCES "Products" ("productID") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ProductNutrients_nutrient_ID_fkey" FOREIGN KEY ("nutrient_ID") REFERENCES "Nutrients" ("nutrientID") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Nutrients" (
    "nutrientID" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "icon" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_UserProducts" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_UserProducts_A_fkey" FOREIGN KEY ("A") REFERENCES "Products" ("productID") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_UserProducts_B_fkey" FOREIGN KEY ("B") REFERENCES "Users" ("userID") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "ProductNutrients_product_ID_nutrient_ID_key" ON "ProductNutrients"("product_ID", "nutrient_ID");

-- CreateIndex
CREATE UNIQUE INDEX "_UserProducts_AB_unique" ON "_UserProducts"("A", "B");

-- CreateIndex
CREATE INDEX "_UserProducts_B_index" ON "_UserProducts"("B");
