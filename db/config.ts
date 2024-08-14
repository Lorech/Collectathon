import { column, defineDb, defineTable } from "astro:db";

const Game = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    shortName: column.text(),
    slug: column.text(),
    coverUrl: column.text({ optional: true }),
  },
});

export default defineDb({
  tables: {
    Game,
  },
});
