# Migration `20200620061813-create-todo`

This migration has been generated at 6/20/2020, 6:18:13 AM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Todo" (
"done" boolean  NOT NULL DEFAULT false,"id" SERIAL,"title" text  NOT NULL ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Todo.title" ON "public"."Todo"("title")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration ..20200620061813-create-todo
--- datamodel.dml
+++ datamodel.dml
@@ -1,0 +1,17 @@
+// This is your Prisma schema file,
+// learn more about it in the docs: https://pris.ly/d/prisma-schema
+
+datasource db {
+  provider = "postgresql"
+  url      = env("DATABASE_URL")
+}
+
+generator client {
+  provider = "prisma-client-js"
+}
+
+model Todo {
+  id      Int      @default(autoincrement()) @id
+  title   String   @unique
+  done    Boolean  @default(false)
+}
```


