-- CreateTable
CREATE TABLE "BookUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "bookId" INTEGER NOT NULL,

    CONSTRAINT "BookUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookUser" ADD CONSTRAINT "BookUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookUser" ADD CONSTRAINT "BookUser_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
