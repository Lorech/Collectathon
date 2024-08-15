import { db, Game } from "astro:db";

export default async function () {
  await db.insert(Game).values([
    {
      id: 1,
      name: "Grand Theft Auto III",
      shortName: "GTA III",
      slug: "gta-iii",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lb8.webp",
    },
    {
      id: 2,
      name: "Grand Theft Auto: Vice City",
      shortName: "GTA VC",
      slug: "gta-vc",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbb.webp",
    },
    {
      id: 3,
      name: "Grand Theft Auto: Liberty City Stories",
      shortName: "GTA LCS",
      slug: "gta-lcs",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co8jav.webp",
    },
    {
      id: 4,
      name: "Grand Theft Auto: Vice City Stories",
      shortName: "GTA VCS",
      slug: "gta-vcs",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lc8.webp",
    },
    {
      id: 5,
      name: "Grand Theft Auto: San Andreas",
      shortName: "GTA SA",
      slug: "gta-sa",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lb9.webp",
    },
    {
      id: 6,
      name: "Grand Theft Auto IV",
      shortName: "GTA IV",
      slug: "gta-iv",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lbv.webp",
    },
    {
      id: 7,
      name: "Grand Theft Auto IV: The Lost and Damned",
      shortName: "GTA TLAD",
      slug: "gta-tlad",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co1th2.webp",
    },
    {
      id: 8,
      name: "Grand Theft Auto IV: The Ballad of Gay Tony",
      shortName: "GTA TBoGT",
      slug: "gta-tbogt",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co28od.webp",
    },
    {
      id: 9,
      name: "Grand Theft Auto: Chinatown Wars",
      shortName: "GTA CW",
      slug: "gta-cw",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co2lba.webp",
    },
    {
      id: 10,
      name: "Grand Theft Auto V",
      shortName: "GTA V",
      slug: "gta-v",
      coverUrl:
        "https://images.igdb.com/igdb/image/upload/t_cover_big/co66qs.webp",
    },
  ]);
}
